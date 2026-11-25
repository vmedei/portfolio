"use client";

import { createContext, useCallback, useContext, useEffect, useState, ReactNode } from "react";
import { Idioma, ui } from "@/i18n/ui";

interface LanguageContextType {
    idioma: Idioma;
    setIdioma: (idioma: Idioma) => void;
    alternarIdioma: () => void;
    t: (typeof ui)[Idioma];
}

const CHAVE_STORAGE = "idioma";

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [idioma, setIdiomaState] = useState<Idioma>("pt");

    // Recupera a escolha salva (o site é exportado estático, então começa sempre em português)
    useEffect(() => {
        try {
            const salvo = window.localStorage.getItem(CHAVE_STORAGE);
            if (salvo === "pt" || salvo === "en") setIdiomaState(salvo);
        } catch {
            // localStorage indisponível (modo privado, por exemplo): segue em português
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = idioma === "pt" ? "pt-BR" : "en";
    }, [idioma]);

    const setIdioma = useCallback((novo: Idioma) => {
        setIdiomaState(novo);
        try {
            window.localStorage.setItem(CHAVE_STORAGE, novo);
        } catch {
            // ignora: a troca vale só para esta visita
        }
    }, []);

    const alternarIdioma = useCallback(() => setIdioma(idioma === "pt" ? "en" : "pt"), [idioma, setIdioma]);

    return (
        <LanguageContext.Provider value={{ idioma, setIdioma, alternarIdioma, t: ui[idioma] }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage deve ser usado dentro de um LanguageProvider");
    }
    return context;
}
