import Image from "next/image";
import Link from "next/link";

interface Game {
    src: string;
    playing: string | number;
    url?: string;
}

export default function TrandingGame({ game, num }: { game: Game; num: number }) {
    return (
        <Link
            href={game?.url ? `/games/${game.url}` : "#"}
            className="relative rounded-xl overflow-hidden group cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all"
        >
            <Image
                src={game.src}
                alt={`Trending ${num}`}
                width={400}
                height={256}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent" />
            <span className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-white font-semibold text-sm">
                    {game.playing} playing
                </span>
            </span>
        </Link>
    )
}