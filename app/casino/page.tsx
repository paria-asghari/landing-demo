import Image from "next/image";
import PopularGame from "@/components/popular-game";
import GameSection from "@/components/game-section";

const topCasinoGames = [
    { src: "https://images.unsplash.com/photo-1627831389670-d20f5a01c536?q=80&w=774&auto=format&fit=crop", name: "Royal Roulette", rate: 4.9, url: "royal-roulette" },
    { src: "https://plus.unsplash.com/premium_photo-1698525808858-d5ef5f190e45?q=80&w=1740&auto=format&fit=crop", name: "Gold Poker", rate: 4.7, url: "gold-poker" },
    { src: "https://images.unsplash.com/photo-1518133120397-258d5eb470c6?q=80&w=1548&auto=format&fit=crop", name: "Lucky Slots", rate: 4.8, url: "lucky-slots" },
    { src: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1746&auto=format&fit=crop", name: "Black Jack Pro", rate: 4.6, url: "black-jack-pro" },
];

const liveCasinoGames = [
    { src: "https://images.unsplash.com/photo-1726003906867-081fc895ce5d?q=80&w=1160&auto=format&fit=crop", name: "Live Blackjack", rate: 4.8, url: "live-blackjack" },
    { src: "https://images.unsplash.com/photo-1726004592905-dc5cd794bda6?q=80&w=1160&auto=format&fit=crop", name: "Live Roulette", rate: 4.7, url: "live-roulette" },
    { src: "https://images.unsplash.com/photo-1714865212807-3ae87635a38d?q=80&w=1740&auto=format&fit=crop", name: "Live Baccarat", rate: 4.9, url: "live-baccarat" },
    { src: "https://plus.unsplash.com/premium_photo-1694781503986-b306e10e1ffa?q=80&w=870&auto=format&fit=crop", name: "Live Poker", rate: 4.6, url: "live-poker" },
];

export default function CasinoPage() {
    return (
        <div className="min-h-screen bg-slate-900 text-white pt-20 pl-64">
            {/* Hero Section - Full Width */}
            <div className="flex h-87.5 mx-2 my-2 gap-2">
                {/* Image - 2/3 of page */}
                <div className="relative w-2/3 rounded-lg overflow-hidden">
                    <Image
                        src="https://images.unsplash.com/photo-1592398191627-25b41eeaa398?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Casino"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute left-0 inset-y-0 right-0 flex flex-col justify-start pt-12 px-12 bg-linear-to-r from-black/80 via-black/50 to-transparent">
                        <h2 className="text-2xl text-white mb-2">Welcome to</h2>
                        <h1 className="text-4xl font-bold text-white mb-4">ALL CASINO</h1>
                        <h4 className="text-xl text-white mb-2">🔥 Big wins, fast gameplay, and stunning graphics</h4>
                        <p className="text-xl text-white">💎 Daily rewards and exclusive bonuses</p>
                    </div>
                </div>

                {/* Jackpot Section - 1/3 of page */}
                <div className="w-1/3 bg-slate-800 flex flex-col items-center justify-center px-8 py-6 rounded-lg">
                    <h2 className="text-2xl text-white mb-2">jackpot total</h2>
                    <h3 className="text-4xl font-bold text-yellow-400 mb-4">2,486,732.50$</h3>
                    <div className="w-full h-px bg-blue-600 mb-6" />

                    <div className="w-full flex justify-between">
                        {/* Labels */}
                        <div className="flex flex-col gap-3 text-blue-400">
                            <span>Mega Jackpot</span>
                            <span>Major Jackpot</span>
                            <span>Minor Jackpot</span>
                            <span>Mini Jackpot</span>
                        </div>
                        {/* Values */}
                        <div className="flex flex-col gap-3 text-yellow-400 font-semibold text-right">
                            <span>1,234,567.20$</span>
                            <span>567,890.30$</span>
                            <span>345,678.90$</span>
                            <span>123,456.10$</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Top Casino Games Section */}
            <GameSection title="Top Casino Games" gridCols="cols4" hasDots category="topCasino">
                {topCasinoGames.map((game, index) => (
                    <PopularGame game={game} key={index} baseUrl="casino" />
                ))}
            </GameSection>

            {/* Live Casino Section */}
            <GameSection title="Live Casino" badge={{ name: "Live", color: "green-500" }} gridCols="cols4" hasDots category="liveCasino">
                {liveCasinoGames.map((game, index) => (
                    <PopularGame game={game} key={index} baseUrl="casino" />
                ))}
            </GameSection>
        </div>
    );
}