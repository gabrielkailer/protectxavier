"use client";

import { motion } from "framer-motion";
import { Building2, Castle, Home, Factory, Hotel, School } from "lucide-react";

export function ClientsCarousel() {
    // Array de ícones como placeholders para logos de condomínios/empresas
    const clients = [
        { name: "Silva empreendimentos", icon: <Building2 className="w-10 h-10" /> },
        { name: "HCON Engenharia", icon: <Castle className="w-10 h-10" /> },
        { name: "Água Doce", icon: <Home className="w-10 h-10" /> },
        { name: "CSI Empreendimentos", icon: <Factory className="w-10 h-10" /> },
        { name: "Rual Engenharia", icon: <Building2 className="w-10 h-10" /> },
        { name: "Villa BBM", icon: <Hotel className="w-10 h-10" /> },
        { name: "Mendes Salge", icon: <School className="w-10 h-10" /> },
    ];

    // Duplicamos o array para criar o efeito de loop infinito suave
    const infiniteClients = [...clients, ...clients];

    return (
        <section id="clientes" className="py-20 md:py-24 min-h-[50vh] flex flex-col justify-center scroll-mt-24 bg-[var(--background)] relative overflow-hidden w-full">
            {/* Background Organic Lines */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]">
                <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="wave-pattern-clients" width="800" height="400" patternUnits="userSpaceOnUse" patternTransform="rotate(-15)">
                            <path d="M 0 100 Q 200 50, 400 100 T 800 100" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                            <path d="M 0 140 Q 200 90, 400 140 T 800 140" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                            <path d="M 0 180 Q 200 130, 400 180 T 800 180" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                            <path d="M 0 220 Q 200 170, 400 220 T 800 220" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                            <path d="M 0 260 Q 200 210, 400 260 T 800 260" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                            <path d="M 0 300 Q 200 250, 400 300 T 800 300" fill="none" stroke="#ffffff" strokeWidth="1.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#wave-pattern-clients)" />
                </svg>
            </div>
            <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(ellipse_at_top_right,var(--color-accent)_0%,transparent_50%)] opacity-[0.05] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 mb-12 text-center relative z-10 w-full">
                <h2 className="text-sm uppercase tracking-[0.2em] font-bold text-[var(--color-accent)] mb-4">
                    Alguns de nossos clientes
                </h2>
                <h3 className="text-3xl md:text-4xl font-bold text-white">
                    Somos gratos por trabalhar com clientes incríveis
                </h3>
                <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
                    Empresas e condomínios que confiam na nossa equipe para manter rotinas mais seguras e organizadas.
                </p>
            </div>

            <div className="relative w-full overflow-hidden flex items-center relative z-10">
                {/* Gradientes laterais para esconder o corte da animação */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--background)] to-transparent z-20 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--background)] to-transparent z-20 pointer-events-none" />

                <motion.div
                    className="flex gap-16 md:gap-24 w-max"
                    animate={{
                        x: ["0%", "-50%"],
                    }}
                    transition={{
                        duration: 25,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                >
                    {infiniteClients.map((client, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-3 text-slate-400 hover:text-[var(--color-accent)] transition-colors duration-300 opacity-80 hover:opacity-100 grayscale hover:grayscale-0 cursor-pointer"
                        >
                            {client.icon}
                            <span className="text-lg font-bold whitespace-nowrap text-white hover:text-[var(--color-accent)] transition-colors">{client.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
