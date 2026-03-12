import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { UserCheck } from "lucide-react";

export const metadata = {
  title: "Política de Privacidade | Protect Xavier Facilite",
  description: "Tratamento de dados pessoais e privacidade de clientes e usuários da Protect Xavier Facilite.",
};

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen bg-[#f4f5f8] relative w-full overflow-x-hidden flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#090b14] relative border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)_0%,transparent_60%)] opacity-[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1rem] bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
             <UserCheck className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Política de Privacidade
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            O seu sigilo e a integridade das suas informações são a base do nosso negócio.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 flex-1">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20">
          <div className="bg-[#fafafc] rounded-[2rem] p-8 md:p-14 shadow-sm border border-slate-200/60 text-slate-700 space-y-8 leading-relaxed">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">1. O nosso compromisso com seus Dados</h2>
              <p>
                A sua privacidade é fundamental para nós da <strong>Protect Xavier Facilite</strong>. É nossa política respeitar rigorosamente a sua privacidade em relação a qualquer informação sua que venhamos a coletar em nosso site e sistemas operacionais de controle de acesso (portarias).
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">2. Coleta de Informações na Prática</h2>
              <p>
                Solicitamos dados pessoais (como nome, endereço, veículo e contato) ou métricas biométricas (reconhecimento facial) exclusivamente quando absolutamente necessários para fornecer-lhe um serviço robusto de segurança aprovado em contrato.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[var(--color-accent)]">
                <li>Isso é feito por meios justos, legais e diretos.</li>
                <li>Tudo ocorre com total conhecimento e consentimento prévio da gerência, síndico ou contratante.</li>
                <li>Sempre explicamos o porquê estamos analisando essas informações (ex: checagem de antecedentes de visitantes) e como estes log-ins e cadastros operam dentro da nossa malha de segurança.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">3. Retenção e Segurança (LGPD)</h2>
              <p>
                Mantemos suas retenções logadas pelos prazos estabelecidos nas resoluções vigentes de vigilância e pelo respeito aos critérios da LGPD (Lei Geral de Proteção de Dados do Brasil). O armazenamento de logs e biometria facial, caso aplicável através da tecnologia de parceiros homologados, são resguardados em instâncias com alto nível de encriptação, emulando restrição para evitar perdas e vazamentos físicos ou lógicos.
              </p>
              <p>
                Nós **jamais** comercializamos, locamos ou cedemos banco de informações cadastradas via formulários ou equipamentos para empresas parceiras de publicidade ou telemarketing operarem em seu condomínio.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">4. Conexões de Terceiros e Acesso de Policiais civis</h2>
              <p>
                Nosso site ou sistemas em nuvem podem, ocasionalmente, hospedar links para sites externos ou ceder dados analíticos sigilosos à policia e sistema judiciário estritamente mediante mandado ou necessidade processual cabível à apuração de um evento quebra de perímetro (invasão, assalto ou dolo). Nesses escopos fechados, nosso corpo jurídico operará alinhado à lei competente.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">5. Direito à Exclusão</h2>
              <p>
                O titular dos dados fornecidos nos formulários de "lead" (Falar com Especialistas, Orçamentos) possui direito legal a requirir a extração, edição ou deleção completa dos seus rastros digitais de nossas bases operacionais, mediante formalização enviada por e-mail para o setor administrativo.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-12 text-sm text-slate-500">
              <p>Esta política é efetiva a partir de {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
              <p className="mt-2">Requerimentos e Encarregado de Dados: adm@protectxavierfacilite.com</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
