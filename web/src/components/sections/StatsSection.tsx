import statsData from "@/data/stats.json";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export function StatsSection() {
    return (
        <section className="relative z-20 -mt-16 md:-mt-24 max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24">
            <div className="glass rounded-xl p-8 md:p-12 shadow-2xl overflow-hidden relative border border-white/5">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent opacity-60" />

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10 text-center">

                    <div className="flex flex-col items-center justify-center pt-6 sm:pt-0">
                        <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                            <AnimatedCounter value={statsData.residences_protected} />+
                        </span>
                        <span className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">
                            Locais Protegidos
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-6 sm:pt-0">
                        <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                            <AnimatedCounter value={statsData.threats_neutralized} />+
                        </span>
                        <span className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">
                            Ameaças Neutralizadas
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-6 sm:pt-0">
                        <span className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tighter">
                            <AnimatedCounter value={statsData.response_time_seconds} />s
                        </span>
                        <span className="text-xs md:text-sm text-slate-400 uppercase tracking-widest font-semibold">
                            Tempo de Resposta
                        </span>
                    </div>

                    <div className="flex flex-col items-center justify-center pt-6 sm:pt-0 sm:border-t-0">
                        <span className="text-4xl md:text-5xl font-bold text-[var(--color-accent)] mb-2 drop-shadow-[0_0_15px_rgba(202,167,110,0.5)] tracking-tighter">
                            <AnimatedCounter value={statsData.active_cameras} />
                        </span>
                        <span className="text-xs md:text-sm text-[var(--color-accent)] uppercase tracking-widest font-bold">
                            Câmeras Ativas
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
}
