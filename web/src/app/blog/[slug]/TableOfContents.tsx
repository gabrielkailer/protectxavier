"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Heading = {
  id: string;
  text: string;
  level: number;
};

export function TableOfContents({ content }: { content: string }) {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    // Função simples para extrair os H2 do texto (em markdown usando regex)
    const extractHeadings = () => {
      const headingLines = content.split('\n').filter(line => line.startsWith('## '));
      const parsedHeadings = headingLines.map(line => {
        const text = line.replace('## ', '').trim();
        // Cria um ID simplificado a partir do texto (lower case, hifens no lugar de espaço)
        const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
        return { id, text, level: 2 };
      });
      setHeadings(parsedHeadings);
    };

    extractHeadings();

    // Intersection Observer para marcar o subtítulo ativo durante o scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px" } // Gatilho dispara quando o elemento entra na parte superior da tela
    );

    // Na renderização do react-markdown, ele pode não injetar IDs automaticamente nas tags h2.
    // Pra um ambiente avançado, usaríamos rehype-slug, mas aqui faremos uma injeção manual rápida nas DOM elements
    const elements = document.querySelectorAll("article h2");
    elements.forEach((elem) => {
      // Configura o ID correspondente à nossa lógica de regex acima se não houver um
      if (!elem.id) {
         elem.id = elem.textContent?.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-') || "h2-generated";
      }
      observer.observe(elem);
    });

    return () => observer.disconnect();
  }, [content]);

  if (headings.length === 0) return null;

  return (
    <nav className="border-l-2 border-slate-200 pl-4 py-2">
      <ul className="flex flex-col gap-3">
        {headings.map((heading, index) => (
          <li key={index}>
            <a 
                href={`#${heading.id}`}
                className={`text-sm tracking-tight transition-all duration-300 block relative ${
                    activeId === heading.id 
                    ? "text-[var(--color-accent)] font-bold scale-105 origin-left" 
                    : "text-slate-500 hover:text-[#111322]"
                }`}
                onClick={(e) => {
                    e.preventDefault();
                    document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
              {activeId === heading.id && (
                  <motion.span 
                     layoutId="toc-indicator"
                     className="absolute -left-[18px] top-1.5 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
                  />
              )}
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
