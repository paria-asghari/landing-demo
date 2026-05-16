import HeroBanner from "./hero-banner";

const banners = [
  {
    title: "Where players become champions.",
    subtitle: "Play more. Win more.",
    buttonText: "#free",
    imageUrl: "https://images.unsplash.com/photo-1684395882899-571db620132b",
  },
];

export default function Banner() {
  return (
    <div className="flex flex-col gap-4">
      {banners.map((banner, index) => (
        <HeroBanner key={index} {...banner} />
      ))}
    </div>
  );
}