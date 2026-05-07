import Image from "next/image";

export default function Banner() {
    return (
        <div className="h-75 mx-6 mt-6 relative overflow-hidden rounded-xl">
            <Image width={1000} height={1000}
                src="https://images.unsplash.com/photo-1684395882899-571db620132b"
                alt="Banner"
                className="absolute inset-0 object-cover rounded-xl h-full w-full"
            />
            <div className="absolute inset-0 flex flex-col justify-start p-6 z-10">
                <h1 className="text-white text-left text-3xl font-bold">
                    Where players become champions.
                </h1>
                <h2 className="text-left text-2xl font-semibold mt-2 text-blue-400">
                    Play more. Win more.
                </h2>
                <button className="mt-4 px-6 py-2 rounded-full font-bold text-left w-fit bg-amber-500 text-slate-950">
                    #free
                </button>
            </div>
            <div className="absolute inset-0 bg-linear-to-br from-slate-900/70 via-slate-800/50 to-transparent rounded-xl" />
        </div>
    )
}