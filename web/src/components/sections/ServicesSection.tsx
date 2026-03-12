"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const services = [
    {
        tag: "Estratégia",
        title: "Segurança Patrimonial Armada e Preventiva",
        description: "Equipe altamente treinada para garantir a integridade física do seu patrimônio. Atuamos com abordagens preventivas, de resposta rápida e monitoramento de atividades vitais da infraestrutura.",
        highlight: "Serviço Especializado",
        image: "https://images.unsplash.com/photo-1752665607772-2329d137d719?q=80&w=800&auto=format&fit=crop"
    },
    {
        tag: "Condomínios e Empresas",
        title: "Controle de Acesso",
        description: "Operações de portaria blindada, identificação rigorosa e registro completo do fluxo de pessoas, terceiros e moradores.",
        highlight: "",
        image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800&auto=format&fit=crop"
    },
    {
        tag: "Operacional",
        title: "Monitoramento 24h",
        description: "Câmeras, alarmes e rastreamento de área integrados na central para pronta resposta tática e neutralização de ameaças.",
        highlight: "",
        image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800&auto=format&fit=crop"
    },
    {
        tag: "Facilities",
        title: "Limpeza e Conservação",
        description: "Serviços completos para organização civil, com equipes experientes em jardinagem, zeladoria e manutenção predial.",
        highlight: "",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop"
    }
];

export function ServicesSection() {
    return (
        <section id="servicos" className="py-20 md:py-24 scroll-mt-24 bg-[#0d0f1c] relative z-10 border-t border-white/5 min-h-[100vh] w-full flex items-center justify-center overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 w-full">

                {/* Cabeçalho */}
                <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass border border-[var(--color-accent)]/30 text-[var(--color-accent)] font-semibold text-xs uppercase tracking-widest"
                    >
                        Nos contrate para proteger
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
                        Nossos serviços
                    </h2>

                    <p className="text-base md:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        Nosso trabalho é pensado para entregar segurança, organização e tranquilidade, com soluções sob medida para a sua operação.
                    </p>
                </div>

                {/* Grid 2x2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="rounded-[2rem] bg-[#111322] border border-white/10 p-6 md:p-8 flex flex-col group hover:border-[var(--color-accent)]/50 transition-colors duration-500 shadow-xl"
                        >
                            <div className="w-full h-48 md:h-56 rounded-[1.5rem] bg-[#090b14] relative mb-6 overflow-hidden flex items-center justify-center group-hover:bg-[#0c0f1d] transition-colors duration-500">
                                <span className="absolute top-4 right-4 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-semibold text-white z-10 uppercase tracking-wider">
                                    {service.tag}
                                </span>
                                <div className="absolute inset-0 bg-[#0d0f1c]/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
                                <div className="absolute inset-0 bg-gradient-to-br from-[#111322]/80 via-transparent to-transparent z-10 pointer-events-none" />
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                                />
                            </div>
                            <div className="px-2 flex flex-col flex-1">
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 tracking-tight leading-loose">
                                    {service.title}
                                </h3>
                                <p className="text-slate-400 text-sm md:text-base leading-relaxed font-light mb-6 flex-1">
                                    {service.description}
                                </p>
                                {service.highlight && (
                                    <span className="text-[11px] font-medium text-slate-500 flex items-center gap-2 mt-auto pt-4 border-t border-white/5">
                                        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse" />
                                        {service.highlight}
                                    </span>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
