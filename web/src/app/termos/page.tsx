import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Shield } from "lucide-react";

export const metadata = {
  title: "Termos de Uso | Protect Xavier Facilite",
  description: "Termos de Uso e condições de prestação de serviços da Protect Xavier Facilite.",
};

export default function TermosPage() {
  return (
    <main className="min-h-screen bg-[#f4f5f8] relative w-full overflow-x-hidden flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#090b14] relative border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)_0%,transparent_60%)] opacity-[0.05] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20 text-center relative z-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-[1rem] bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
             <Shield className="w-8 h-8 text-[var(--color-accent)]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
            Termos de Uso
          </h1>
          <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto">
            Ao acessar e utilizar nossos serviços, você concorda com os termos e condições descritos abaixo.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 lg:py-24 flex-1">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 md:px-20">
          <div className="bg-[#fafafc] rounded-[2rem] p-8 md:p-14 shadow-sm border border-slate-200/60 text-slate-700 space-y-8 leading-relaxed">
            
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">1. Aceitação dos Termos</h2>
              <p>
                Ao acessar o site da <strong>Protect Xavier Facilite</strong>, o usuário expressamente concorda em cumprir e sujeitar-se a estes Termos de Uso, a todas as leis e regulamentos aplicáveis. Caso você não concorde com qualquer um dos nossos termos, o uso restrito de nossos serviços poderá ser negado.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">2. Uso da Licença e Serviços</h2>
              <p>
                A Protect Xavier Facilite fornece serviços técnicos e operacionais de segurança, monitoramento 24h e facilities. As informações presentes neste site são estritamente para uso informativo e comercial. É concedida a permissão para visualizar temporariamente uma cópia dos materiais neste site apenas para fins não comerciais da sua empresa ou condomínio.
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4 marker:text-[var(--color-accent)]">
                <li>Você não deve modificar ou copiar os materiais comerciais de nossa marca.</li>
                <li>É terminantemente proibido o uso dos relatórios ou logs de acessos emitidos pela Protect Xavier para qualquer finalidade que não seja a segurança interna do cliente.</li>
                <li>Não tentar descompilar ou fazer engenharia reversa de qualquer software ou circuito operado por nós durante a prestação de serviços.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">3. Isenção de Responsabilidade</h2>
              <p>
                Os orçamentos ou dados simulados ("Contador de Invasões") presentes neste portal são estimativas e médias metropolitanas baseadas em segurança pública. Nossos serviços, contudo, são prestados como obrigações de "meio" e "prevenção"; não assumimos o dever ou garantia absoluta contra a ocorrência de furtos, porém desempenharemos rígidos processos de inteligência e ostensividade para mitigá-los ou interceptá-los de acordo com o padrão da indústria.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">4. Obrigações do Cliente</h2>
              <p>
                Ao fechar uma contratação, é papel e responsabilidade do cliente fornecer acesso integral e em boas condições aos pontos de energia, conectividade e espaço para a alocação de nossos postos base, além de respeitar as diretrizes de integração de equipes e crachás recomendadas no processo de implantação do Smart Sampa / CFTV.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#111322] tracking-tight">5. Modificações dos Termos</h2>
              <p>
                A <strong>Protect Xavier Facilite</strong> pode revisar ou alterar estes Termos de Uso a qualquer tempo, sem a necessidade de aviso prévio. Os clientes vinculados continuarão sob as condições comerciais já estipuladas nos seus contratos físicos de SLA.
              </p>
            </div>

            <div className="pt-8 border-t border-slate-200 mt-12 text-sm text-slate-500">
              <p>Última atualização: {new Date().toLocaleDateString('pt-BR', { month: 'long', year: 'numeric' })}.</p>
              <p className="mt-2">Dúvidas? Entre em contato pelo e-mail: adm@protectxavierfacilite.com</p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
