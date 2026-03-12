"use client";

import { motion } from "framer-motion";
import { Shield, Target, Crosshair } from "lucide-react";

export function AboutUsSection() {
    return (
        <section id="quem-somos" className="py-24 scroll-mt-24 bg-[#f4f5f8] relative w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Left: Content */}
                    <div className="lg:w-1/2 space-y-8">
                        <div>
                            <span className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-accent)] mb-4 block">
                                Quem Somos
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#111322] leading-tight tracking-tight">
                                A Protect Xavier Facilite é especializada em <br />
                                <span className="text-[var(--color-accent)] text-3xl md:text-4xl mt-2 block tracking-tight">Segurança Patrimonial e serviços integrados.</span>
                            </h2>
                        </div>

                        <p className="text-lg text-slate-600 leading-relaxed font-light">
                            Atuamos com processos claros, postura profissional e foco em prevenção, para proteger o seu patrimônio e simplificar a sua rotina.
                        </p>

                        <div className="pt-2">
                            <h3 className="text-base font-medium text-[var(--color-accent)] mb-4">O que você pode esperar da nossa entrega:</h3>
                            <ul className="space-y-4">
                                {[
                                    "Soluções personalizadas de acordo com o tipo de local e necessidade",
                                    "Equipe qualificada e alinhada a procedimentos operacionais",
                                    "Atuação discreta e eficiente no dia a dia",
                                    "Rotinas que ajudam a otimizar custos sem perder qualidade",
                                ].map((item, i) => (
                                    <motion.li
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: i * 0.1 }}
                                        viewport={{ once: true }}
                                        className="flex items-start gap-3"
                                    >
                                        <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shrink-0" />
                                        <span className="text-slate-600 hover:text-[#111322] transition-colors leading-snug">{item}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>

                        <div className="pt-6 border-t border-slate-200 mt-2 bg-slate-50 p-6 rounded-2xl flex items-start gap-4 shadow-sm">
                            <div className="w-12 h-12 bg-[#fafafc] rounded-full flex shrink-0 items-center justify-center border border-slate-200 shadow-sm">
                                <span className="font-black text-[var(--color-accent)] text-lg">EX</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-[#111322] mb-1">Emerson Xavier <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 ml-2 align-middle">Fundador</span></h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    Ex-sargento da Polícia Militar com mais de 30 anos de experiência. Compromisso com atendimento sério, acessível e orientado a resultado.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Premium Placeholder or Image Layering */}
                    <div className="lg:w-1/2 w-full relative h-[500px] flex items-center justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="absolute inset-0 bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl border-[3px] border-slate-200 shadow-[0_30px_60px_rgba(17,19,34,0.12)] overflow-hidden flex items-center justify-center"
                        >
                            {/* Animated background rings */}
                            <div className="absolute w-[800px] h-[800px] border border-slate-200 rounded-full z-0 animate-[spin_60s_linear_infinite]" />
                            <div className="absolute w-[600px] h-[600px] border-2 border-[var(--color-accent)]/20 rounded-full z-0 animate-[spin_40s_linear_infinite_reverse]" />
                            <div className="absolute w-[400px] h-[400px] border border-slate-200 rounded-full z-0 animate-[spin_20s_linear_infinite]" />

                            <Shield className="w-32 h-32 text-[var(--color-accent)] drop-shadow-[0_10px_30px_rgba(202,167,110,0.6)] z-10" />
                        </motion.div>
                        <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl border-2 border-slate-200 shadow-[0_20px_40px_rgba(17,19,34,0.15)] hidden md:block">
                            <p className="text-[var(--color-accent)] font-black text-3xl tracking-tight">100%</p>
                            <p className="text-sm text-slate-600 font-medium uppercase tracking-wider mt-1">Controle Total</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
