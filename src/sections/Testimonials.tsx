import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import Image from 'next/image';
import { Fragment } from 'react';

const testimonials = [
  {
    name: 'Ryan Geel',
    position: 'Director @ LifeChoices Academy',
    text: "I have had the pleasure of working with Philani now for a few months and it's been inspiring to engage with him and the inspiration that he has to continue growing is infectious. I recommend him for any opportunity he is a focused individual that knows what he wants.",
    avatar: memojiAvatar1,
  },
  {
    name: 'Rumbidzai Maisva-Sibanda',
    position: 'Head of Quality Assurance @ Global Kinetic',
    text: " Philani's technical strength and ability to grasp and hold domain knowledge make him a valuable asset who ensures he is seen as a reliable expert by his colleagues, contributing to successful project outcomes. His eagerness to master new technical tools makes him a valuable innovator on the team. With a calm, positive demeanour and a great sense of humour, he contributes significantly to team morale.",
    avatar: memojiAvatar2,
  },
  {
    name: 'Shane Turner',
    position: 'Business Analyst @ Global Kinetic',
    text: "Really enjoyed my time working with Philani (aka Philz) on a project over an extended period of time. As someone rising up in the world of testing and automation, I can see Philz really growing in an environment where is given the freedom to do so.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Jason Wandrag',
    position: 'Senior Developer @ Silicon Overdrive',
    text: "Philani has shown himself to be one of the most diligent and hardworking developers I have met. He is constantly growing and challenging himself and those around him. I have found great joy in the intellectual conversations I have with Philani, and I would recommend him for any tech position.",
    avatar: memojiAvatar5,
  },
  {
    name: 'Zayaan Stegmann',
    position: 'Quality Assurance Analyst @ MegaCorp',
    text: "Philani is excellent and an incredible resource to have on my team. He is always going the extra mile to do research and further learning to share with his teammates. ",
    avatar: memojiAvatar4,
  },
];

export const TestimonialsSection = () => {
  return (
    <div className="py-16 lg:py-24" id="testimonials">
      <div className="container">
        <SectionHeader
          eyebrows="Peer Feedback"
          title="What People Say About Working With Me"
          description="Hear directly from former teammates, collaborators, and mentors about my work ethic, impact, and approach to solving real-world problems."
        />
        <div className="mt-12 lg:mt-20 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%, transparent)] py-4 -my-4">
          <div className="flex gap-8 pr-8 flex-none animate-move-left [animation-duration:90s] hover:[animation-play-state:paused]">
            {[...new Array(2)].fill(0).map((_, i) => (
              <Fragment key={i}>
                {testimonials.map((testimonial) => (
                  <Card
                    key={testimonial.name}
                    className="max-w-xs md:p-8 md:max-w-md p-6 hover:-rotate-3 transition duration-300"
                  >
                    <div className="flex gap-4 items-center">
                      <div className="size-14 bg-gray-700 inline-flex rounded-full items-center justify-center rounded-full flex-shrink-0">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="max-h-full"
                        />
                      </div>
                      <div>
                        <div className="font-semibold">{testimonial.name}</div>
                        <div className=" text-sm text-white/40">
                          {testimonial.position}
                        </div>
                      </div>
                    </div>
                    <p className="mt-4 md:mt-6 text-sm md:text-base">
                      {testimonial.text}
                    </p>
                  </Card>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
