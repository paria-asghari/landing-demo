import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { casinoGamesData, allCasinoGames } from "@/data/casino-games";
import { Star, ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return allCasinoGames.map((game) => ({
        slug: game.slug,
    }));
}

export default async function CasinoGamePage({ params }: PageProps) {
    const { slug } = await params;
    const game = casinoGamesData[slug];

    if (!game) {
        notFound();
    }

    const relatedGames = allCasinoGames.filter((g) => g.slug !== slug).slice(0, 4);

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-20 pl-64">
            <div className="p-6">
                {/* Back Button */}
                <Link href="/casino" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-6">
                    <ArrowLeft size={20} />
                    <span>Back to Casino</span>
                </Link>

                {/* Main Content */}
                <div className="flex gap-6 mb-8">
                    {/* Game Image */}
                    <div className="relative w-1/2 h-[450px] rounded-xl overflow-hidden">
                        <Image
                            src={game.src}
                            alt={game.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Game Info */}
                    <div className="w-1/2 bg-slate-800 rounded-xl p-8 flex flex-col justify-center">
                        <h1 className="text-4xl font-bold text-white mb-4">{game.name}</h1>

                        <div className="flex items-center gap-1 mb-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <Star key={i} size={24} className="text-yellow-400 fill-yellow-400" />
                            ))}
                            <span className="ml-2 text-white text-lg">{game.rate}</span>
                        </div>

                        <p className="text-slate-300 text-lg leading-relaxed mb-4">
                            {game.description}
                        </p>
                        <p className="text-slate-300 text-lg leading-relaxed">
                            High-definition streaming and interactive gameplay make this the ultimate live experience.
                        </p>
                    </div>
                </div>

                {/* Game Details */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-slate-700 rounded-lg p-4">
                        <span className="text-slate-400 text-sm">Provider</span>
                        <p className="text-white font-semibold">{game.provider}</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                        <span className="text-slate-400 text-sm">Category</span>
                        <p className="text-white font-semibold">{game.category}</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                        <span className="text-slate-400 text-sm">Min Bet</span>
                        <p className="text-white font-semibold">{game.minBet}</p>
                    </div>
                    <div className="bg-slate-700 rounded-lg p-4">
                        <span className="text-slate-400 text-sm">Max Bet</span>
                        <p className="text-white font-semibold">{game.maxBet}</p>
                    </div>
                </div>

                <div className="bg-slate-700 rounded-lg p-4 mb-6">
                    <span className="text-slate-400 text-sm">RTP (Return to Player)</span>
                    <p className="text-green-400 font-bold text-xl">{game.rtp}</p>
                </div>

                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-xl">
                    Play Now
                </button>

                {/* Related Games */}
                <section className="mt-12">
                    <h2 className="text-blue-400 text-xl font-bold mb-6">Related Games</h2>
                    <div className="grid grid-cols-4 gap-4">
                        {relatedGames.map((g) => (
                            <Link
                                href={`/casino/${g.slug}`}
                                key={g.slug}
                                className="relative flex flex-col rounded-xl overflow-hidden group cursor-pointer"
                            >
                                <div className="relative h-48 group-hover:ring-2 group-hover:ring-blue-400 transition-all">
                                    <Image
                                        src={g.src}
                                        alt={g.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                                    />
                                </div>
                                <span className="bg-slate-800 text-blue-400 text-center py-2 font-semibold text-sm flex items-center justify-between px-4 z-10 relative">
                                    {g.name}
                                    <span className="flex items-center gap-1">
                                        <Star size={14} className="text-amber-500 fill-amber-500" />
                                        {g.rate}
                                    </span>
                                </span>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}