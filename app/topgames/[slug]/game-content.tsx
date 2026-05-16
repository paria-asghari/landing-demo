"use client";

import { GameDetail } from "@/components/game-detail";
import NotFound from "@/components/not-found";

interface Props {
    title: string;
    image: string;
    reviews: string;
}

export function GameDetailWrapper({ title, image, reviews }: Props) {
    return <GameDetail title={title} image={image} reviews={reviews} />;
}

interface NotFoundWrapperProps {
    notFound?: boolean;
}

export function NotFoundWrapper({ notFound }: NotFoundWrapperProps) {
    if (notFound) {
        return <NotFound title="Game Not Found" />;
    }
    return null;
}