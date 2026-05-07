import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface Game {
    name: string;
    src: string;
    rate: string | number;
    url?: string;
    baseUrl?: "games" | "casino";
}

export default function PopularGame({ game, baseUrl = "games" }: { game: Game; baseUrl?: "games" | "casino" }) {
    const href = game && game?.url ? `/${baseUrl}/${game?.url}` : "#";
    return (
        <Link
            href={href}
            className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer"
        >
            <div className="relative h-64 group-hover:ring-2 group-hover:ring-blue-400 transition-all">
                <Image
                    src={game.src}
                    alt={game.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
            </div>
            <span className="bg-slate-800 text-blue-400 text-center py-2 font-semibold text-sm flex items-center justify-between px-4 z-10 relative">
                {game.name}
                <span className="flex items-center gap-1">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    {game.rate}
                </span>
            </span>
        </Link>
    )
}