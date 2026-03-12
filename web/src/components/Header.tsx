"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Shield, Phone } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const router = useRouter();
    const isBlogRoute = pathname?.startsWith("/blog");

    const navLinks = [
        { name: "Início", href: "/#inicio" },
        { name: "Serviços", href: "/#servicos" },
        { name: "Nossos Clientes", href: "/#clientes" },
        { name: "Quem Somos", href: "/#quem-somos" },
        { name: "Blog", href: "/blog" },
        { name: "Contato", href: "/#contato" },
    ];

    const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (href === "/blog") {
            setIsMobileMenuOpen(false);
            return; // Permite o next/link mudar de rota
        }

        e.preventDefault();
        
        // Se estamos na Landing Page, faz o scroll macio
        if (pathname === "/") {
            const targetId = href.replace("/", ""); // remove a barra pra puxar pelo querySelector
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
                setIsMobileMenuOpen(false);
            } else {
                router.push(href);
            }
        } else {
            // Se estamos no blog, manda voltar forçadamente pra url principal
            router.push(href);
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`absolute top-0 left-0 right-0 z-50 py-6 w-full ${
                    isBlogRoute ? 'bg-[#0f111a]/95 backdrop-blur-md border-b border-white/5 shadow-lg' : 'bg-transparent'
                }`}
            >
                <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-20 lg:px-24 flex items-center justify-between">

                    {/* Logo */}
                    <Link
                        href="/#inicio"
                        onClick={(e) => handleScrollToSection(e, "/#inicio")}
                        className="flex items-center relative w-44 h-12 md:w-56 md:h-16 transition-transform group-hover:scale-105"
                    >
                        <Image
                            src="/logo.png"
                            alt="Protect Xavier Facilite Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScrollToSection(e, link.href)}
                                className="text-sm font-medium text-slate-300 hover:text-[var(--color-accent)] transition-colors relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--color-accent)] transition-all duration-300 group-hover:w-full"></span>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button & Mobile Toggle */}
                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => window.open("https://wa.me/5511962220061", "_blank")}
                            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 hover:bg-[var(--color-accent)] hover:text-[#111322] font-semibold text-sm transition-all duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            <span>Orçamento Rápido</span>
                        </button>

                        <button
                            className="lg:hidden p-2 text-slate-300 hover:text-white transition-colors"
                            onClick={() => setIsMobileMenuOpen(true)}
                        >
                            <Menu className="w-6 h-6" />
                        </button>
                    </div>

                </div>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-[#090b14]/95 backdrop-blur-xl z-[60] lg:hidden"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] bg-[#111322] border-l border-white/10 shadow-2xl z-[70] flex flex-col p-6 lg:hidden"
                        >
                            <div className="flex items-center justify-between mb-12">
                                <div className="flex items-center relative w-44 h-12">
                                    <Image
                                        src="/logo.png"
                                        alt="Protect Xavier Facilite Logo"
                                        fill
                                        className="object-contain object-left"
                                        priority
                                    />
                                </div>
                                <button
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="p-2 text-slate-400 hover:text-white bg-white/5 rounded-full"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>

                            <nav className="flex flex-col gap-6 flex-1">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleScrollToSection(e, link.href)}
                                        className="text-xl font-medium text-slate-300 hover:text-[var(--color-accent)] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </nav>

                            <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                                <button
                                    onClick={() => {
                                        window.open("https://wa.me/5511962220061", "_blank");
                                    }}
                                    className="w-full flex justify-center items-center gap-2 px-5 py-4 rounded-xl bg-[var(--color-accent)] text-[#111322] font-bold text-lg hover:bg-[var(--color-accent)]/90 transition-all duration-300"
                                >
                                    <Phone className="w-5 h-5" />
                                    <span>Chamar no WhatsApp</span>
                                </button>
                                <button
                                    onClick={() => {
                                        window.dispatchEvent(new Event("open-contact-modal"));
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className="w-full flex justify-center items-center gap-2 px-5 py-4 rounded-xl bg-transparent border border-white/20 text-white font-medium hover:bg-white/5 transition-all duration-300"
                                >
                                    E-mail Comercial
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
