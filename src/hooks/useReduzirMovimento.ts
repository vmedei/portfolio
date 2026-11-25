"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/*
 * true quando a pessoa pediu menos movimento no sistema.
 * Só vale depois de montar: o HTML estático é gerado sem saber a preferência,
 * e mudar o primeiro render quebraria a hidratação.
 */
export function useReduzirMovimento() {
    const preferencia = useReducedMotion();
    const [montado, setMontado] = useState(false);

    useEffect(() => setMontado(true), []);

    return montado && Boolean(preferencia);
}
