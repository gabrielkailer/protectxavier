"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
    return (
        <section id="inicio" className="relative w-full h-[100vh] min-h-[600px] flex items-end justify-start pb-20 sm:pb-24 lg:pb-32 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0 bg-[#111322]">
                <Image
                    src="/img-background-hero.jpeg"
                    alt="Security Services Background"
                    fill
                    className="object-cover opacity-80"
                    priority
                />
                {/* Subtle gradient to ensure text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#111322]/90 via-[#111322]/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111322] to-transparent" />
            </div>

            <div className="absolute top-32 md:top-40 left-0 right-0 z-20 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 flex justify-end">
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-[var(--color-accent)] font-medium text-xs sm:text-sm"
                >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                    <span>Empresa de Segurança em São Paulo</span>
                </motion.div>
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-2xl"
                >
                    <p className="text-sm sm:text-sm md:text-base text-slate-300 mb-6 sm:mb-8 max-w-lg leading-relaxed">
                        Para empresas, condomínios e obras em toda a região de São Paulo.<br className="hidden sm:block" />
                        Atendimento com base em Alphaville. Faça sua cotação em poucos cliques e receba retorno em até 24h úteis.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-[var(--color-accent)] text-[#111322] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm md:text-base shadow-[0_0_30px_rgba(202,167,110,0.3)] hover:shadow-[0_0_40px_rgba(202,167,110,0.5)] transition-shadow duration-300"
                            onClick={() => {
                                window.open("https://wa.me/5511962220061", "_blank");
                            }}
                        >
                            Orçamento no WhatsApp
                        </motion.button>

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative inline-flex items-center justify-center gap-2 sm:gap-3 bg-transparent border-2 border-[var(--color-accent)] text-[var(--color-accent)] px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-bold text-sm md:text-base hover:bg-[var(--color-accent)]/10 transition-colors duration-300"
                            onClick={() => {
                                window.dispatchEvent(new Event("open-contact-modal"));
                            }}
                        >
                            Falar por e-mail
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
