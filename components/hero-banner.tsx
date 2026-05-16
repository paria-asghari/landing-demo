import Image from "next/image";

interface HeroBannerProps {
  title: string;
  subtitle: string;
  buttonText: string;
  imageUrl: string;
}

export default function HeroBanner({ title, subtitle, buttonText, imageUrl }: HeroBannerProps) {
  return (
    <div className="h-75 mx-6 mt-6 relative overflow-hidden rounded-xl">
      <Image
        width={1000}
        height={1000}
        src={imageUrl}
        alt="Banner"
        className="absolute inset-0 object-cover rounded-xl h-full w-full"
      />
      <div className="absolute inset-0 flex flex-col justify-start p-6 z-10">
        <h1 className="text-white text-left text-3xl font-bold">{title}</h1>
        <h2 className="text-left text-2xl font-semibold mt-2 text-blue-400">{subtitle}</h2>
        <button className="mt-4 px-6 py-2 rounded-full font-bold text-left w-fit bg-amber-500 text-slate-950">
          {buttonText}
        </button>
      </div>
      <div className="absolute inset-0 bg-linear-to-br from-slate-900/70 via-slate-800/50 to-transparent rounded-xl" />
    </div>
  );
}