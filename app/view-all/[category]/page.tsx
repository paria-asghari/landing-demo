"use client";

import PopularGame from "@/components/popular-game";
import { gamesData, categoryTitles } from "@/data/games";
import { useParams, useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

type GameCategory = keyof typeof gamesData;

export default function ViewAllPage() {
    const params = useParams();
    const router = useRouter();
    const category = params.category as GameCategory;
    const games = gamesData[category] || [];
    const title = categoryTitles[category] || "All Games";

    return (
        <main className="min-h-screen pt-20 bg-slate-900">
            <button onClick={() => router.back()} className="text-blue-400 inline-flex items-center gap-2 ml-6 mt-6 cursor-pointer bg-transparent border-none">
                <ChevronLeft size={20} />
                <span>Back</span>
            </button>
            <h1 className="text-blue-400 text-2xl font-bold p-6">{title}</h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-6">
                {games.map((game, index) => (
                    <PopularGame game={game} key={index} />
                ))}
            </div>
        </main>
    );
}