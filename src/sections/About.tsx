'use client';
import GithubIcon from '@/assets/icons/github.svg';
import React from '@/assets/icons/react.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import bookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { Card } from '@/components/Card';
import { CardHeader } from '@/components/CardHeader';
import { SectionHeader } from '@/components/SectionHeader';
import { ToolboxItem } from '@/components/ToolboxItem';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

const toolBoxItems = [
  {
    title: 'Java',
    iconType: JavascriptIcon,
  },
  {
    title: 'Golang',
    iconType: JavascriptIcon,
  },
  {
    title: 'Solidity',
    iconType: JavascriptIcon,
  },
  {
    title: 'Javascript',
    iconType: JavascriptIcon,
  },
  {
    title: 'Python',
    iconType: JavascriptIcon,
  },
  {
    title: 'React',
    iconType: React,
  },
  {
    title: 'Next.js',
    iconType: JavascriptIcon,
  },
  {
    title: 'Foundry',
    iconType: GithubIcon,
  },
];

const hobies = [
  {
    title: 'Financial Inclusion',
    emoji: '🤝',
    left: '2.5%',
    top: '0%',
  },
  {
    title: 'Decentralized Finance (DeFi)',
    emoji: '💹',
    left: '2.5%',
    top: '12.5%',
  },
  {
    title: 'Stablecoins & Digital Currencies',
    emoji: '💱',
    left: '2.5%',
    top: '25%',
  },
  {
    title: 'Startup Funding & Tokenized Capital',
    emoji: '🚀',
    left: '2.5%',
    top: '37.5%',
  },
  {
    title: 'Decentralized Infrastructure Architecture',
    emoji: '🏗️',
    left: '2.5%',
    top: '50%',
  },
  {
    title: 'Cross-Border Payments & Trade Infrastructure',
    emoji: '🌐',
    left: '2.5%',
    top: '62.5%',
  },
  {
    title: 'Blockchain Development (EVM, Solidity, Foundry)',
    emoji: '💻',
    left: '2.5%',
    top: '75%',
  },
  
];

export const AboutSection = () => {
  const constraintRef = useRef(null);
  return (
    <div className="pb-12 lg:py-28" id="about">
      <div className="container">
        <SectionHeader
          eyebrows="About Me"
          title="A glimpse into my world"
          description="Learn more about who I'm, what I do and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-2">
              <CardHeader
                title="My Journey"
                description="Discover my journey from a curious mind to a passionate developer."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>

            <Card className="h-[320px] md:col-span-3">
              <CardHeader
                className="px-6 pt-6"
                title="My Toolbox"
                description="Explore the technologies I use to craft innovative blockchain solutions."
              />
              <ToolboxItem
                toolBoxItems={toolBoxItems}
                className=""
                itemsWrapperClassName="animate-move-left [animation-duration:30s]"
              />
              <ToolboxItem
                toolBoxItems={toolBoxItems}
                className="mt-6"
                itemsWrapperClassName="animate-move-right [animation-duration:30s]"
              />
            </Card>
          </div>

          {/* Interest + Map Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="min-h-[35vh] p-0 flex-col">
              <CardHeader
                title="My Interests"
                description="Explore my interest and hobbies beyond the digital realm."
                className="px-6 py-6"
              />
              <div
                className="relative w-full h-[35vh] flex-1 overflow-hidden"
                ref={constraintRef}
              >
                {hobies.map((hobby) => (
                  <motion.div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute shadow-md"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                    drag
                    dragConstraints={constraintRef}
                  >
                    <span className="font-medium text-gray-950 whitespace-nowrap">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </motion.div>
                ))}
              </div>
            </Card>

            <Card className="min-h-[35vh] p-0 relative">
              <Image
                src={mapImage}
                alt="Map"
                className="h-full w-full object-cover"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-20 animate-ping [animation-duration:2s]"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full -z-10"></div>
                <Image
                  src={smileMemoji}
                  alt="Smile Memoji"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
