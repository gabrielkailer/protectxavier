"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, ShieldCheck, Mail, Phone, User, MessageSquare } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const formSchema = z.object({
    name: z.string().min(2, "Nome é obrigatório"),
    phone: z.string().min(10, "Telefone inválido"),
    email: z.string().email("E-mail inválido"),
    need: z.string().min(5, "Como podemos ajudar?"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener("open-contact-modal", handleOpen);
        return () => window.removeEventListener("open-contact-modal", handleOpen);
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = async (data: FormData) => {
        setStatus("loading");
        try {
            // Fake API request delay for UAU effect
            await new Promise((resolve) => setTimeout(resolve, 1500));
            // TODO: Connect to Google Sheets and Resend API

            setStatus("success");
            setTimeout(() => {
                setIsOpen(false);
                setStatus("idle");
                reset();
            }, 3000);
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-[#0a0a0a]/80 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.3 }}
                        className="relative w-full max-w-lg bg-[#15182b] border border-[#2c3150] rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-white/5">
                            <div>
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <ShieldCheck className="text-[var(--color-accent)] w-5 h-5" />
                                    Solicite um Orçamento
                                </h3>
                                <p className="text-sm text-slate-400 mt-1">Nossa equipe entrará em contato em minutos.</p>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-400 hover:text-white transition-colors"
                                title="Fechar"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Form Content */}
                        <div className="p-6">
                            {status === "success" ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="flex flex-col items-center justify-center py-10 text-center"
                                >
                                    <div className="w-16 h-16 bg-[var(--color-accent)]/10 rounded-full flex items-center justify-center mb-4">
                                        <ShieldCheck className="w-8 h-8 text-[var(--color-accent)]" />
                                    </div>
                                    <h4 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h4>
                                    <p className="text-slate-400">
                                        Obrigado por escolher a Protect Xavier Facilite. Em instantes, nossos especialistas entrarão em contato.
                                    </p>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                            <User className="w-4 h-4 text-slate-500" /> Nome Completo
                                        </label>
                                        <input
                                            {...register("name")}
                                            className="w-full bg-[#0d0f1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                            placeholder="João da Silva"
                                        />
                                        {errors.name && <span className="text-xs text-red-400">{errors.name.message}</span>}
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-slate-500" /> WhatsApp
                                            </label>
                                            <input
                                                {...register("phone")}
                                                className="w-full bg-[#0d0f1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                                placeholder="(11) 90000-0000"
                                            />
                                            {errors.phone && <span className="text-xs text-red-400">{errors.phone.message}</span>}
                                        </div>

                                        <div className="space-y-1">
                                            <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                                <Mail className="w-4 h-4 text-slate-500" /> E-mail
                                            </label>
                                            <input
                                                {...register("email")}
                                                className="w-full bg-[#0d0f1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all"
                                                placeholder="contato@empresa.com"
                                            />
                                            {errors.email && <span className="text-xs text-red-400">{errors.email.message}</span>}
                                        </div>
                                    </div>

                                    <div className="space-y-1">
                                        <label className="text-sm font-medium text-slate-300 flex items-center gap-2">
                                            <MessageSquare className="w-4 h-4 text-slate-500" /> Necessidade
                                        </label>
                                        <textarea
                                            {...register("need")}
                                            rows={3}
                                            className="w-full bg-[#0d0f1c] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--color-accent)] focus:ring-1 focus:ring-[var(--color-accent)] transition-all resize-none"
                                            placeholder="Ex: Monitoramento para Condomínio, Portaria Virtual..."
                                        />
                                        {errors.need && <span className="text-xs text-red-400">{errors.need.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={status === "loading"}
                                        className="w-full relative flex items-center justify-center gap-2 bg-[var(--color-accent)] text-[#111322] font-bold text-lg py-4 rounded-lg mt-6 hover:bg-[var(--color-accent-hover)] transition-all disabled:opacity-70"
                                    >
                                        {status === "loading" ? (
                                            <span className="animate-pulse">Enviando Segurança...</span>
                                        ) : (
                                            <>
                                                Solicitar Orçamento Agora <Send className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
