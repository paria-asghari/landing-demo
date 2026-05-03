
export function ImageCard({ image, text }: { image: string; text?: string }) {
    return (
        <div className="relative w-[200px]">
            <img
                alt="Indie Hackers community"
                className="aspect-square rounded-2xl object-cover"
                loading="lazy"
                src={image}
            />
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
            <h4 className="absolute bottom-4 left-0 right-0 text-center text-white">{text}</h4>
        </div>
    );
}