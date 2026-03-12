"use client";

import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

export function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });

    useEffect(() => {
        if (inView) {
            let startTimestamp: number;
            const step = (timestamp: number) => {
                if (!startTimestamp) startTimestamp = timestamp;
                const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);

                // easeOutQuart function para o número desacelerar bem suavemente no final
                const ease = 1 - Math.pow(1 - progress, 4);
                setCount(Math.floor(ease * value));

                if (progress < 1) {
                    window.requestAnimationFrame(step);
                }
            };
            window.requestAnimationFrame(step);
        }
    }, [inView, value, duration]);

    return <span ref={ref}>{count.toLocaleString("pt-BR")}</span>;
}
