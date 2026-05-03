import { Card } from "@heroui/react";

export function Hero() {
    return (
        <Card className="w-full overflow-hidden rounded-2xl">
            <div className="relative h-[400px]">
                <img
                    className="h-full w-full object-cover rounded-2xl"
                    src="https://images.unsplash.com/photo-1540340061722-9293d5163008?q=80&w=2942&auto=format&fit=crop"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-transparent rounded-2xl" />

                <div className="absolute inset-0 flex flex-col justify-start items-start p-6 gap-2">
                    <h1 className="text-white text-3xl font-bold px-4">
                        Everything You Need, Right Around the Corner.
                    </h1>
                    <h3 className="text-white text-xl font-normal px-4">
                        Quality groceries just steps away from you!
                    </h3>
                </div>
            </div>
        </Card>
    );
}