"use client";

import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";

interface NotFoundProps {
    title?: string;
    message?: string;
    showBackButton?: boolean;
}

export default function NotFound({
    title = "Page Not Found",
    message,
    showBackButton = true
}: NotFoundProps) {
    const router = useRouter();

    return (
        <main className="min-h-screen pt-20 bg-slate-900 flex items-center justify-center">
            <div className="text-center">
                <h1 className="text-3xl font-bold text-white mb-4">{title}</h1>
                {message && <p className="text-slate-400 mb-4">{message}</p>}
                {showBackButton && (
                    <button
                        onClick={() => router.back()}
                        className="text-blue-400 inline-flex items-center gap-2 cursor-pointer bg-transparent border-none"
                    >
                        <ChevronLeft size={20} />
                        <span>Back</span>
                    </button>
                )}
            </div>
        </main>
    );
}