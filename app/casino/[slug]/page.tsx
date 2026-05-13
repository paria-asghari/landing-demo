"use client";

import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { use } from "react";
import NotFound from "@/components/not-found";

const gameData: Record<string, {
    title: string;
    description: string;
    longDescription: string;
    image: string;
    screenshots: string[];
}> = {
    "royal-roulette": {
        title: "Live Royal Roulette",
        description: "Classic European roulette with stunning graphics.",
        longDescription: "Experience the elegance of European roulette with stunning graphics and smooth gameplay. Place your bets and watch the wheel spin in real-time. Professional croupiers, multiple betting options, and exciting payouts await.",
        image: "https://images.unsplash.com/photo-1627831389670-d20f5a01c536?q=80&w=774&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "gold-poker": {
        title: "Live Gold Poker",
        description: "Texas Hold'em with golden stakes.",
        longDescription: "Play the world's most popular poker variant. Compete against players worldwide, master your bluffing skills, and win big. Join tournaments, climb the leaderboards, and become a poker legend.",
        image: "https://plus.unsplash.com/premium_photo-1698525808858-d5ef5f190e45?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "lucky-slots": {
        title: "Live Lucky Slots",
        description: "Jackpot slots with mega wins.",
        longDescription: "Spin your way to fortune on hundreds of slot machines. Progressive jackpots, free spins, and exciting bonus rounds await. Every spin could be your lucky one!",
        image: "https://images.unsplash.com/photo-1518133120397-258d5eb470c6?q=80&w=1548&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "black-jack-pro": {
        title: "Live Black Jack Pro",
        description: "Beat the dealer to 21.",
        longDescription: "Test your card counting skills against the house. Multiple betting options, side bets, and professional dealers create an authentic casino experience. Master the art of blackjack and beat the dealer.",
        image: "https://images.unsplash.com/photo-1596451190630-186aff535bf2?q=80&w=1746&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-blackjack": {
        title: "Live Blackjack",
        description: "Real-time blackjack with live dealers.",
        longDescription: "Feel the excitement of a real casino from home. Play blackjack with professional live dealers streaming in real-time. HD video, multiple tables, and 24/7 availability.",
        image: "https://images.unsplash.com/photo-1726003906867-081fc895ce5d?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-roulette": {
        title: "Live Roulette",
        description: "Watch the wheel spin live.",
        longDescription: "Experience the thrill of live roulette. Professional croupiers spin the wheel in real-time, creating an authentic casino atmosphere. Multiple camera angles and real-time betting.",
        image: "https://images.unsplash.com/photo-1726004592905-dc5cd794bda6?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-baccarat": {
        title: "Live Baccarat",
        description: "Premium live baccarat experience.",
        longDescription: "Play the elegant game of baccarat with live dealers. Squeeze cards, place side bets, and enjoy the VIP casino experience. Traditional rules with modern convenience.",
        image: "https://images.unsplash.com/photo-1714865212807-3ae87635a38d?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-poker": {
        title: "Live Poker",
        description: "Live Texas Hold'em action.",
        longDescription: "Join live poker tables and compete against players worldwide. Professional dealers, real-time gameplay, and exciting tournaments await. Play anytime, anywhere.",
        image: "https://plus.unsplash.com/premium_photo-1694781503986-b306e10e1ffa?q=80&w=870&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "casino-royale": {
        title: "Casino Royale",
        description: "The ultimate casino experience.",
        longDescription: "Enter the world of high-stakes gambling. Experience all your favorite casino games in one luxurious virtual venue.",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "vegas-nights": {
        title: "Vegas Nights",
        description: "Experience the Vegas strip.",
        longDescription: "Feel the excitement of Las Vegas from your screen. Neon lights, slot machines, and non-stop action await.",
        image: "https://images.unsplash.com/photo-1607779097040-26e80a78bb31?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "mega-fortune": {
        title: "Mega Fortune",
        description: "Win life-changing jackpots.",
        longDescription: "Spin the reels and aim for the mega fortune. Progressive jackpots that can change your life in an instant.",
        image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "jackpot-master": {
        title: "Jackpot Master",
        description: "Master the art of winning.",
        longDescription: "Become a jackpot master with our wide selection of progressive slots and table games.",
        image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "card-shark": {
        title: "Card Shark",
        description: "Sharpen your card skills.",
        longDescription: "Test your card skills against players from around the world. Master all card games and become the ultimate card shark.",
        image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "high-roller": {
        title: "High Roller",
        description: "VIP casino treatment.",
        longDescription: "Experience VIP treatment with exclusive high roller tables, personal managers, and premium rewards.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "lucky-7": {
        title: "Lucky 7",
        description: "Lucky number 7 awaits.",
        longDescription: "Trust in lucky 7 and spin your way to fortune. Simple, exciting, and full of rewards.",
        image: "https://images.unsplash.com/photo-1539191123335-3ebecae7a6ad?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "slot-king": {
        title: "Slot King",
        description: "The king of slots.",
        longDescription: "Claim your throne as the slot king. Thousands of slot games with massive payouts and exciting features.",
        image: "https://images.unsplash.com/photo-1626814026152-1c1817864260?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "poker-star": {
        title: "Poker Star",
        description: "Become a poker star.",
        longDescription: "Rise through the ranks and become a poker star. Play in major tournaments and win huge prizes.",
        image: "https://plus.unsplash.com/premium_photo-1687982009791-cf43bb7023b2?q=80&w=2064&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "golden-ace": {
        title: "Golden Ace",
        description: "Win with the golden ace.",
        longDescription: "The golden ace brings golden rewards. Play our premium card games and win big.",
        image: "https://images.unsplash.com/photo-1614767629805-3bbcf6e26c7d?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "diamond-vip": {
        title: "Diamond VIP",
        description: "VIP diamond treatment.",
        longDescription: "Experience the diamond VIP treatment with exclusive games, personal concierge, and luxury rewards.",
        image: "https://images.unsplash.com/photo-1604247203891-ae01b7b2f1bb?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "millionaire-club": {
        title: "Millionaire Club",
        description: "Join the millionaire club.",
        longDescription: "Play your way to millionaire status. Our games offer the biggest payouts in the industry.",
        image: "https://images.unsplash.com/photo-1653824021081-13b56eec90ff?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "royal-flush": {
        title: "Royal Flush",
        description: "Hit the royal flush.",
        longDescription: "Go for the legendary royal flush. Poker perfection that pays massive dividends.",
        image: "https://images.unsplash.com/photo-1585427448073-f7c6fdec14e2?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "bet-master": {
        title: "Bet Master",
        description: "Master your bets.",
        longDescription: "Learn to bet like a master. Advanced betting strategies and insider tips for all casino games.",
        image: "https://images.unsplash.com/photo-1616196395385-2587a28072eb?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "casino-king": {
        title: "Casino King",
        description: "Rule the casino.",
        longDescription: "Claim your crown as the casino king. Dominate all games and accumulate royal winnings.",
        image: "https://images.unsplash.com/photo-1662950698491-54faeebc2bd7?q=80&w=3131&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-casino-holdem": {
        title: "Live Casino Hold'em",
        description: "Live Texas Hold'em poker.",
        longDescription: "Play Casino Hold'em against real dealers. Real-time action with professional croupiers.",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-three-card": {
        title: "Live Three Card Poker",
        description: "Fast-paced three card poker.",
        longDescription: "Quick hands of three card poker with live dealers. Simple rules, fast action.",
        image: "https://images.unsplash.com/photo-1607779097040-26e80a78bb31?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-dream-catcher": {
        title: "Live Dream Catcher",
        description: "Spin the dream catcher.",
        longDescription: "A live money wheel game with multipliers. Exciting spins and huge winning potential.",
        image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=1916&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-speed-roulette": {
        title: "Live Speed Roulette",
        description: "Ultra-fast roulette action.",
        longDescription: "Experience the fastest roulette online. Quick spins, instant results, non-stop action.",
        image: "https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-ultimate-texas": {
        title: "Live Ultimate Texas",
        description: "Ultimate Texas Hold'em.",
        longDescription: "Play the exciting Ultimate Texas Hold'em with live dealers. Strategic gameplay and big payouts.",
        image: "https://images.unsplash.com/photo-1551103782-8ab07afd45c1?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-caribbean-stud": {
        title: "Live Caribbean Stud",
        description: "Caribbean stud poker.",
        longDescription: "Play Caribbean stud poker against the house. Progressive jackpot side bet option.",
        image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-lightning-dice": {
        title: "Live Lightning Dice",
        description: "Electric dice action.",
        longDescription: "Lightning-fast dice game with multipliers up to 1000x. High energy, high rewards.",
        image: "https://images.unsplash.com/photo-1539191123335-3ebecae7a6ad?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-monopoly": {
        title: "Live Monopoly",
        description: "Classic Monopoly live.",
        longDescription: "The classic board game comes to life in this exciting live version. 3D graphics and bonus rounds.",
        image: "https://images.unsplash.com/photo-1626814026152-1c1817864260?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-craps": {
        title: "Live Craps",
        description: "Real-time craps action.",
        longDescription: "Roll the dice in live craps. The authentic casino experience with professional dealers.",
        image: "https://plus.unsplash.com/premium_photo-1687982009791-cf43bb7023b2?q=80&w=2064&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-fan-tan": {
        title: "Live Fan Tan",
        description: "Traditional fan tan.",
        longDescription: "Experience the ancient Chinese game of fan tan with live dealers. Simple betting, exciting outcomes.",
        image: "https://images.unsplash.com/photo-1614767629805-3bbcf6e26c7d?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-sic-bo": {
        title: "Live Sic Bo",
        description: "Ancient dice game.",
        longDescription: "Play the ancient Chinese dice game sic bo with live dealers. Multiple betting options and big payouts.",
        image: "https://images.unsplash.com/photo-1604247203891-ae01b7b2f1bb?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-dragon-tiger": {
        title: "Live Dragon Tiger",
        description: "Fast dragon tiger game.",
        longDescription: "The simplest casino card game with dragon vs tiger. Bet on which side will be higher.",
        image: "https://images.unsplash.com/photo-1653824021081-13b56eec90ff?q=80&w=1160&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-mega-ball": {
        title: "Live Mega Ball",
        description: "Ball lottery game.",
        longDescription: "A lottery-style game with multipliers. Buy cards and watch the balls drop for big wins.",
        image: "https://images.unsplash.com/photo-1585427448073-f7c6fdec14e2?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-super-sic-bo": {
        title: "Live Super Sic Bo",
        description: "Enhanced sic bo action.",
        longDescription: "The exciting sic bo game with even bigger multipliers. Fast-paced and rewarding.",
        image: "https://images.unsplash.com/photo-1616196395385-2587a28072eb?q=80&w=1740&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
    "live-andar-bahar": {
        title: "Live Andar Bahar",
        description: "Classic Indian card game.",
        longDescription: "The popular Indian card game now live. Bet on whether the joker card appears on Andar or Bahar.",
        image: "https://images.unsplash.com/photo-1662950698491-54faeebc2bd7?q=80&w=3131&auto=format&fit=crop",
        screenshots: [
            "https://images.unsplash.com/photo-1651170104468-359c1a7fd53d?q=80&w=1740&auto=format&fit=crop",
            "https://plus.unsplash.com/premium_photo-1718879381555-65f698359b53?q=80&w=2064&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1703925153100-43afda8b6506?q=80&w=1548&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1596687909057-dfac2b25b891?q=80&w=1160&auto=format&fit=crop",
        ]
    },
};

export default function CasinoDetailPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
    const router = useRouter();
    const game = gameData[slug];

    if (!game) {
        return <NotFound title="Game Not Found" />;
    }

    return (
        <main className="min-h-screen pt-20 bg-slate-900 p-8">
            <button onClick={() => router.back()} className="text-blue-400 inline-flex items-center gap-2 mb-8 cursor-pointer bg-transparent border-none">
                <ChevronLeft size={20} />
                <span>Back</span>
            </button>
            <div className="max-w-4xl mx-auto">
                <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                    <Image
                        src={game.image}
                        alt={game.title}
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
                                alt={`${game.title} screenshot ${index + 1}`}
                                fill
                                className="object-cover hover:scale-110 transition-transform duration-300"
                            />
                        </div>
                    ))}
                </div>
                <div className="bg-slate-800 rounded-xl p-8 mb-4">
                    <div className="flex items-center justify-between mb-4">
                        <h1 className="text-3xl font-bold text-blue-400">{game.title}</h1>
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