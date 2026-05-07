interface GameSectionProps {
    title?: string;
    gridCols?: "cols2" | "cols3" | "cols4" | "cols5";
    hasViewAll?: boolean;
    hasDots?: boolean;
    children: React.ReactNode;
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
    hasViewAll = true,
    hasDots = false,
    children,
}: GameSectionProps) {
    return (
        <section className="mb-8 p-6">
            {title && <h2 className="text-blue-400 text-xl font-bold mb-4">{title}</h2>}
            <div className={`grid ${gridClasses[gridCols]} gap-4`}>
                {children}
            </div>
            {hasViewAll && (
                <div className="flex justify-end mt-4">
                    <button className="bg-blue-500 text-white hover:bg-blue-600 font-semibold rounded-full px-6 py-2">
                        View All
                    </button>
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