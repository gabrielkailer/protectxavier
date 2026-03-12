"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
    return (
        <footer id="contato" className="bg-[#090b14] scroll-mt-24 pt-24 pb-12 border-t border-white/5 relative">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24">

                {/* Contact Banner Overlap */}
                <div className="relative -mt-40 mb-20 z-20 mx-4 sm:mx-0">
                    <div className="bg-gradient-to-br from-[var(--color-accent)] to-[#b3905c] rounded-3xl p-10 md:p-14 text-center md:text-left shadow-[0_20px_50px_rgba(202,167,110,0.25)] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
                        {/* Decorative background element for the golden banner */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.07] rounded-full mix-blend-overlay blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        
                        <div className="relative z-10 w-full md:w-auto">
                            <h2 className="text-3xl md:text-4xl font-black text-[#111322] mb-3 tracking-tight">Sua segurança é negociável?</h2>
                            <p className="text-[#111322]/80 font-semibold text-lg max-w-lg">Proteja-se agora. Deixe os riscos para os amadores.</p>
                        </div>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => window.dispatchEvent(new Event("open-contact-modal"))}
                            className="relative z-10 bg-[#111322] text-white font-bold text-base sm:text-lg px-8 py-4 rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_30px_rgba(17,19,34,0.4)] transition-all whitespace-nowrap border border-white/5 w-full md:w-auto"
                        >
                            Falar com Especialista
                            <ArrowRight className="w-5 h-5 text-[var(--color-accent)]" />
                        </motion.button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-slate-400 mb-16">
                    {/* Brand/About */}
                    <div className="lg:col-span-1 border-white/5 space-y-6">
                        <div className="flex items-center">
                            <Image 
                                src="/logo.png" 
                                alt="Protect Xavier Facilite" 
                                width={240} 
                                height={80} 
                                className="h-20 w-auto object-contain brightness-0 invert"
                            />
                        </div>
                        <p className="text-sm">Segurança Patrimonial e Serviços Integrados<br />Atendimento em Alphaville e em toda a região de São Paulo.</p>
                    </div>

                    {/* Quick Contact Links */}
                    <div className="space-y-4">
                        <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
                            <Phone className="w-4 h-4 text-[var(--color-accent)]" /> Contato
                        </h4>
                        <a href="https://wa.me/5511962220061" target="_blank" className="flex items-center gap-3 text-sm hover:text-[var(--color-accent)] transition-colors">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-accent)]"><Phone className="w-4 h-4" /></span>
                            <div>
                                <p>WhatsApp</p>
                                <p className="text-xs text-slate-500">(11) 96222-0061</p>
                            </div>
                        </a>
                        <a href="mailto:adm@protectxavierfacilite.com" className="flex items-center gap-3 text-sm hover:text-[var(--color-accent)] transition-colors">
                            <span className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-[var(--color-accent)]"><Mail className="w-4 h-4" /></span>
                            <div>
                                <p>E-mail</p>
                                <p className="text-xs text-slate-500">adm@protectxavierfacilite.com</p>
                            </div>
                        </a>
                    </div>

                    {/* Address & Map */}
                    <div className="lg:col-span-2 space-y-4">
                        <h4 className="text-white font-bold tracking-widest text-sm uppercase mb-6 flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-[var(--color-accent)]" /> Endereço
                        </h4>
                        <div className="rounded-2xl overflow-hidden border border-white/10 h-40 relative group grayscale hover:grayscale-0 transition-all duration-500">
                            {/* Placeholder de MAPA Moderno */}
                            <div className="absolute inset-0 bg-[#161a33]/50 flex items-center justify-center">
                                <div className="text-center mt-2 px-2">
                                    <p className="text-slate-300 font-medium z-10 text-sm">Estrada Municipal Bela Vista, 917 – sala 401</p>
                                    <p className="text-xs text-slate-500 mt-1">Alphaville, Santana de Parnaíba – SP<br />CEP 06539-010</p>
                                </div>
                            </div>
                            <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Estrada+Municipal+Bela+Vista,917,Santana+de+Parnaiba,SP&zoom=14&size=600x300&style=feature:all|element:labels.text.fill|color:0x8ec3b9&style=feature:all|element:labels.text.stroke|color:0x1a3646&style=feature:all|element:labels.icon|visibility:off&style=feature:administrative.country|element:geometry.stroke|color:0x4b6878&style=feature:administrative.land_parcel|element:labels.text.fill|color:0x64779e&style=feature:administrative.province|element:geometry.stroke|color:0x4b6878&style=feature:landscape.man_made|element:geometry.stroke|color:0x334e87&style=feature:landscape.natural|element:geometry|color:0x021019&style=feature:poi|element:geometry|color:0x283d6a&style=feature:poi|element:labels.text.fill|color:0x6f9ba5&style=feature:poi|element:labels.text.stroke|color:0x1d2c4d&style=feature:poi.park|element:geometry.fill|color:0x02121c&style=feature:poi.park|element:labels.text.fill|color:0x3C7680&style=feature:road|element:geometry|color:0x304a7d&style=feature:road|element:labels.text.fill|color:0x98a5be&style=feature:road|element:labels.text.stroke|color:0x1d2c4d&style=feature:road.highway|element:geometry|color:0x2c6675&style=feature:road.highway|element:geometry.stroke|color:0x255763&style=feature:road.highway|element:labels.text.fill|color:0xb0d5ce&style=feature:road.highway|element:labels.text.stroke|color:0x023e58&style=feature:transit|element:labels.text.fill|color:0x98a5be&style=feature:transit|element:labels.text.stroke|color:0x1d2c4d&style=feature:transit.line|element:geometry.fill|color:0x283d6a&style=feature:transit.station|element:geometry|color:0x3a4762&style=feature:water|element:geometry|color:0x0e1626&style=feature:water|element:labels.text.fill|color:0x4e6d70')] bg-cover bg-center opacity-30 mix-blend-screen pointer-events-none" />
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600 gap-4">
                    <p>© {new Date().getFullYear()} Protect Xavier Facilite. Todos os direitos reservados.</p>
                    <div className="flex gap-6">
                        <Link href="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
                        <Link href="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
