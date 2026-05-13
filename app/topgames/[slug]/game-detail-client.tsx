"use client";

import { GameDetail } from "@/components/game-detail";
import NotFound from "@/components/not-found";

interface GameDetailClientProps {
    title: string;
    image: string;
    reviews: string;
    notFound?: boolean;
}

export default function GameDetailClient({
    title,
    image,
    reviews,
    notFound = false
}: GameDetailClientProps) {
    if (notFound) {
        return <NotFound title="Game Not Found" />;
    }

    return <GameDetail title={title} image={image} reviews={reviews} />;
}