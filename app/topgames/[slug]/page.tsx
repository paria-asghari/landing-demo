import { allCasinoGames } from "@/data/casino-games";
import { notFound } from "next/navigation";
import { GameDetail } from "@/components/game-detail";

interface Props {
    params: Promise<{ slug: string }>;
    searchParams: Promise<{ index?: string }>;
}

const topGameImages = [
    "https://images.unsplash.com/photo-1562809896-1b1514f40708?q=80&w=1162&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1692313159128-c6975f357d28?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1614096601924-72086bc0aaed?q=80&w=1050&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1562495561-ddda20116b1e?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];
const topGameTitles = [
    "Level up your mood",
    "Only the best survive.",
    "Play more. Win more",
    "Built for real gamers",
];
const topGameReviews = [
    "(12,465 reviews)",
    "(8,932 reviews)",
    "(15,237 reviews)",
    "(6,781 reviews)",
];

export default async function GameDetailPage({ params, searchParams }: Props) {
    const { slug } = await params;
    const { index } = await searchParams;
    const game = allCasinoGames.find((g) => g.slug === slug);

    if (!game) {
        notFound();
    }
    // این هارو نفهمیدم
    const imageIndex = index ? parseInt(index) : 0;
    const title = topGameTitles[imageIndex] || game.name;
    const image = topGameImages[imageIndex] || game.src;
    const reviews = topGameReviews[imageIndex] || "(10,000 reviews)";

    return <GameDetail title={title} image={image} reviews={reviews} />;
}

