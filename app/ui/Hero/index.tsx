import Image from "next/image";

export const Hero = () => {
  const FANCY_HINT = "LEND YOUR MACHINE AND EARN CASH 💸";

  return (
    <div className="relative">
      <Image
        src="/hero.jpg"
        alt="hero wallpaper"
        width={1800}
        height={1200}
        className="-z-10"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/0 to-white/0"></div>

      <div className="absolute top-[10%] left-[10%]">
        <p>{FANCY_HINT}</p>
      </div>
    </div>
  );
};
