import { Award, Briefcase, CalendarDays, MapPin } from "lucide-react";
import { ExperienciaMeta, formatarPeriodo } from "@/data/experiencias";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ExperienciaCabecalho({ meta }: { meta: ExperienciaMeta }) {
    const { idioma } = useLanguage();
    const periodo = formatarPeriodo(meta, idioma);

    return (
        <div className="flex flex-col gap-2 mb-4">
            <span className="text-lg md:text-xl font-bold">{meta.organizacao}</span>
            <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-base-content/70">
                <span className="flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" aria-hidden />
                    {meta.cargo}
                </span>
                {periodo && (
                    <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-4 h-4" aria-hidden />
                        {periodo}
                    </span>
                )}
                {meta.local && (
                    <span className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" aria-hidden />
                        {meta.local}
                    </span>
                )}
            </div>
            {meta.destaque && (
                <span className="flex items-center gap-1.5 text-sm font-semibold text-base-content">
                    <Award className="w-4 h-4" aria-hidden />
                    {meta.destaque}
                </span>
            )}
        </div>
    );
}
