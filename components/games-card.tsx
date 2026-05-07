export default function GamesCard() {
    const games = [
        { img: "https://images.unsplash.com/photo-1648793867022-a3046afe2e6f?q=80&w=2064&auto=format&fit=crop", alt: "Game 1", title: "Level up your mood" },
        { img: "https://plus.unsplash.com/premium_photo-1719508640641-6ce96cf573c1?q=80&w=1740&auto=format&fit=crop", alt: "Game 2", title: "Only the best survive." },
        { img: "https://images.unsplash.com/photo-1732132966168-34cf0a39b840?q=80&w=1740&auto=format&fit=crop", alt: "Game 3", title: "Play more. Win more" },
        { img: "https://images.unsplash.com/photo-1663255107091-d450616908b3?q=80&w=1548&auto=format&fit=crop", alt: "Game 4", title: "Built for real gamers" },
    ]

    return (
        <>
            <div className="flex items-center mx-6 mt-8">
                <div className="flex-1 h-px bg-blue-600" />
                <span className="px-4 text-sm font-semibold text-blue-600">Top Game</span>
                <div className="flex-1 h-px bg-blue-600" />
            </div>
            <div className="grid grid-cols-4 gap-4 mx-6 mt-6 pb-8">
                {games.map((game) => (
                    <div key={game.title} className="h-50 rounded-xl overflow-hidden relative">
                        <img src={game.img} alt={game.alt} className="w-full h-full object-cover hover:ring-2 hover:ring-blue-400 transition-all cursor-pointer" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/30 to-transparent" />
                        <h2 className="absolute bottom-4 left-4 right-4 text-sm font-bold text-center text-amber-500">{game.title}</h2>
                    </div>
                ))}
            </div>
        </>
    )
}