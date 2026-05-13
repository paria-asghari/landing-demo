import Image from "next/image";
import Link from "next/link";
import { Star, ChevronRight, Trophy, BookmarkMinus, Scooter, VibrateOff } from "lucide-react";

interface GameDetailProps {
    title: string;
    image: string;
    reviews: string;
}

export function GameDetail({ title, image, reviews }: GameDetailProps) {
    const stats = [
        { icon: Trophy, label: "Max Win", value: "5000x" },
        { icon: BookmarkMinus, label: "Min Bet", value: "$0.10" },
        { icon: Scooter, label: "Volatility", value: "High" },
        { icon: VibrateOff, label: "RTP", value: "96.5%" },
    ];

    return (
        <div className="min-h-screen bg-slate-900 text-white pt-20 p-8">
            <div className="flex items-center gap-2 mb-8 px-4 text-sm">
                <Link href="/" className="text-blue-400 hover:text-white no-underline">Home page</Link>
                <ChevronRight size={14} className="text-blue-400" />
                <span className="text-blue-400">{title}</span>
            </div>

            <div className="px-4">
                <h1 className="text-4xl font-bold mb-6">{title}</h1>

                <div className="max-w-4xl mx-auto mt-8">
                    <div className="flex items-stretch justify-between gap-8">
                        <div className="w-1/2 h-80 bg-slate-700 rounded-xl overflow-hidden shrink-0">
                            <Image
                                src={image}
                                alt={title}
                                width={400}
                                height={320}
                                className="w-full h-full object-cover rounded-xl"
                            />
                        </div>

                        <div className="w-1/2 flex flex-col justify-between gap-6 pt-4">
                            <div className="w-full">
                                <div className="flex items-center gap-2 mb-4">
                                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                                    <span className="text-white font-semibold">4.8</span>
                                    <span className="text-gray-400 text-sm">{reviews}</span>
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed max-w-sm">
                                    Experience the ultimate gaming adventure with stunning graphics,
                                    immersive gameplay, and endless rewards. This game brings you
                                    non-stop action with exciting features and bonus rounds that keep
                                    you coming back for more.
                                </p>
                            </div>

                            <div className="flex gap-4 justify-center mt-4">
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                    Play Now
                                </button>
                                <button className="border border-slate-500 hover:border-slate-400 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                                    Demo Play
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-800 rounded-xl grid grid-cols-4 gap-4 mt-8 max-w-4xl mx-auto p-6 py-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex items-center justify-center gap-4">
                            <stat.icon size={32} className="text-yellow-400 shrink-0" />
                            <div className="flex flex-col text-center">
                                <span className="text-gray-400 text-sm">{stat.label}</span>
                                <span className="text-white font-bold text-xl">{stat.value}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
