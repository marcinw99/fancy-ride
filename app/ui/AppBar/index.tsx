import Image from "next/image";

export const AppBar = () => {
  return (
    <div className="p-4 shadow-md flex justify-between">
      <Image src="/FancyRide.png" alt="logo" width={175.5} height={32} />
        <div className="flex items-center">
            some items
        </div>
    </div>
  );
};
