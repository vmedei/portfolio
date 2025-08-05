"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface MobileContextType {
    isMobile: boolean;
}

const MobileContext = createContext<MobileContextType | undefined>(undefined);

export function MobileProvider({ children }: { children: ReactNode }) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            if (typeof window !== 'undefined') {
                setIsMobile(window.innerWidth < 768); // 768px é o breakpoint md do Tailwind
            }
        };

        checkIsMobile();
        if (typeof window !== 'undefined') {
            window.addEventListener('resize', checkIsMobile);
            return () => window.removeEventListener('resize', checkIsMobile);
        }
    }, []);

    return (
        <MobileContext.Provider value={{ isMobile }}>
            {children}
        </MobileContext.Provider>
    );
}

export function useMobile() {
    const context = useContext(MobileContext);
    if (context === undefined) {
        throw new Error('useMobile deve ser usado dentro de um MobileProvider');
    }
    return context;
} 