import ArrowDown from '@/assets/icons/arrow-down.svg';
import SparkleIcon from '@/assets/icons/sparkle.svg';
import StarIcon from '@/assets/icons/star.svg';
import grainImage from '@/assets/images/grain.jpg';
import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import { HeroOrbit } from './HeroOrbit';

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-45 lg:py-50 z-0 overflow-x-clip">
      <div
        className="absolute insert-0 [mask-image:linear-gradient(to_bottom,transparent, black_10%,black_70%,transparent)]"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      <div className="hero-ring size-[620px]"></div>
      <div className="hero-ring size-[820px]"></div>
      <div className="hero-ring size-[1020px]"></div>
      <div className="hero-ring size-[1220px]"></div>
      <HeroOrbit
        size={430}
        rotation={-14}
        shouldOrbit
        orbitDuration="30s"
        shouldSpin
        spinDuration="3s"
      >
        <SparkleIcon className="size-8 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={79} shouldOrbit orbitDuration="3s">
        <SparkleIcon className="size-5 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-41} shouldOrbit orbitDuration="34s">
        <div className="size-2 rounded-full text-emerald-300/20"> </div>
      </HeroOrbit>
      <HeroOrbit
        size={530}
        rotation={178}
        shouldOrbit
        orbitDuration="36s"
        shouldSpin
        spinDuration="6s"
      >
        <SparkleIcon className="size-10 text-emerald-300/20" />
      </HeroOrbit>

      <HeroOrbit
        size={550}
        rotation={20}
        shouldOrbit
        orbitDuration="38s"
        shouldSpin
        spinDuration="6s"
      >
        <StarIcon className="size-12 text-emerald-300 z-1" />
      </HeroOrbit>
      <HeroOrbit
        size={590}
        rotation={98}
        shouldOrbit
        orbitDuration="40s"
        shouldSpin
        spinDuration="6s"
      >
        <StarIcon className="size-8 text-emerald-300 bg-opacity-25" />
      </HeroOrbit>
      <HeroOrbit
        size={650}
        rotation={-5}
        shouldOrbit
        orbitDuration="42s"
        shouldSpin
        spinDuration="3s"
      >
        <div className="size-3 rounded-full text-emerald-300/20"> </div>
      </HeroOrbit>
      <HeroOrbit
        size={710}
        rotation={144}
        shouldOrbit
        orbitDuration="44s"
        shouldSpin
        spinDuration="3s"
      >
        <SparkleIcon className="size-14 text-emerald-300/20" />
      </HeroOrbit>
      <HeroOrbit
        size={720}
        rotation={85}
        shouldOrbit
        orbitDuration="46s"
        shouldSpin
        spinDuration="3s"
      >
        <div className="size-3 rounded-full text-emerald-300/20"> </div>
      </HeroOrbit>
      <HeroOrbit
        size={800}
        rotation={-72}
        shouldOrbit
        orbitDuration="48s"
        shouldSpin
        spinDuration="6s"
      >
        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <div className="container">
        <div className="flex flex-col items-center">
          <Image
            src={memojiImage}
            alt="Person peeking from behind computer."
            className="size-[100px]"
          />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-large">
            <div className="bg-green-500 size-2.5 rounded-full relative">
              <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
            </div>
            <div className="text-sm font-medium">
              Available for new projects
            </div>
          </div>
        </div>

        <div className="max-width-lg mx-auto">
          <h1 className="text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Decentralizing The Financial Sector
          </h1>
          <p className="mt-4 text-center text-white/60 text-lg">
            Powering the Decentralized Economy, Block by Bock.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
          <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
            <span className="font-semibold">Explore My Work</span>
            <ArrowDown className="size-4" />
          </button>
          <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl">
            <span>👋🏽</span>
            <span className="font-semibold">Let Us Connect</span>
          </button>
        </div>
      </div>
    </div>
  );
};
