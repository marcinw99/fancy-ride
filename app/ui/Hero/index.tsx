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

      <div className="absolute left-[10%] top-[10%]">
        <p className="inline-block rounded bg-amber-400 px-4 py-1 font-medium">
          {FANCY_HINT}
        </p>
        <h1 className="mt-10 text-6xl font-medium">
          Motorcycle renting & sharing <br /> in Europe
        </h1>
        <div className="mt-10 inline-block rounded-3xl bg-white px-1">
          <p className="inline-block pl-4 pr-8 text-gray-500">from:</p>
          <input className="h-12 w-32" type="date" />
          <p className="inline-block px-8 text-gray-500">to:</p>
          <input className="h-12 w-32" type="date" />
          <button className="ml-12 rounded-3xl bg-blue-600 px-6 py-2 font-medium text-white transition-colors hover:bg-blue-400">
            Search
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="ml-2 inline-block h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
