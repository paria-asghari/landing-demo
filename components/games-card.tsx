import Link from "next/link";
import Image from "next/image";
import { allCasinoGames } from "@/data/casino-games";

const topGames = allCasinoGames.slice(0, 4);
const topGameImages = [
    "https://images.unsplash.com/photo-1562809896-1b1514f40708?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692313159128-c6975f357d28?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614096601924-72086bc0aaed?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1562495561-ddda20116b1e?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const topGameTitles = [
    "Level up your mood",
    "Only the best survive.",
    "Play more. Win more",
    "Built for real gamers",
];

export default function GamesCard() {
    return (
        <div className="w-full">
            <div className="flex items-center mt-8">
                <div className="h-px flex-1 bg-blue-600" />
                <span className="px-4 text-sm font-semibold text-blue-600">Top Game</span>
                <div className="h-px flex-1 bg-blue-600" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 pb-8 mx-6">
                {topGames.map((game, index) => (
                    <Link
                        href={`/topgames/${game.slug}?index=${index}`}
                        key={game.slug}
                        className="h-50 rounded-xl overflow-hidden relative cursor-pointer block"
                    >
                        <Image
                            src={topGameImages[index]}
                            alt={game.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 25vw"
                            className="object-cover hover:ring-2 hover:ring-blue-400 transition-all"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                        <h2 className="absolute bottom-4 left-4 right-4 text-sm font-bold text-center text-amber-500">
                            {topGameTitles[index]}
                        </h2>
                    </Link>
                ))}
            </div>
            <div className="flex justify-end pb-8 mr-6">
                <Link
                    href="/topgames"
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition-colors text-sm"
                >
                    View More
                </Link>
            </div>
        </div>
    );
}