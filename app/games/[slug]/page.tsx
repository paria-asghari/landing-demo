"use client";

import { Star, ChevronLeft } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { use } from "react";

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
        longDescription: "Mensch (also known as Ludo in many countries) is a classic board game played by 2 to 4 players. Each player has four pieces that start in a base area, and the goal is to move all of them around the board and into the home zone before the others.",
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
        longDescription: "Mensch (Ludo) as a console game is a fun and interactive experience played using a game controller. Players use the controller to roll the dice, move their pieces, and compete against friends or AI opponents on screen.",
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
        longDescription: "Snakes and Ladders is a simple and fun digital game that can be played using a game controller. Players roll a virtual die and move their character across the board, trying to reach the final square first.",
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
        longDescription: "Chess is a classic strategy game that can also be played on a console using a game controller. Players take turns moving their pieces on the board, aiming to checkmate the opponent's king.",
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
        longDescription: "Chess is a classic strategy game that can also be played on a console using a game controller. Players take turns moving their pieces on the board, aiming to checkmate the opponent's king.",
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
        longDescription: "Step into a futuristic battlefield where advanced warfare meets cutting-edge technology. Command your squad through neon-lit cityscapes as you battle hostile forces in this action-packed shooter.",
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
        longDescription: "Embark on an epic adventure through mythical lands filled with ancient dragons and legendary treasures. Build your party of heroes, master powerful abilities, and unravel the mystery of a lost kingdom.",
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
        longDescription: "Defend Earth from alien invaders in this intense space combat simulation. Pilot advanced spacecraft, upgrade your fleet, and engage in epic battles across the galaxy.",
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
        longDescription: "Navigate the treacherous streets of a dystopian metropolis where corporations rule and street gangs battle for control. Experience high-speed chases, intense firefights, and a deep narrative.",
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
        longDescription: "Discover the secrets of an enchanted forest filled with mythical creatures and ancient magic. Solve challenging puzzles, brew powerful potions, and help the forest spirits restore balance to nature.",
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
        longDescription: "Race against the clock through procedurally generated tracks at midnight. Customize your vehicle, master drifting techniques, and climb the global leaderboards.",
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
        longDescription: "Enter a futuristic battleground where tactical gameplay meets intense action. Coordinate with your team, deploy strategic abilities, and dominate the battlefield.",
        screenshots: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page14": {
        src: "https://images.unsplash.com/photo-1654648662327-5d4d32cf67bd?q=80&w=1160&auto=format&fit=crop",
        name: "Speed Kings",
        rate: 4.9,
        description: "Feel the rush of high-speed racing.",
        longDescription: "Feel the rush of high-speed racing as you compete against the world's best drivers. Precision controls, realistic physics, and hundreds of tracks make this the ultimate racing simulator.",
        screenshots: [
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1740&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?q=80&w=1740&auto=format&fit=crop",
        ]
    },
    "page15": {
        src: "https://images.unsplash.com/photo-1736752223325-bf87c8bc4033?q=80&w=1160&auto=format&fit=crop",
        name: "Magic Quest",
        rate: 4.6,
        description: "Epic magical adventure awaits.",
        longDescription: "Embark on a magical journey through enchanted lands. Master powerful spells, defeat mythical creatures, and save the kingdom from ancient evil.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page16": {
        src: "https://images.unsplash.com/photo-1539191123335-3ebecae7a6ad?q=80&w=1160&auto=format&fit=crop",
        name: "Dragon Fire",
        rate: 4.6,
        description: "Command dragons in epic battles.",
        longDescription: "Train and command dragons in epic battles across mystical realms. Upgrade your dragons, learn powerful abilities, and become the ultimate dragon master.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page17": {
        src: "https://plus.unsplash.com/premium_photo-1726876911286-b4c493ce41c9?q=80&w=1196&auto=format&fit=crop",
        name: "Ninja Strike",
        rate: 4.8,
        description: "Become the ultimate ninja warrior.",
        longDescription: "Master the way of the ninja in this action-packed stealth game. Infiltrate enemy bases, eliminate targets, and uncover a global conspiracy.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page18": {
        src: "https://images.unsplash.com/photo-1716817276116-7c11b842f8ba?q=80&w=1160&auto=format&fit=crop",
        name: "Space War",
        rate: 4.4,
        description: "Epic space battles await.",
        longDescription: "Command your fleet in massive space battles across the galaxy. Upgrade your spacecraft, recruit pilots, and dominate the interstellar battlefield.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page19": {
        src: "https://plus.unsplash.com/premium_photo-1677668588685-eb14e6f43d3f?q=80&w=1160&auto=format&fit=crop",
        name: "Cyber Punk",
        rate: 4.7,
        description: "Enter the neon-lit cyberpunk world.",
        longDescription: "Navigate the dangerous streets of a futuristic metropolis. Hack corporate systems, fight street gangs, and uncover corporate conspiracies.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page20": {
        src: "https://images.unsplash.com/photo-1678563144712-5d468198133b?q=80&w=1160&auto=format&fit=crop",
        name: "Battle Arena",
        rate: 4.5,
        description: "Fight in the ultimate battle arena.",
        longDescription: "Compete against players worldwide in intense arena battles. Unlock new characters, upgrade weapons, and climb the global leaderboards.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page21": {
        src: "https://images.unsplash.com/photo-1773791406051-cb8216f58ecd?q=80&w=1160&auto=format&fit=crop",
        name: "Ocean Depths",
        rate: 4.6,
        description: "Explore the mysterious ocean depths.",
        longDescription: "Dive into the unknown depths of the ocean. Discover ancient ruins, encounter exotic sea creatures, and uncover the secrets of a lost civilization.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page22": {
        src: "https://images.unsplash.com/photo-1768501391108-ba094c8a6894?q=80&w=1160&auto=format&fit=crop",
        name: "Arctic Adventure",
        rate: 4.4,
        description: "Survive the frozen arctic wilderness.",
        longDescription: "Navigate the treacherous frozen wilderness. Build shelters, hunt for food, and battle against the elements to survive.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page23": {
        src: "https://plus.unsplash.com/premium_photo-1676901712447-4395959ac6cf?q=80&w=1160&auto=format&fit=crop",
        name: "Desert Storm",
        rate: 4.8,
        description: "Conquer the endless desert.",
        longDescription: "Lead your caravan across the endless desert. Trade goods, fight bandits, and build your empire in the harshest environment on earth.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page24": {
        src: "https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?q=80&w=1160&auto=format&fit=crop",
        name: "Mountain Quest",
        rate: 4.3,
        description: "Scale the tallest mountains.",
        longDescription: "Challenge yourself to climb the world's highest peaks. Master climbing techniques, weather the elements, and reach the summit.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page25": {
        src: "https://images.unsplash.com/photo-1636583134257-b8a45fe61a83?q=80&w=1160&auto=format&fit=crop",
        name: "Forest Runner",
        rate: 4.7,
        description: "Run through enchanted forests.",
        longDescription: "Race through mystical forests filled with magic and danger. Collect power-ups, avoid obstacles, and discover hidden shortcuts.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page26": {
        src: "https://images.unsplash.com/photo-1689533836289-3f07b4b97429?q=80&w=1160&auto=format&fit=crop",
        name: "Sky Battles",
        rate: 4.5,
        description: "Epic aerial dogfights.",
        longDescription: "Engage in intense aerial combat above the clouds. Master flight controls, upgrade your aircraft, and become the ultimate ace pilot.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page27": {
        src: "https://plus.unsplash.com/premium_photo-1689245691271-8053516024b4?q=80&w=1160&auto=format&fit=crop",
        name: "City Builder",
        rate: 4.6,
        description: "Build your dream city.",
        longDescription: "Design and build the city of your dreams. Manage resources, plan infrastructure, and create a thriving metropolis.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page28": {
        src: "https://images.unsplash.com/photo-1759701546737-83a5c7d0f23e?q=80&w=1160&auto=format&fit=crop",
        name: "Pirate Cove",
        rate: 4.9,
        description: "Set sail as a legendary pirate.",
        longDescription: "Chart your course across the seven seas. Plunder merchant ships, discover hidden treasures, and build your pirate crew.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page29": {
        src: "https://images.unsplash.com/photo-1652558973203-da9443c900d1?q=80&w=1162&auto=format&fit=crop",
        name: "Dino World",
        rate: 4.4,
        description: "Return to the age of dinosaurs.",
        longDescription: "Travel back in time to the prehistoric world. tame dinosaurs, explore ancient landscapes, and survive the dangers of the past.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page30": {
        src: "https://images.unsplash.com/photo-1594125812609-97eb771d464a?q=80&w=1160&auto=format&fit=crop",
        name: "Wizard School",
        rate: 4.7,
        description: "Learn magic at wizard school.",
        longDescription: "Enroll in the most prestigious wizard school. Learn powerful spells, brew magical potions, and compete in wizard duels.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page31": {
        src: "https://plus.unsplash.com/premium_photo-1723601004976-f0d8143129d2?q=80&w=1260&auto=format&fit=crop",
        name: "Super Hero",
        rate: 4.8,
        description: "Become a superhero and save the city.",
        longDescription: "Put on your cape and become a superhero. Fight crime, protect the innocent, and save the city from villainous threats.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page32": {
        src: "https://images.unsplash.com/photo-1614767629805-3bbcf6e26c7d?q=80&w=1160&auto=format&fit=crop",
        name: "Racing Pro",
        rate: 4.5,
        description: "Professional racing simulation.",
        longDescription: "Experience the thrill of professional racing. Compete in championships, customize your vehicles, and become a racing legend.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page33": {
        src: "https://images.unsplash.com/photo-1604247203891-ae01b7b2f1bb?q=80&w=1160&auto=format&fit=crop",
        name: "Farming Sim",
        rate: 4.6,
        description: "Build your dream farm.",
        longDescription: "Start your own farm from scratch. Grow crops, raise animals, and build the farm of your dreams.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page34": {
        src: "https://images.unsplash.com/photo-1653824021081-13b56eec90ff?q=80&w=1160&auto=format&fit=crop",
        name: "Cooking Master",
        rate: 4.3,
        description: "Become a master chef.",
        longDescription: "Create delicious dishes from around the world. Manage your restaurant, hire staff, and earn Michelin stars.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page35": {
        src: "https://plus.unsplash.com/premium_photo-1675706227465-da37c96ee858?q=80&w=1160&auto=format&fit=crop",
        name: "Music Hero",
        rate: 4.9,
        description: "Rhythm-based music game.",
        longDescription: "Tap to the beat and become a music hero. Play your favorite songs, master challenging levels, and become a rhythm master.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page36": {
        src: "https://images.unsplash.com/photo-1634715841611-67741dc71459?q=80&w=1062&auto=format&fit=crop",
        name: "Stealth Mission",
        rate: 4.6,
        description: "Infiltrate enemy bases silently.",
        longDescription: "Lead covert stealth operations behind enemy lines. Use shadows, hack security systems, and complete missions without being detected.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page37": {
        src: "https://images.unsplash.com/photo-1641638051559-eb58e9fe387e?q=80&w=1160&auto=format&fit=crop",
        name: "Zombie Defense",
        rate: 4.4,
        description: "Defend against zombie hordes.",
        longDescription: "Build defenses and survive waves of zombies. Upgrade weapons, fortify your base, and hold out against the undead apocalypse.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page38": {
        src: "https://images.unsplash.com/photo-1665949805590-4a9d4ee6cc44?q=80&w=1162&auto=format&fit=crop",
        name: "Sniper Elite",
        rate: 4.9,
        description: "Precision sniper missions.",
        longDescription: "Take aim and pull the trigger. Complete challenging sniper missions, upgrade your weapons, and become the ultimate marksman.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page39": {
        src: "https://plus.unsplash.com/premium_photo-1708962200465-2ee6671f0c7b?q=80&w=1054&auto=format&fit=crop",
        name: "Car Tuning",
        rate: 4.3,
        description: "Customize and tune your cars.",
        longDescription: "Build the ultimate racing machine. Customize every aspect of your car, tune performance, and dominate the streets.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page40": {
        src: "https://images.unsplash.com/photo-1681155712757-0ace0447fe5f?q=80&w=1172&auto=format&fit=crop",
        name: "Tank Wars",
        rate: 4.7,
        description: "Epic tank battles.",
        longDescription: "Command powerful tanks in massive tank warfare. Destroy enemy vehicles, capture territory, and lead your army to victory.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page41": {
        src: "https://plus.unsplash.com/premium_photo-1769854100048-9b6f554c562c?q=80&w=1160&auto=format&fit=crop",
        name: "Parkour Pro",
        rate: 4.5,
        description: "Master the art of parkour.",
        longDescription: "Run, jump, and climb through challenging environments. Perform amazing stunts and master the fluid art of movement.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page42": {
        src: "https://images.unsplash.com/photo-1760903192559-17dc111d31e3?q=80&w=1144&auto=format&fit=crop",
        name: "Survivalist",
        rate: 4.8,
        description: "Survive in the wilderness.",
        longDescription: "Test your survival skills in the wild. Find food, build shelter, and endure the challenges of nature.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page43": {
        src: "https://images.unsplash.com/photo-1759701546895-c7a425867ba1?q=80&w=1160&auto=format&fit=crop",
        name: "Fighter Club",
        rate: 4.6,
        description: "Join the underground fighter club.",
        longDescription: "Enter the world of underground fighting. Train hard, master combos, and fight your way to the top.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page44": {
        src: "https://images.unsplash.com/photo-1618185663342-c66c72b454df?q=80&w=1160&auto=format&fit=crop",
        name: "Hacker City",
        rate: 4.4,
        description: "Hack into the corporate mainframe.",
        longDescription: "Become a master hacker in a dystopian city. Breach corporate defenses, steal data, and uncover dark secrets.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page45": {
        src: "https://plus.unsplash.com/premium_photo-1689245691231-edf3f52dbcac?q=80&w=1160&auto=format&fit=crop",
        name: "Robot Arena",
        rate: 4.7,
        description: "Build and battle robots.",
        longDescription: "Design powerful robots and compete in the arena. Upgrade weapons, improve defenses, and become the champion.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page46": {
        src: "https://images.unsplash.com/photo-1660220939045-55d36e8800de?q=80&w=1084&auto=format&fit=crop",
        name: "Alien Hunter",
        rate: 4.5,
        description: "Hunt aliens across the galaxy.",
        longDescription: "Travel to distant planets and hunt dangerous alien species. Upgrade your weapons and become the galaxy's greatest predator.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page47": {
        src: "https://images.unsplash.com/photo-1757031694671-03df56cb97b2?q=80&w=1160&auto=format&fit=crop",
        name: "Street Fighter",
        rate: 4.8,
        description: "Classic street fighting action.",
        longDescription: "Relive the classic street fighting experience. Master special moves, defeat rivals, and become the ultimate champion.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page48": {
        src: "https://images.unsplash.com/photo-1631356460291-53e770d4d277?q=80&w=1160&auto=format&fit=crop",
        name: "Zombie World",
        rate: 4.3,
        description: "Navigate a world overrun by zombies.",
        longDescription: "Survive in a world consumed by the undead. Find survivors, scavenge supplies, and stay alive at all costs.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page49": {
        src: "https://images.unsplash.com/photo-1633287453177-24823499b02c?q=80&w=1160&auto=format&fit=crop",
        name: "Epic Battle",
        rate: 4.9,
        description: "Command massive armies in epic battles.",
        longDescription: "Command massive armies in epic battles across historical landscapes. Master complex strategies, upgrade your forces, and conquer territories.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page50": {
        src: "https://images.unsplash.com/photo-1573123837000-83c5f45f56df?q=80&w=1160&auto=format&fit=crop",
        name: "Galaxy Quest",
        rate: 4.8,
        description: "Explore a vast galaxy of mysteries.",
        longDescription: "Explore a vast galaxy filled with unknown planets, alien civilizations, and hidden treasures. Your choices shape the story.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page51": {
        src: "https://images.unsplash.com/photo-1647531452166-3584eb58e6e5?q=80&w=1160&auto=format&fit=crop",
        name: "Speed Kings",
        rate: 4.7,
        description: "The ultimate racing experience.",
        longDescription: "Feel the rush of high-speed racing as you compete against the world's best drivers. Precision controls and realistic physics.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page52": {
        src: "https://images.unsplash.com/photo-1736752085964-3ece9fede726?q=80&w=1160&auto=format&fit=crop",
        name: "Shadow Strike",
        rate: 4.8,
        description: "Become the ultimate spy.",
        longDescription: "Become the ultimate spy in this stealth-based action game. Infiltrate high-security facilities and uncover global conspiracies.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page53": {
        src: "https://plus.unsplash.com/premium_photo-1687892166031-828cc6574c15?q=80&w=1162&auto=format&fit=crop",
        name: "Dragon Rise",
        rate: 4.6,
        description: "Rise as a dragon and conquer.",
        longDescription: "Rise as a dragon and conquer the ancient realm. Unlock powerful abilities, evolve your form, and challenge other dragons.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page54": {
        src: "https://images.unsplash.com/photo-1659556741621-feade1ff0961?q=80&w=1130&auto=format&fit=crop",
        name: "Ninja World",
        rate: 4.9,
        description: "Master the way of the ninja.",
        longDescription: "Master the way of the ninja in a world of ancient mysteries and deadly enemies. Precision combat and unforgettable story await.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page55": {
        src: "https://images.unsplash.com/photo-1641638051559-eb58e9fe387e?q=80&w=1160&auto=format&fit=crop",
        name: "Warrior Quest",
        rate: 4.8,
        description: "Epic warrior adventure.",
        longDescription: "Embark on an epic warrior adventure. Train your combat skills, upgrade your equipment, and face legendary foes.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page56": {
        src: "https://images.unsplash.com/photo-1665949805590-4a9d4ee6cc44?q=80&w=1162&auto=format&fit=crop",
        name: "Sniper King",
        rate: 4.7,
        description: "Precision shooting at its finest.",
        longDescription: "Become the sniper king with precision shooting. Complete challenging missions and dominate the leaderboards.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page57": {
        src: "https://plus.unsplash.com/premium_photo-1708962200465-2ee6671f0c7b?q=80&w=1054&auto=format&fit=crop",
        name: "Racing Star",
        rate: 4.9,
        description: "Become a racing star.",
        longDescription: "Become the racing star you've always dreamed of. Master all tracks, customize your vehicle, and win championships.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page58": {
        src: "https://images.unsplash.com/photo-1681155712757-0ace0447fe5f?q=80&w=1172&auto=format&fit=crop",
        name: "Battle Master",
        rate: 4.6,
        description: "Master the art of battle.",
        longDescription: "Master the art of battle in this epic strategy game. Build your army, plan your attacks, and dominate your enemies.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page59": {
        src: "https://plus.unsplash.com/premium_photo-1769854100048-9b6f554c562c?q=80&w=1160&auto=format&fit=crop",
        name: "Puzzle Pro",
        rate: 4.8,
        description: "Challenge your puzzle skills.",
        longDescription: "Challenge your puzzle skills with hundreds of mind-bending levels. Test your logic and problem-solving abilities.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page60": {
        src: "https://images.unsplash.com/photo-1760903192559-17dc111d31e3?q=80&w=1144&auto=format&fit=crop",
        name: "Strategy Game",
        rate: 4.7,
        description: "Ultimate strategy gameplay.",
        longDescription: "Dive into the ultimate strategy gameplay. Build your empire, manage resources, and outsmart your opponents.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page61": {
        src: "https://images.unsplash.com/photo-1759701546895-c7a425867ba1?q=80&w=1160&auto=format&fit=crop",
        name: "Adventure Time",
        rate: 4.9,
        description: "Epic adventure awaits.",
        longDescription: "Embark on an unforgettable adventure. Explore mysterious lands, solve puzzles, and meet fascinating characters.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page62": {
        src: "https://images.unsplash.com/photo-1618185663342-c66c72b454df?q=80&w=1160&auto=format&fit=crop",
        name: "Horror Night",
        rate: 4.5,
        description: "Face your worst nightmares.",
        longDescription: "Face your worst nightmares in this thrilling horror game. Explore haunted locations and survive the terrors within.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page63": {
        src: "https://plus.unsplash.com/premium_photo-1689245691231-edf3f52dbcac?q=80&w=1160&auto=format&fit=crop",
        name: "Tech Demo",
        rate: 4.8,
        description: "Cutting-edge tech simulation.",
        longDescription: "Experience cutting-edge technology in this immersive simulation. Push the boundaries of what's possible.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page64": {
        src: "https://images.unsplash.com/photo-1660220939045-55d36e8800de?q=80&w=1084&auto=format&fit=crop",
        name: "Alien Wars",
        rate: 4.6,
        description: "War against alien invaders.",
        longDescription: " wage war against alien invaders threatening Earth. Build defenses, launch counterattacks, and save humanity.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page65": {
        src: "https://images.unsplash.com/photo-1773791406051-cb8216f58ecd?q=80&w=1160&auto=format&fit=crop",
        name: "Ocean Deep",
        rate: 4.7,
        description: "Explore the deep ocean.",
        longDescription: "Explore the mysteries of the deep ocean. Discover ancient ruins and encounter exotic sea creatures.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page66": {
        src: "https://images.unsplash.com/photo-1768501391108-ba094c8a6894?q=80&w=1160&auto=format&fit=crop",
        name: "Mountain Peak",
        rate: 4.9,
        description: "Conquer the highest peaks.",
        longDescription: "Challenge yourself to conquer the world's highest peaks. Master climbing and survive extreme conditions.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page67": {
        src: "https://plus.unsplash.com/premium_photo-1676901712447-4395959ac6cf?q=80&w=1160&auto=format&fit=crop",
        name: "Desert Wind",
        rate: 4.5,
        description: "Survive the harsh desert.",
        longDescription: "Survive the harsh desert conditions. Manage your resources and find the path to civilization.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "page68": {
        src: "https://images.unsplash.com/photo-1636583133884-fbefc7ac3fb3?q=80&w=1160&auto=format&fit=crop",
        name: "Forest Tales",
        rate: 4.8,
        description: "A magical forest adventure.",
        longDescription: "Embark on a magical journey through enchanted forests. Meet mythical creatures and discover ancient secrets.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "royal-roulette": {
        src: "https://images.unsplash.com/photo-1627831389670-d20f5a01c536?q=80&w=774&auto=format&fit=crop",
        name: "Royal Roulette",
        rate: 4.9,
        description: "Classic European roulette with stunning graphics.",
        longDescription: "Experience the elegance of European roulette with stunning graphics and smooth gameplay. Place your bets and watch the wheel spin in real-time.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "gold-poker": {
        src: "https://plus.unsplash.com/premium_photo-1698525808858-d5ef5f190e45?q=80&w=1740&auto=format&fit=crop",
        name: "Gold Poker",
        rate: 4.7,
        description: "Texas Hold'em with golden stakes.",
        longDescription: "Play the world's most popular poker variant. Compete against players worldwide, master your bluffing skills, and win big.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "lucky-slots": {
        src: "https://images.unsplash.com/photo-1518133120397-258d5eb470c6?q=80&w=1548&auto=format&fit=crop",
        name: "Lucky Slots",
        rate: 4.8,
        description: "Jackpot slots with mega wins.",
        longDescription: "Spin your way to fortune on hundreds of slot machines. Progressive jackpots, free spins, and exciting bonus rounds await.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "black-jack-pro": {
        src: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1746&auto=format&fit=crop",
        name: "Black Jack Pro",
        rate: 4.6,
        description: "Beat the dealer to 21.",
        longDescription: "Test your card counting skills against the house. Multiple betting options, side bets, and professional dealers create an authentic casino experience.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-blackjack": {
        src: "https://images.unsplash.com/photo-1726003906867-081fc895ce5d?q=80&w=1160&auto=format&fit=crop",
        name: "Live Blackjack",
        rate: 4.8,
        description: "Real-time blackjack with live dealers.",
        longDescription: "Feel the excitement of a real casino from home. Play blackjack with professional live dealers streaming in real-time.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-roulette": {
        src: "https://images.unsplash.com/photo-1726004592905-dc5cd794bda6?q=80&w=1160&auto=format&fit=crop",
        name: "Live Roulette",
        rate: 4.7,
        description: "Watch the wheel spin live.",
        longDescription: "Experience the thrill of live roulette. Professional croupiers spin the wheel in real-time, creating an authentic casino atmosphere.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-baccarat": {
        src: "https://images.unsplash.com/photo-1714865212807-3ae87635a38d?q=80&w=1740&auto=format&fit=crop",
        name: "Live Baccarat",
        rate: 4.9,
        description: "Premium live baccarat experience.",
        longDescription: "Play the elegant game of baccarat with live dealers. Squeeze cards, place side bets, and enjoy the VIP casino experience.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-poker": {
        src: "https://plus.unsplash.com/premium_photo-1694781503986-b306e10e1ffa?q=80&w=870&auto=format&fit=crop",
        name: "Live Poker",
        rate: 4.6,
        description: "Live Texas Hold'em action.",
        longDescription: "Join live poker tables and compete against players worldwide. Professional dealers, real-time gameplay, and exciting tournaments.",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
};

export default function GameDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const router = useRouter();
    const game = gamesData[slug];

    if (!game) {
        return (
            <main className="min-h-screen pt-20 pl-64 bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold text-white mb-4">Game Not Found</h1>
                    <button onClick={() => router.back()} className="text-blue-400 inline-flex items-center gap-2 cursor-pointer bg-transparent border-none">
                        <ChevronLeft size={20} />
                        <span>Back</span>
                    </button>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen pt-20 pl-64 bg-slate-900 p-8">
            <button onClick={() => router.back()} className="text-blue-400 inline-flex items-center gap-2 mb-8 cursor-pointer bg-transparent border-none">
                <ChevronLeft size={20} />
                <span>Back</span>
            </button>
            <div className="max-w-4xl mx-auto">
                <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                    <Image
                        src={game.src}
                        alt={game.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
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