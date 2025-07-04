import UpArrow from '@/assets/icons/arrow-up-right.svg';
import CheckIcon from '@/assets/icons/check-circle.svg';
import aiStartupLandingPage from '@/assets/images/ai-startup-landing-page.png';
import ubuntuCoin from '@/assets/images/UbuntuCoin.jpg';
import grainImage from '@/assets/images/grain.jpg';
import rebaseToken from '@/assets/images/RebaseToken.png';
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';

const portfolioProjects = [
  {
    project: 'Decentralised Stablecoin',
    year: '2025',
    title: 'Ubuntu Stablecoin',
    results: [
      {
        title:
          'Developed a decentralized, overcollateralized stablecoin with Chainlink price feeds and health factor enforcement',
      },
      {
        title:
          'Built a collateral-backed minting and redemption engine with on-chain liquidation logic',
      },
      {
        title:
          'Integrated with Chainlink CCIP for future cross-chain expansion and token bridging',
      },
    ],
    link: 'https://gitlab.com/philaniantonydlamini/decentralised-stablecoin',
    image: ubuntuCoin,
  },
  {
    project: 'Elastic Supply Token',
    year: '2025',
    title: 'Ubuntu Rebase Token',
    results: [
      {
        title:
          'Developed a rebase-capable ERC-20 token with dynamic supply adjustments tied to protocol-defined metrics',
      },
      {
        title:
          'Implemented granular role-based access control for minting and burning using a custom token admin registry',
      },
      {
        title:
          'Integrated with Chainlink’s modular CCIP framework and simulated cross-chain deployment using testnet forks',
      },
    ],
    link: 'https://gitlab.com/philaniantonydlamini/cross-chain-rebase-token',
    image: rebaseToken,
  },
  {
    project: 'Airstack',
    year: '2025',
    title: 'Airstack Token Airdrop dApp',
    results: [
      {
        title:
          'Developed a full-stack Web3 application for ERC-20 token creators to easily airdrop tokens to wallet holders',
      },
      {
        title:
          'Integrated Airstack APIs to fetch real-time wallet data and dynamically filter eligible community members',
      },
      {
        title:
          'Optimized UI/UX for token launch teams, resulting in a 40% boost in engagement and 35% increase in mobile usage',
      },
    ],
    link: 'https://github.com/PhilaniAntony/airstack',
    image: aiStartupLandingPage,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24" id="projects">
      <div className="container">
        <SectionHeader
          eyebrows="Real-world Results"
          title="Featured Projects"
          description="Turning Your Concept Idea Into a Decentralised Appliaction."
        />

        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project, index) => (
            <Card
              key={project.title}
              className="px-8 md:px-auto pt-8 md:px-10 md:pt-12 lg:pt-16 lg:px-20 pb-0 sticky top-16"
              style={{
                top: 'calc(64px + ${projectIndex * 40}px)',
              }}
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.project}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result) => (
                      <li className="flex gap-2 text-sm text-white/50 md:text-base">
                        <CheckIcon className="size-5 md:size-6" />
                        <span> {result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                      <span>Visit Code Respository</span>
                      <UpArrow className="size-4" />
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image
                    className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                    src={project.image}
                    alt={project.title}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
