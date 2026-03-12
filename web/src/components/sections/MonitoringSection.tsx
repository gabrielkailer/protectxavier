"use client";

import { motion } from "framer-motion";
import { ShieldAlert, MonitorPlay, ScanFace, Radar, LocateFixed, Activity, LockKeyhole } from "lucide-react";

export function MonitoringSection() {
    return (
        <section id="monitoramento" className="w-full bg-[#0a0c14] py-24 md:py-32 relative overflow-hidden font-sans">
            {/* Dark Tech Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Subtle Grid */}
                <div 
                    className="absolute inset-0 opacity-[0.03]" 
                    style={{ 
                        backgroundImage: 'linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)', 
                        backgroundSize: '40px 40px' 
                    }}
                />
                <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)_0%,transparent_60%)] opacity-[0.04]" />
                <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,#1d4ed8_0%,transparent_60%)] opacity-[0.03]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 relative z-10 w-full">
                
                {/* Header Sequence */}
                <div className="text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            <span className="text-xs font-bold tracking-widest text-slate-300 uppercase">Tecnologia Integrada</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mb-6 leading-[1.1]">
                            Monitoramento <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-accent)] to-[#b3905c]">360°</span><br />
                            Nível Operacional
                        </h2>
                        <p className="max-w-2xl mx-auto text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed font-medium">
                            Não vendemos apenas câmeras. Entregamos uma central de inteligência viva. Vinculados oficialmente ao <span className="text-white font-bold">Smart Sampa</span> para blindagem preditiva.
                        </p>
                    </motion.div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(280px,auto)]">
                    
                    {/* Bento Item 1: Smart Sampa (Large Left) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="lg:col-span-2 lg:row-span-2 rounded-3xl bg-[#111322]/80 border border-white/5 overflow-hidden relative group backdrop-blur-md"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        
                        {/* Abstract map/radar ui */}
                        <div className="absolute right-0 top-0 w-2/3 h-full overflow-hidden pointer-events-none opacity-40">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-white/5 opacity-50" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10 border-dashed" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[var(--color-accent)]/20 bg-[var(--color-accent)]/5" />
                            
                            {/* Points of interest */}
                            <div className="absolute top-[30%] left-[60%] w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,1)]" />
                            <div className="absolute top-[60%] left-[80%] w-2 h-2 bg-[var(--color-accent)] rounded-full shadow-[0_0_10px_rgba(202,167,110,1)]" />
                            <div className="absolute top-[70%] left-[40%] w-2 h-2 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,1)]" />
                        </div>

                        <div className="p-8 sm:p-10 h-full flex flex-col justify-end relative z-10 w-full md:w-2/3">
                            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
                                <Radar className="w-7 h-7" />
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">Integração Smart Sampa</h3>
                            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                                Equipamentos de alta tecnologia interligados diretamente ao sistema oficial da cidade. Isso significa que qualquer ocorrência no seu perímetro aciona não apenas a nossa base, mas coordena resposta imediata das forças públicas.
                            </p>
                        </div>
                    </motion.div>

                    {/* Bento Item 2: Reconhecimento Facial (Top Right) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="rounded-3xl bg-[#111322]/80 border border-white/5 overflow-hidden relative group backdrop-blur-md"
                    >
                        {/* Scanner UI */}
                        <div className="absolute -right-10 -top-10 w-48 h-48 bg-[var(--color-accent)]/5 rounded-full blur-2xl group-hover:bg-[var(--color-accent)]/10 transition-colors" />
                        <div className="absolute top-8 right-8 w-16 h-16 border-2 border-[var(--color-accent)]/20 rounded-xl flex items-center justify-center pointer-events-none">
                            <div className="w-full h-0.5 bg-[var(--color-accent)]/40 absolute top-0 shadow-[0_0_10px_rgba(202,167,110,0.5)] animate-[bounce_2s_infinite]" />
                            <ScanFace className="w-8 h-8 text-[var(--color-accent)]/30" />
                        </div>

                        <div className="p-8 h-full flex flex-col">
                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-slate-300">
                                <ScanFace className="w-6 h-6" />
                            </div>
                            <div className="mt-12">
                                <h3 className="text-xl font-bold text-white mb-3">Reconhecimento Facial</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Base de dados em nuvem. Controle hiper-restrito e instantâneo de quem entra e quem sai.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bento Item 3: Visão e 24h (Bottom Right) */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="rounded-3xl bg-[#111322]/80 border border-white/5 overflow-hidden relative group backdrop-blur-md p-8 flex flex-col"
                    >
                        {/* 360 Camera layout */}
                        <div className="absolute inset-0 opacity-10 pointer-events-none">
                            <div className="w-full h-full grid grid-cols-6 grid-rows-6">
                                {[...Array(36)].map((_, i) => (
                                    <div key={i} className="border-[0.5px] border-white/20" />
                                ))}
                            </div>
                        </div>

                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-auto text-slate-300 relative z-10">
                            <MonitorPlay className="w-6 h-6" />
                        </div>
                        <div className="mt-12 relative z-10">
                            <h3 className="text-xl font-bold text-white mb-3">Visão 360° & 24Hrs</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Nenhum ponto cego. Central operando ininterruptamente com análise comportamental ativa.
                            </p>
                        </div>
                    </motion.div>

                </div>

                {/* Status Bar Floating */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="mt-8 border border-white/10 bg-[#111322]/60 backdrop-blur-xl rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
                >
                    <div className="flex items-center gap-6 w-full sm:w-auto">
                        <div className="flex -space-x-3">
                            <div className="w-12 h-12 rounded-full border-2 border-[#111322] bg-slate-800 flex items-center justify-center text-white"><ShieldAlert className="w-5 h-5"/></div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#111322] bg-[var(--color-accent)] flex items-center justify-center text-[#111322]"><LockKeyhole className="w-5 h-5"/></div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#111322] bg-blue-600 flex items-center justify-center text-white"><Activity className="w-5 h-5"/></div>
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm sm:text-base">Blindagem Preditiva Ativa</p>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="text-xs text-emerald-400 font-mono tracking-widest uppercase">Operação Normal • 100% Cobertura</span>
                            </div>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                        className="w-full sm:w-auto text-sm font-bold tracking-wide text-white bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-3 rounded-xl transition-all"
                    >
                        Solicitar Análise de Risco
                    </button>
                </motion.div>

            </div>
        </section>
    );
}
