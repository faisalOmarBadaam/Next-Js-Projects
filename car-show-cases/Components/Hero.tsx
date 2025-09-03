"useClient";
import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
      <div className="flex-1 pt-36 sm:px-16 px-6">
        <h1 className="2xl:text-[65px] sm:text-[55px] text-[40px] font-extrabold">
          Find, book, rent a car—quick and super easy!
        </h1>

        <p className="text-[27px] text-gray-400 font-light">
          Streamline your car rental experience with our effortless booking
          process.
        </p>

        <CustomButton
          title="Explore Cars"
          ContainerStyles="mt-5 bg-blue-600 text-white rounded-full cursor-pointer"
        />
      </div>
      <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
        <div className="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-[url('/hero-bg.png')] bg-repeat-round -z-10 w-full xl:h-screen h-[590px] overflow-hidden"></div>
      </div>
    </div>
  );
};

export default Hero;
