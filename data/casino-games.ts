export interface CasinoGame {
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

export const casinoGamesData: Record<string, CasinoGame> = {
    "royal-roulette": {
        slug: "royal-roulette",
        name: "Royal Roulette",
        src: "https://plus.unsplash.com/premium_photo-1694781584571-0cdfad3172af?q=80&w=870&auto=format&fit=crop",
        rate: 4.9,
        description: "Experience the thrill of the classic roulette game with stunning graphics and smooth gameplay. Place your bets and watch the wheel spin in this premium casino experience.",
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
        description: "Take on the dealer in this high-stakes poker game. Bluff, raise, and win big in one of the most popular card games in the casino world.",
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
        description: "Spin the reels and chase the jackpot in this exciting slot game. With multiple paylines and bonus features, every spin could be a winner.",
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
        description: "Test your skills against the house in this professional blackjack game. Get as close to 21 without going over and win big.",
        provider: "Play'n GO",
        category: "Table Games",
        minBet: "$0.50",
        maxBet: "$3,000",
        rtp: "99.2%",
    },
    "live-blackjack": {
        slug: "live-blackjack",
        name: "Live Blackjack",
        src: "https://images.unsplash.com/photo-1650149044622-472659e87813?q=80&w=1680&auto=format&fit=crop",
        rate: 4.8,
        description: "Play real-time blackjack with live dealers. Experience the authentic casino atmosphere from the comfort of your home.",
        provider: "Evolution Gaming",
        category: "Live Casino",
        minBet: "$5.00",
        maxBet: "$15,000",
        rtp: "99.4%",
    },
    "live-roulette": {
        slug: "live-roulette",
        name: "Live Roulette",
        src: "https://images.unsplash.com/photo-1714865212704-34190694a6d5?q=80&w=774&auto=format&fit=crop",
        rate: 4.7,
        description: "Watch the real wheel spin in real-time. Our professional dealers host the most exciting roulette games online.",
        provider: "Pragmatic Play",
        category: "Live Casino",
        minBet: "$1.00",
        maxBet: "$10,000",
        rtp: "97.3%",
    },
    "live-baccarat": {
        slug: "live-baccarat",
        name: "Live Baccarat",
        src: "https://images.unsplash.com/photo-1607863680198-23d4b2565df0?q=80&w=1740&auto=format&fit=crop",
        rate: 4.9,
        description: "The classic card game with live dealers. Simple rules, big wins, and an elegant gaming experience.",
        provider: "Microgaming",
        category: "Live Casino",
        minBet: "$5.00",
        maxBet: "$20,000",
        rtp: "98.9%",
    },
    "live-poker": {
        slug: "live-poker",
        name: "Live Poker",
        src: "https://images.unsplash.com/photo-1713571644897-4fc1b905df8a?q=80&w=774&auto=format&fit=crop",
        rate: 4.6,
        description: "Join live poker tables with players from around the world. Multiple variants and buy-ins available.",
        provider: "BetGames",
        category: "Live Casino",
        minBet: "$2.00",
        maxBet: "$8,000",
        rtp: "97.8%",
    },
};

export const allCasinoGames = Object.values(casinoGamesData);