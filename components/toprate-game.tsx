import { Star } from "lucide-react";
import Image from "next/image";

export default function ToprateGame({ game, num }) {
    return (
        <a


            href="#"
            className="relative flex items-center bg-slate-800 rounded-xl overflow-hidden group cursor-pointer hover:ring-2 hover:ring-blue-400 transition-all px-4 py-3"
        >
            <span className="w-8 h-8 flex items-center justify-center text-blue-400 text-xl font-bold mr-4 shrink-0">
                {num + 1}
            </span>
            <div className="relative w-20 h-20 shrink-0 rounded-lg overflow-hidden">
                <Image
                    src={game.src}
                    alt={game.name}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="flex-1 px-4">
                <span className="text-blue-400 font-semibold">{game.name}</span>
            </div>
            <span className="flex items-center gap-1 text-white font-semibold">
                <Star size={14} className="text-yellow-500 fill-yellow-500" />
                {game.rate}
            </span>
        </a>
    )
}