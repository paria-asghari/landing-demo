"use client";

import Link from "next/link";

interface GameSectionProps {
    title?: string;
    gridCols?: "cols2" | "cols3" | "cols4" | "cols5";
    hasViewAll?: boolean;
    hasDots?: boolean;
    children: React.ReactNode;
    badge?: { name: string, color: string }
    viewUrl?: string;
    category?: string;
}

const gridClasses = {
    cols2: "grid-cols-2",
    cols3: "grid-cols-3",
    cols4: "grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
    cols5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
};

export default function GameSection({
    title,
    gridCols = "cols5",
    badge,
    hasViewAll = true,
    viewUrl,
    category,
    hasDots = false,
    children,
}: GameSectionProps) {
    const href = viewUrl || (category ? `/view-all/${category}` : "#");
    return (
        <section className="mb-8 p-6">

            <div className="flex items-center gap-2 mb-4">
                {title && <h2 className="text-blue-400 text-xl font-bold mb-4">{title}</h2>}
                {badge && badge.name && badge.color && <span className={`bg-${badge.color} text-white rounded-full px-2 py-0.5 text-xs`}>{badge.name}</span>}

            </div>
            <div className={`grid ${gridClasses[gridCols]} gap-4`}>
                {children}
            </div>
            {hasViewAll && (
                <div className="flex justify-end mt-4">
                    <Link href={href} className="bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-full px-6 py-2">
                        View All
                    </Link>
                </div>
            )}
            {hasDots && (
                <div className="flex justify-center gap-2 mt-4">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="w-2 h-2 rounded-full bg-slate-600" />
                    <span className="w-2 h-2 rounded-full bg-slate-600" />
                </div>
            )}
        </section>
    );
}