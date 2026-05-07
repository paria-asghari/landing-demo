import { Star, ChevronLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const gamesData: Record<string, {
    src: string;
    name: string;
    rate: number;
    description: string;
    longDescription: string;
    screenshots: string[];
}> = {
    "page1": {
        src: "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?q=80&w=1740&auto=format&fit=crop",
        name: "Speed Drift",
        rate: 4.8,
        description: "An exhilarating racing game where you drift through neon-lit tracks.",
        longDescription: "Mensch (also known as Ludo in many countries) is a classic board game played by 2 to 4 players. Each player has four pieces that start in a base area, and the goal is to move all of them around the board and into the home zone before the others. Movement is determined by rolling a die, and players can capture opponents' pieces by landing on the same spot, sending them back to the start. The game is simple, fun, and based on both luck and strategy, making it popular among families and friends.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page2": {
        src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1740&auto=format&fit=crop",
        name: "Shadow Run",
        rate: 4.5,
        description: "Sneak through shadows and defeat enemies in this stealth action game.",
        longDescription: "Mensch (Ludo) as a console game is a fun and interactive experience played using a game controller. Players use the controller to roll the dice, move their pieces, and compete against friends or AI opponents on screen. The goal is still to get all pieces to the home area first, but the digital version often includes animations, sound effects, and multiplayer modes. It's easy to play, entertaining, and great for group gaming sessions.",
        screenshots: [
            "https://plus.unsplash.com/premium_vector-1721975001766-da33475d3025?q=80&w=1160&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_vector-1721296174930-6e419b174cae?q=80&w=1160&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_vector-1712873281954-f74d348de753?q=80&w=1160&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1742&auto=format&fit=crop",
        ]
    },
    "page3": {
        src: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1740&auto=format&fit=crop",
        name: "Dark Quest",
        rate: 4.7,
        description: "Embark on a dark adventure through mysterious lands.",
        longDescription: "Snakes and Ladders is a simple and fun digital game that can be played using a game controller. Players roll a virtual die and move their character across the board, trying to reach the final square first. Landing on a ladder helps you climb up faster, while landing on a snake brings you down. The console version often includes colorful graphics, sound effects, and multiplayer options, making it enjoyable to play with friends or family.",
        screenshots: [
            "https://images.unsplash.com/photo-1682163372075-40d26b02f8c9?q=80&w=774&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1653012429490-6050b444f138?q=80&w=1546&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1560291543-ed9726c81c08?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1769305550526-a095102de59f?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page4": {
        src: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1740&auto=format&fit=crop",
        name: "Zombie Rush",
        rate: 4.6,
        description: "Survive the zombie apocalypse in this intense action game.",
        longDescription: "Chess is a classic strategy game that can also be played on a console using a game controller. Players take turns moving their pieces on the board, aiming to checkmate the opponent's king. The digital version often includes different difficulty levels, tutorials, and online multiplayer options. It helps improve thinking skills, concentration, and strategic planning while providing an engaging and competitive experience.",
        screenshots: [
            "https://images.unsplash.com/photo-1642284474435-aba7be889406?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563941406054-949225931d52?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1763875067516-e947790c74ac?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1763875018525-1d39fe1a4354?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page5": {
        src: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916&auto=format&fit=crop",
        name: "Pixel War",
        rate: 4.9,
        description: "Retro-style pixel art shooter with intense battles.",
        longDescription: "Chess is a classic strategy game that can also be played on a console using a game controller. Players take turns moving their pieces on the board, aiming to checkmate the opponent's king. The digital version often includes different difficulty levels, tutorials, and online multiplayer options. It helps improve thinking skills, concentration, and strategic planning while providing an engaging and competitive experience.",
        screenshots: [
            "https://plus.unsplash.com/premium_photo-1670183859029-99a0a2c1912b?q=80&w=1742&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1672855191351-e26398f27e5f?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page6": {
        src: "https://plus.unsplash.com/premium_photo-1663133591207-aa353f0d5a05?q=80&w=1740&auto=format&fit=crop",
        name: "Cyber Strike",
        rate: 4.3,
        description: "Futuristic battlefield shooter with advanced warfare.",
        longDescription: "Step into a futuristic battlefield where advanced warfare meets cutting-edge technology. Command your squad through neon-lit cityscapes as you battle hostile forces in this action-packed shooter. Features immersive graphics, customizable weapons, and intense multiplayer combat.",
        screenshots: [
            "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=1156&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1728571195318-f35263636baa?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1682123725103-75b18625c59d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1711043989089-bda10ceeaed2?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page7": {
        src: "https://plus.unsplash.com/premium_photo-1687982009791-cf43bb7023b2?q=80&w=2064&auto=format&fit=crop",
        name: "Dragon Quest",
        rate: 4.6,
        description: "Epic adventure through mythical lands with dragons.",
        longDescription: "Embark on an epic adventure through mythical lands filled with ancient dragons and legendary treasures. Build your party of heroes, master powerful abilities, and unravel the mystery of a lost kingdom. An open-world RPG experience with stunning visuals and hours of gameplay.",
        screenshots: [
            "https://images.unsplash.com/photo-1659480140212-090e6e576080?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1700085664099-f72e833d14b1?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1700085663917-73fa5feea8a4?q=80&w=774&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1565065951812-a2caf9730a28?q=80&w=654&auto=format&fit=crop",
        ]
    },
    "page8": {
        src: "https://images.unsplash.com/photo-1626814026152-1c1817864260?q=80&w=1740&auto=format&fit=crop",
        name: "Space War",
        rate: 4.4,
        description: "Defend Earth from alien invaders in space combat.",
        longDescription: "Defend Earth from alien invaders in this intense space combat simulation. Pilot advanced spacecraft, upgrade your fleet, and engage in epic battles across the galaxy. Features realistic physics, strategic gameplay, and an engaging storyline that spans multiple star systems.",
        screenshots: [
            "https://images.unsplash.com/photo-1719494206741-79831f9f4d51?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594913495702-0872744c6968?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593024579758-6221e85efbe6?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1682088499057-0b0263936f67?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page9": {
        src: "https://plus.unsplash.com/premium_photo-1727395504173-a7eefc2d5a5f?q=80&w=1742&auto=format&fit=crop",
        name: "Neon City",
        rate: 4.7,
        description: "Dystopian metropolis with high-speed chases and firefights.",
        longDescription: "Navigate the treacherous streets of a dystopian metropolis where corporations rule and street gangs battle for control. Experience high-speed chases, intense firefights, and a deep narrative that explores themes of freedom and betrayal in a neon-soaked future.",
        screenshots: [
            "https://plus.unsplash.com/premium_photo-1719360604040-f1b162124df1?q=80&w=1624&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1719360604064-b5daefd62d7e?q=80&w=1624&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1719360604040-f1b162124df1?q=80&w=1624&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1719360604085-06a1735d75c1?q=80&w=968&auto=format&fit=crop",
        ]
    },
    "page10": {
        src: "https://images.unsplash.com/photo-1665042023029-be49907daf7c?q=80&w=1680&auto=format&fit=crop",
        name: "Magic Forest",
        rate: 4.5,
        description: "Enchanted forest with mythical creatures and magic.",
        longDescription: "Discover the secrets of an enchanted forest filled with mythical creatures and ancient magic. Solve challenging puzzles, brew powerful potions, and help the forest spirits restore balance to nature. A beautiful puzzle-adventure game with relaxing gameplay and a captivating story.",
        screenshots: [
            "https://images.unsplash.com/photo-1615680022647-99c397cbcaea?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585427448073-f7c6fdec14e2?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1616196395385-2587a28072eb?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1662950698491-54faeebc2bd7?q=80&w=3131&auto=format&fit=crop",
        ]
    },
    "page11": {
        src: "https://images.unsplash.com/photo-1501684717840-318fdbc5f2a0?q=80&w=1548&auto=format&fit=crop",
        name: "Arena Clash",
        rate: 4.7,
        description: "Ultimate multiplayer arena combat.",
        longDescription: "Join the ultimate multiplayer arena where champions from around the world compete for glory and rewards. Fast-paced combat, strategic gameplay, and regular updates keep the experience fresh and exciting.",
        screenshots: [
            "https://images.unsplash.com/photo-1502136969935-8d8eef54d77b?q=80&w=1738&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1656647657563-ae3274b59492?q=80&w=774&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1505731110654-99d7f7f8e39c?q=80&w=1548&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1695802467626-e7e781c8a6bb?q=80&w=1548&auto=format&fit=crop",
        ]
    },
    "page12": {
        src: "https://images.unsplash.com/photo-1501684558198-9f7a023c46bb?q=80&w=1548&auto=format&fit=crop",
        name: "Night Riders",
        rate: 4.5,
        description: "High-speed midnight racing adventure.",
        longDescription: "Race against the clock through procedurally generated tracks at midnight. Customize your vehicle, master drifting techniques, and climb the global leaderboards in this adrenaline-fueled racing experience.",
        screenshots: [
            "https://images.unsplash.com/photo-1597466599360-3b9775841aec?q=80&w=928&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1579963405196-8f694d063749?q=80&w=774&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1516051662687-567d7c4e8f6a?q=80&w=1550&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1586836476603-ce713984045e?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page13": {
        src: "https://images.unsplash.com/photo-1537060212308-fed629cd72df?q=80&w=1740&auto=format&fit=crop",
        name: "Battle Zone",
        rate: 4.8,
        description: "Futuristic tactical shooter.",
        longDescription: "Enter a futuristic battleground where tactical gameplay meets intense action. Coordinate with your team, deploy strategic abilities, and dominate the battlefield in this highly competitive online shooter.",
        screenshots: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1740&auto=format&fit=crop",
        ]
    },
};

export default async function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const game = gamesData[slug];

    if (!game) {
        return (
            <main className="min-h-screen pt-20 pl-64 bg-primary flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Game Not Found</h1>
                    <Link href="/games" className="text-blue-400 inline-flex items-center gap-2 no-underline">
                        <ChevronLeft size={20} />
                        <span>Back to Games</span>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-20 pl-64 bg-primary p-8">
            <Link href="/games" className="text-blue-400 inline-flex items-center gap-2 no-underline mb-8">
                <ChevronLeft size={20} />
                <span>Back to Games</span>
            </Link>
            <div className="max-w-4xl mx-auto">
                <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                    <Image
                        src={game.src}
                        alt={game.name}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="grid grid-cols-4 gap-2 mb-4">
                    {game.screenshots.map((img, index) => (
                        <div key={index} className="relative h-24 rounded-lg overflow-hidden">
                            <Image
                                src={img}
                                alt={`${game.name} screenshot ${index + 1}`}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                <div className="bg-slate-800 rounded-xl p-8 mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold text-blue-400">{game.name}</h1>
                        <span className="flex items-center gap-2 text-xl">
                            <Star size={20} className="text-amber-500 fill-amber-500" />
                            <span className="text-white font-semibold">{game.rate}</span>
                        </span>
                    </div>
                    <p className="text-slate-300 text-lg">{game.description}</p>
                </div>
                <div className="bg-slate-800 rounded-xl p-8">
                    <h2 className="text-xl font-bold text-blue-400 mb-4">About This Game</h2>
                    <p className="text-slate-300 text-base leading-relaxed">{game.longDescription}</p>
                </div>
            </div>
        </main>
    );
}