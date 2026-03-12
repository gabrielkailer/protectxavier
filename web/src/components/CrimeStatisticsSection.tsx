"use client";

import { motion } from "framer-motion";

export function CrimeStatisticsSection() {
    return (
        <section className="w-full bg-[#f4f5f8] py-16 md:py-20 min-h-[100vh] flex items-center relative overflow-hidden">
            {/* Background Organic Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.08]">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="wave-pattern" width="800" height="400" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
                            <path d="M 0 100 Q 200 50, 400 100 T 800 100" fill="none" stroke="#111322" strokeWidth="1.5" />
                            <path d="M 0 140 Q 200 90, 400 140 T 800 140" fill="none" stroke="#111322" strokeWidth="1.5" />
                            <path d="M 0 180 Q 200 130, 400 180 T 800 180" fill="none" stroke="#111322" strokeWidth="1.5" />
                            <path d="M 0 220 Q 200 170, 400 220 T 800 220" fill="none" stroke="#111322" strokeWidth="1.5" />
                            <path d="M 0 260 Q 200 210, 400 260 T 800 260" fill="none" stroke="#111322" strokeWidth="1.5" />
                            <path d="M 0 300 Q 200 250, 400 300 T 800 300" fill="none" stroke="#111322" strokeWidth="1.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#wave-pattern)" />
                </svg>
            </div>

            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)_0%,transparent_50%)] opacity-[0.03] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 relative z-10 w-full">
                {/* Header Row */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-12">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black text-[#111322] tracking-tighter leading-[1]">
                        ESTATÍSTICAS<br />DE RISCO
                    </h2>
                    <p className="text-slate-500 text-sm md:text-right mt-6 md:mt-0 font-medium tracking-widest uppercase">
                        02 / Monitoramento ativo<br />& Dados em tempo real
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                    {/* Left Column */}
                    <div className="flex flex-col gap-10">
                        {/* Live Counter Card */}
                        <div className="bg-[#fafafc] rounded-2xl p-6 sm:p-8 border border-slate-200 relative overflow-hidden group shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                            <div className="absolute top-6 right-6 w-8 h-8 rounded-full bg-[#111322] border border-white/10 flex items-center justify-center">
                                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]" />
                            </div>
                            <h3 className="text-xl font-bold text-[#111322] mb-2 tracking-tight">Contador de Incidentes</h3>
                            <p className="text-xs sm:text-sm text-slate-500 mb-6 max-w-xs">Tentativas de invasão estimadas (SP e Região) desde a meia-noite</p>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6 }}
                                className="text-5xl sm:text-6xl font-black text-[var(--color-accent)] mb-6 tracking-tighter"
                            >
                                167
                            </motion.div>

                            <p className="text-xs text-slate-500 leading-relaxed">
                                O contador em tempo real é uma estimativa baseada na mais recente taxa oficial anual de roubos na região metropolitana, atualizada quando novos dados são liberados.
                            </p>
                        </div>

                        {/* Bullet points */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-6">
                            <div>
                                <h4 className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#111322] font-bold mb-2 sm:mb-3">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                                    Criminosos Evitam Patrulhas
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 sm:pl-5">
                                    Eles não arriscam ser vistos em locais visivelmente monitorados.
                                </p>
                            </div>
                            <div>
                                <h4 className="flex items-center gap-2 sm:gap-3 text-sm sm:text-base text-[#111322] font-bold mb-2 sm:mb-3">
                                    <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--color-accent)] shrink-0" />
                                    A Polícia Trata Prioridades
                                </h4>
                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-4 sm:pl-5">
                                    A resposta pública pode levar 20+ minutos; criminosos fogem em 5.
                                </p>
                            </div>
                        </div>

                        <div className="mt-2">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => {
                                    window.open("https://wa.me/5511962220061", "_blank");
                                }}
                                className="group inline-flex items-center justify-center sm:justify-start gap-3 px-6 py-3 rounded-xl bg-[var(--color-accent)] text-[#111322] font-semibold text-sm sm:text-base hover:shadow-[0_0_30px_rgba(202,167,110,0.4)] transition-all duration-300 w-full sm:w-auto mt-4"
                            >
                                Proteger meu patrimônio
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                            </motion.button>
                        </div>
                    </div>

                    {/* Right Column - Chart */}
                    <div className="flex flex-col w-full h-full">
                        <div className="flex items-center justify-between mb-8 sm:mb-12 border-b border-slate-200 pb-4">
                            <h3 className="text-lg sm:text-xl font-bold text-[#111322] tracking-tight">Ocorrências nesta semana</h3>
                        </div>

                        <div className="relative flex-1 min-h-[250px] sm:min-h-[300px] w-full flex items-end justify-between pl-8 sm:pl-12">
                            {/* Horizontal guide lines */}
                            <div className="absolute inset-0 flex flex-col justify-between pointer-events-none z-0">
                                {[200, 150, 120, 80, 60, 40, 20, 0].map((val) => (
                                    <div key={val} className="w-full flex items-center border-b border-slate-100 h-0 relative">
                                        <span className="text-[11px] font-medium text-slate-400 absolute -left-8 sm:-left-12 -translate-y-1/2 w-6 sm:w-8 text-right pr-2">
                                            {val}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Bars */}
                            {[
                                { day: "Seg", value: 42, active: false },
                                { day: "Ter", value: 58, active: false },
                                { day: "Qua", value: 12, active: false },
                                { day: "Qui", value: 42, active: false },
                                { day: "Sex", value: 95, active: false },
                                { day: "Sáb", value: 167, active: true },
                                { day: "Dom", value: 42, active: false },
                            ].map((item, i) => (
                                <div key={i} className="relative z-10 flex flex-col items-center flex-1 h-full justify-end group px-1 sm:px-2">
                                    {/* Tooltip (Only showing natively active to match image) */}
                                    {item.active && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.6 }}
                                            className="absolute -top-10 left-1/2 -translate-x-1/2 bg-[#111322] border border-white/10 shadow-xl text-white text-xs py-1.5 px-3 rounded-full font-bold whitespace-nowrap z-20"
                                        >
                                            {item.value}
                                        </motion.div>
                                    )}

                                    <motion.div
                                        initial={{ height: 0 }}
                                        whileInView={{ height: `${(item.value / 200) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                                        className={`w-3 sm:w-5 rounded-t-full relative overflow-hidden ${item.active ? 'bg-[#111322]' : 'bg-[var(--color-accent)]'}`}
                                    >
                                    </motion.div>
                                    <span className="mt-6 text-xs sm:text-sm text-slate-500 font-medium tracking-wide">
                                        {item.day}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
