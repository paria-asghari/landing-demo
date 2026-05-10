import Link from "next/link";
import Image from "next/image";

interface Game {
    slug: string;
    name: string;
    src: string;
    rate: number;
    description: string;
    provider: string;
    category: string;
    minBet: string;
    maxBet: string;
    rtp: string;
}

const casinoGamesData: Record<string, Game> = {
    "royal-roulette": {
        slug: "royal-roulette",
        name: "Royal Roulette",
        src: "https://plus.unsplash.com/premium_photo-1694781584571-0cdfad3172af?q=80&w=870&auto=format&fit=crop",
        rate: 4.9,
        description: "Experience the thrill of the classic roulette game with stunning graphics and smooth gameplay.",
        provider: "Pragmatic Play",
        category: "Table Games",
        minBet: "$0.10",
        maxBet: "$5,000",
        rtp: "97.3%",
    },
    "gold-poker": {
        slug: "gold-poker",
        name: "Gold Poker",
        src: "https://images.unsplash.com/photo-1655159428688-2e27aed05b26?q=80&w=2064&auto=format&fit=crop",
        rate: 4.7,
        description: "Take on the dealer in this high-stakes poker game.",
        provider: "Evolution Gaming",
        category: "Card Games",
        minBet: "$1.00",
        maxBet: "$10,000",
        rtp: "98.5%",
    },
    "lucky-slots": {
        slug: "lucky-slots",
        name: "Lucky Slots",
        src: "https://images.unsplash.com/photo-1676345338852-29fb1026c12f?q=80&w=774&auto=format&fit=crop",
        rate: 4.8,
        description: "Spin the reels and chase the jackpot in this exciting slot game.",
        provider: "NetEnt",
        category: "Slots",
        minBet: "$0.05",
        maxBet: "$2,500",
        rtp: "96.8%",
    },
    "black-jack-pro": {
        slug: "black-jack-pro",
        name: "Black Jack Pro",
        src: "https://images.unsplash.com/photo-1550665268-bff203391cfe?q=80&w=774&auto=format&fit=crop",
        rate: 4.6,
        description: "Test your skills against the house in this professional blackjack game.",
        provider: "Play'n GO",
        category: "Table Games",
        minBet: "$0.50",
        maxBet: "$3,000",
        rtp: "99.2%",
    },
};

const allCasinoGames = Object.values(casinoGamesData);

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

export default function TopGamesPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white pt-20 pl-64 p-8">
            <Link href="/" className="text-blue-400 inline-flex items-center gap-2 no-underline mb-8 px-4">
                ← Back to Home
            </Link>

            <h1 className="text-4xl font-bold mb-8 px-4">Top Games</h1>

            <div className="grid grid-cols-2 gap-4 px-4">
                {allCasinoGames.map((game: Game, index: number) => (
                    <Link
                        href={`/topgames/${game.slug}?index=${index}`}
                        key={game.slug}
                        className="rounded-xl overflow-hidden relative cursor-pointer block h-64 w-full"
                    >
                        <Image
                            src={topGameImages[index]}
                            alt={game.name}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover hover:ring-2 hover:ring-blue-400 transition-all"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                        <h2 className="absolute bottom-4 left-4 right-4 text-lg font-bold text-center text-amber-500">
                            {topGameTitles[index]}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
}
