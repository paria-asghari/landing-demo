export default function TableWinner() {
    const winners = [
        { gameImg: "https://plus.unsplash.com/premium_photo-1731887298566-d98788906f40?q=80&w=1552&auto=format&fit=crop", gameName: "mystic forest", playerImg: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop", playerName: "jerome bell", time: "02:30", bet: "$250" },
        { gameImg: "https://plus.unsplash.com/premium_photo-1731887298566-d98788906f40?q=80&w=1552&auto=format&fit=crop", gameName: "jungle japes", playerImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop", playerName: "tom henry", time: "02:30", bet: "$250" },
        { gameImg: "https://plus.unsplash.com/premium_photo-1731887298566-d98788906f40?q=80&w=1552&auto=format&fit=crop", gameName: "predatory cities", playerImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop", playerName: "ralph edwards", time: "02:30", bet: "$250" },
    ]

    const headers = ["Game", "Player", "Time", "Bet"]

    return (
        <>
            <div className="flex items-center mt-8 pb-8">
                <div className="flex-1 h-px bg-blue-600" />
                <span className="px-4 text-sm font-semibold text-blue-600">Live Winners</span>
                <div className="flex-1 h-px bg-blue-600" />
            </div>
            <div className="pb-8">
                <table className="w-full text-white">
                    <thead>
                        <tr className="border-b border-slate-600">
                            {headers.map((header, index) => (
                                <th key={index} className="py-3 text-left text-sm font-semibold text-blue-600">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {winners.map((winner, index) => (
                            <tr key={index} className="border-b border-slate-700">
                                <td className="py-4 align-middle">
                                    <div className="flex items-center gap-3">
                                        <img src={winner.gameImg} alt="" className="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer" />
                                        <span className="text-blue-400">{winner.gameName}</span>
                                    </div>
                                </td>
                                <td className="py-4 align-middle">
                                    <div className="flex items-center gap-3">
                                        <img src={winner.playerImg} alt="" className="w-8 h-8 rounded-full object-cover hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer" />
                                        <span className="text-blue-400">{winner.playerName}</span>
                                    </div>
                                </td>
                                <td className="py-4 align-middle text-sm text-blue-400">{winner.time}</td>
                                <td className="py-4 align-middle text-sm text-blue-400">{winner.bet}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}