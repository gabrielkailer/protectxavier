import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import OpenAI from "openai";
import slugify from "slugify";

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// Initialize Supabase with SERVICE_ROLE key to bypass RLS for inserting articles
const supabaseAdmin = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const TOPICS = [
  "Inovações em Controle de Acesso e Portaria Remota",
  "O impacto da Inteligência Artificial na Segurança Patrimonial",
  "Gestão de Facilities: Como otimizar custos sem perder qualidade",
  "Tendências de Segurança Eletrônica para Condomínios de Alto Padrão",
  "Biometria e Reconhecimento Facial: O futuro da segurança corporativa",
  "Integração tecnológica em sistemas de monitoramento 24h",
  "Segurança Preditiva: Antecipando riscos com tecnologia de ponta",
  "Os desafios legais e de LGPD no monitoramento por câmeras",
  "Como a automação residencial e condominial aumenta a segurança",
  "Treinamento de equipes de segurança: A importância do fator humano aliado à tecnologia"
];

export async function GET(request: Request) {
  try {
    // 1. Validar se temos a chave do OpenAI
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "OPENAI_API_KEY não configurada no ambiente." },
        { status: 500 }
      );
    }

    const randomTopic = TOPICS[Math.floor(Math.random() * TOPICS.length)];

    // 2. Buscar Títulos Existentes para Evitar Duplicidade
    const { data: existingTitlesData } = await supabaseAdmin.from("articles").select("title");
    const existingTitles = existingTitlesData?.map((item) => item.title) || [];
    
    let avoidTitlesContext = "";
    if (existingTitles.length > 0) {
      avoidTitlesContext = `\n    AVISO CRÍTICO: Você DEVE criar um título 100% NOVO e INÉDITO. Os seguintes artigos já existem no nosso blog, é ESTRITAMENTE PROIBIDO usar títulos iguais ou muito parecidos com estes:\n    ${existingTitles.map(t => `- ${t}`).join('\n    ')}\n`;
    }

    // 3. Chamar a API da OpenAI para gerar o artigo
    const prompt = `Você é um redator sênior especialista em segurança patrimonial, facilities, tecnologia e inovação e escreve para a empresa "Protect Xavier".
    Seu objetivo é escrever um artigo engajador, altamente profissional e rico em informações focado no seguinte tema geral: "${randomTopic}".
    ${avoidTitlesContext}

    As regras obrigatórias para o artigo são:
    1. O título (H1) deve ser marcante e atrativo. (NÃO inclua a tag # antes dele na sua resposta, apenas devolva o título numa linha separada no JSON que vou pedir).
    2. O artigo deve ser profundo, com média de 600 a 800 palavras.
    3. Use a formatação Markdown para o corpo do texto (use ## para subtítulos h2, use negrito nas palavras-chave, e insira pelo menos uma lista com marcadores - * ou -).
    4. O tom deve ser autoritativo, moderno e passar extrema confiança, combinando com uma empresa premium ("Protect Xavier").
    5. Crie um resumo curto (excerpt) de no máximo 2 linhas para ser o subtítulo do card.
    6. Mande em 'unsplash_keyword' de 2 a 3 palavras em inglês focadas estritamente em INFRAESTRUTURA EMPRESARIAL ou SEGURANÇA FÍSICA/LÓGICA. (Ex: 'corporate data center', 'modern office building', 'cctv camera', 'glass corporate lobby', 'server room'). É ESTRITAMENTE PROIBIDO usar palavras abrangentes como 'technology' ou 'minimalist' sozinhas, pois isso retorna imagens de fones de ouvido e teclados de mesa. Seja literal, buscando o ambiente ou o equipamento de segurança em si.
    7. Retorne estritamente um JSON.

    As chaves do JSON são: "title", "excerpt", "markdown_content", "unsplash_keyword", "category" (Sugira uma categoria curta em português).`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "Você é um robô puramente retornador de JSON. Não fale oi, não use código markdown de backticks ao redor do json, APENAS retorne um objeto JSON puro e absoluto." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
    });
    
    // Tratativa do retorno puxando texto raw e convertendo em json na marra
    const rawContent = completion.choices[0].message.content || "{}"; 
    let articleData;
    
    try {
        articleData = JSON.parse(rawContent);
    } catch (e) {
        console.error("Falha ao parsear JSON:", rawContent);
        throw new Error("Resposta da IA não foi um JSON válido.");
    }

    const { title, excerpt, markdown_content, unsplash_keyword, category } = articleData;

    // 4. Buscar Imagem na Unsplash API (Mantemos a busca da imagem funcionando)
    let coverImage = "";
    try {
      if (process.env.UNSPLASH_ACCESS_KEY) {
          // Vamos pegar TODAS as imagens já geradas no banco para não repetir
          const { data: existingArticles } = await supabaseAdmin.from('articles').select('cover_image');
          const usedImages = existingArticles?.map(a => a.cover_image).filter(Boolean) || [];

          // Pula para páginas aleatórias da Unsplash para variar o leque de escolhas
          const randomPage = Math.floor(Math.random() * 3) + 1;

          const unsplashRes = await fetch(
            `https://api.unsplash.com/search/photos?query=${encodeURIComponent(unsplash_keyword)}&client_id=${process.env.UNSPLASH_ACCESS_KEY}&per_page=15&page=${randomPage}&orientation=landscape`
          );
          const unsplashData = await unsplashRes.json();
          
          if (unsplashData.results && unsplashData.results.length > 0) {
            // Filtro absoluto: Remove qualquer foto que já exista no banco
            let unusedResults = unsplashData.results.filter((photo: any) => {
                const tempUrlObj = new URL(photo.urls.regular);
                tempUrlObj.searchParams.set('fm', 'webp');
                tempUrlObj.searchParams.set('q', '80');
                return !usedImages.includes(tempUrlObj.toString());
            });

            // Se for um milagre e as 15 fotos já estiverem no banco (raríssimo), voltamos pro pool todo
            if (unusedResults.length === 0) {
                unusedResults = unsplashData.results;
            }

            // Agora sorteia apenas em cima das fotos INÉDITAS
            const randomPhotoIndex = Math.floor(Math.random() * unusedResults.length);
            const baseUrl = unusedResults[randomPhotoIndex].urls.regular;
            const urlObj = new URL(baseUrl);
            urlObj.searchParams.set('fm', 'webp');
            urlObj.searchParams.set('q', '80');
            coverImage = urlObj.toString();
          }
      }
    } catch (error) {
      console.error("Erro ao buscar imagem no Unsplash", error);
    }

    // 5. Preparar Dados Finais e Inserir no Supabase
    const slug = slugify(title, { lower: true, strict: true, locale: "pt" });
    const wordCount = markdown_content.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / 200) || 5;

    const { data: insertedArticle, error: dbError } = await supabaseAdmin
      .from("articles")
      .insert({
        title,
        slug,
        excerpt,
        content: markdown_content,
        cover_image: coverImage || null,
        category,
        read_time: readTime,
        author: "Protect Xavier Insights"
      })
      .select()
      .single();

    if (dbError) {
      if (dbError.code === "23505") {
          const fallbackSlug = `${slug}-${Math.floor(Math.random() * 1000)}`;
          await supabaseAdmin.from("articles").insert({
            title, slug: fallbackSlug, excerpt, content: markdown_content, cover_image: coverImage || null, category, read_time: readTime
          });
      } else {
        throw dbError;
      }
    }

    return NextResponse.json({
      success: true,
      message: "Artigo gerado com sucesso!",
      article: {
          title,
          slug,
          category
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error("Erro na cron de artigo:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}
