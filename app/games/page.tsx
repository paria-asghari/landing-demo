"use client";

import PopularGame from "@/components/popular-game";
import TrandingGame from "@/components/tranding-game";
import ToprateGame from "@/components/toprate-game";
import GameSection from "@/components/game-section";

const popularGames = [
    { src: "https://images.unsplash.com/photo-1629760946220-5693ee4c46ac?q=80&w=1740&auto=format&fit=crop", name: "Speed Drift", rate: 4.8, url: "page1" },
    { src: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1740&auto=format&fit=crop", name: "Shadow Run", rate: 4.5, url: "page2" },
    { src: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1740&auto=format&fit=crop", name: "Dark Quest", rate: 4.7, url: "page3" },
    { src: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1740&auto=format&fit=crop", name: "Zombie Rush", rate: 4.6, url: "page4" },
    { src: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916&auto=format&fit=crop", name: "Pixel War", rate: 4.9, url: "page5" },
];

const newGames = [
    { src: "https://plus.unsplash.com/premium_photo-1663133591207-aa353f0d5a05?q=80&w=1740&auto=format&fit=crop", name: "Cyber Strike", rate: 4.3, url: "page6", description: "Step into a futuristic battlefield where advanced warfare meets cutting-edge technology. Command your squad through neon-lit cityscapes as you battle hostile forces in this action-packed shooter. Features immersive graphics, customizable weapons, and intense multiplayer combat." },
    { src: "https://plus.unsplash.com/premium_photo-1687982009791-cf43bb7023b2?q=80&w=2064&auto=format&fit=crop", name: "Dragon Quest", rate: 4.6, url: "page7", description: "Embark on an epic adventure through mythical lands filled with ancient dragons and legendary treasures. Build your party of heroes, master powerful abilities, and unravel the mystery of a lost kingdom. An open-world RPG experience with stunning visuals and hours of gameplay." },
    { src: "https://images.unsplash.com/photo-1626814026152-1c1817864260?q=80&w=1740&auto=format&fit=crop", name: "Space War", rate: 4.4, url: "page8", description: "Defend Earth from alien invaders in this intense space combat simulation. Pilot advanced spacecraft, upgrade your fleet, and engage in epic battles across the galaxy. Features realistic physics, strategic gameplay, and an engaging storyline that spans multiple star systems." },
    { src: "https://plus.unsplash.com/premium_photo-1727395504173-a7eefc2d5a5f?q=80&w=1742&auto=format&fit=crop", name: "Neon City", rate: 4.7, url: "page9", description: "Navigate the treacherous streets of a dystopian metropolis where corporations rule and street gangs battle for control. Experience high-speed chases, intense firefights, and a deep narrative that explores themes of freedom and betrayal in a neon-soaked future." },
    { src: "https://images.unsplash.com/photo-1665042023029-be49907daf7c?q=80&w=1680&auto=format&fit=crop", name: "Magic Forest", rate: 4.5, url: "page10", description: "Discover the secrets of an enchanted forest filled with mythical creatures and ancient magic. Solve challenging puzzles, brew powerful potions, and help the forest spirits restore balance to nature. A beautiful puzzle-adventure game with relaxing gameplay and a captivating story." },
];

const trendingGames = [
    { src: "https://images.unsplash.com/photo-1501684717840-318fdbc5f2a0?q=80&w=1548&auto=format&fit=crop", name: "Arena Clash", playing: "125k", url: "page11", description: "Join the ultimate multiplayer arena where champions from around the world compete for glory and rewards. Fast-paced combat, strategic gameplay, and regular updates keep the experience fresh and exciting." },
    { src: "https://images.unsplash.com/photo-1501684558198-9f7a023c46bb?q=80&w=1548&auto=format&fit=crop", name: "Night Riders", playing: "89k", url: "page12", description: "Race against the clock through procedurally generated tracks at midnight. Customize your vehicle, master drifting techniques, and climb the global leaderboards in this adrenaline-fueled racing experience." },
    { src: "https://images.unsplash.com/photo-1537060212308-fed629cd72df?q=80&w=1740&auto=format&fit=crop", name: "Battle Zone", playing: "156k", url: "page13", description: "Enter a futuristic battleground where tactical gameplay meets intense action. Coordinate with your team, deploy strategic abilities, and dominate the battlefield in this highly competitive online shooter." },
];

const topRatedGames = [
    { src: "https://images.unsplash.com/photo-1633287453177-24823499b02c?q=80&w=1160&auto=format&fit=crop", name: "Epic Battle", rate: 4.9, description: "Command massive armies in epic battles across historical landscapes. Master complex strategies, upgrade your forces, and conquer territories in this critically acclaimed strategy masterpiece." },
    { src: "https://images.unsplash.com/photo-1573123837000-83c5f45f56df?q=80&w=1160&auto=format&fit=crop", name: "Galaxy Quest", rate: 4.8, description: "Explore a vast galaxy filled with unknown planets, alien civilizations, and hidden treasures. Your choices shape the story in this award-winning space adventure with stunning visuals and deep gameplay." },
    { src: "https://images.unsplash.com/photo-1647531452166-3584eb58e6e5?q=80&w=1160&auto=format&fit=crop", name: "Speed Kings", rate: 4.7, description: "Feel the rush of high-speed racing as you compete against the world's best drivers. Precision controls, realistic physics, and hundreds of tracks make this the ultimate racing simulator." },
    { src: "https://images.unsplash.com/photo-1736752085964-3ece9fede726?q=80&w=1160&auto=format&fit=crop", name: "Shadow Strike", rate: 4.8, description: "Become the ultimate spy in this stealth-based action game. Infiltrate high-security facilities, eliminate targets, and uncover a global conspiracy in a thrilling story-driven experience." },
    { src: "https://plus.unsplash.com/premium_photo-1687892166031-828cc6574c15?q=80&w=1162&auto=format&fit=crop", name: "Dragon Rise", rate: 4.6, description: "Rise as a dragon and conquer the ancient realm. Unlock powerful abilities, evolve your form, and challenge other dragons for dominance in this epic fantasy action game." },
    { src: "https://images.unsplash.com/photo-1659556741621-feade1ff0961?q=80&w=1130&auto=format&fit=crop", name: "Ninja World", rate: 4.9, description: "Master the way of the ninja in a world of ancient mysteries and deadly enemies. Precision combat, stealth missions, and an unforgettable story await in this legendary action-adventure game." },
];

export default function GamesPage() {
    return (
        <main className="min-h-screen pt-20 pl-64 bg-slate-900">
            <GameSection title="Popular" gridCols="cols5" hasDots>
                {popularGames.map((game, index) => (
                    <PopularGame game={game} key={index} />
                ))}
            </GameSection>
            <GameSection title="New Games" gridCols="cols5" hasDots>
                {newGames.map((game, index) => (
                    <PopularGame game={game} key={index} />
                ))}
            </GameSection>
            <GameSection title="Trending Now" gridCols="cols3" hasDots>
                {trendingGames.map((game, index) => (
                    <TrandingGame game={game} num={index} key={index} />
                ))}
            </GameSection>
            <GameSection title="Top Rated" gridCols="cols2" hasDots>
                {topRatedGames.map((game, index) => (
                    <ToprateGame game={game} num={index} key={index} />
                ))}
            </GameSection>
        </main>
    );
}