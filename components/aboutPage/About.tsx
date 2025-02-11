import Image from 'next/image';
import UnfixedHeader from '../header/UnfixedHeader';
import { Reveal } from '../utils/Reveal';
import history from '@/assets/history.svg';
import inspiration from '@/assets/inspiration.svg';
import value from '@/assets/value.svg';
import ceo from '@/assets/ceo3.png';

import { ImageReveal } from '../utils/ImageReveal';

const About = () => {
  return (
    <section className="min-h-screen bg-black text-white pb-[5rem] overflow-x-hidden">
      <UnfixedHeader invert="invert" color="text-[#e0fd60]" />
      <div className="mt-[6rem] md:mt-[3rem]">
        <Reveal y={200} width="100%">
          <h1 className="font-integral-bold text-center text-[3rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] px-[2rem] md:px-[4rem] xl:px-[5rem] leading-[3rem] md:leading-[5rem] lg:leading-[7rem] xl:leading-[8.5rem]">
            Who we are
            <span className="font-serif font-bold hidden md:inline-block custom-pulse">
              _
            </span>
          </h1>
        </Reveal>
        <div>
          <div className="px-[1.5rem] md:px-[4rem] mt-[3rem] md:mt-[6rem] flex flex-col md:flex-row">
            <div className="pb-[2rem] md:w-1/2">
              <ImageReveal>
                <Image
                  src={history}
                  alt="spin"
                  width={60}
                  height={60}
                  className="animate-spin-slow"
                />
              </ImageReveal>
            </div>
            <div className="flex flex-col gap-[4rem] md:w-[50%]">
              <div className="flex flex-col gap-[1rem]">
                <Reveal y={80}>
                  <p className="uppercase font-[300] tracking-widest text-[1.1rem] md:text-[0.8rem] md:w-[30rem] underline">
                    Our History
                  </p>
                </Reveal>
                <Reveal y={250}>
                  <p className="font-[400] text-[1.1rem] md:text-[1.2rem] md:font-[300]">
                    Founded in 2010 by Felix Sunday Ayeniko in Nigeria, Felsunny
                    Technology has grown from a vision into a powerhouse in the
                    business solutions industry. We are dedicated to empowering
                    businesses to reach new heights through innovative and
                    tailored solutions, catering to a diverse range of
                    industries and needs.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="px-[1.5rem] md:px-[4rem] mt-[3rem] md:mt-[6rem] flex flex-col md:flex-row-reverse md:justify-between">
            <div className="pb-[2rem]">
              <ImageReveal>
                <Image
                  src={inspiration}
                  alt="spin"
                  width={60}
                  height={60}
                  className="animate-spin-slow"
                />
              </ImageReveal>
            </div>
            <div className="flex flex-col gap-[4rem] md:w-[50%]">
              <div className="flex flex-col gap-[1rem]">
                <Reveal y={80}>
                  <p className="uppercase font-[300] tracking-widest text-[1.1rem] md:text-[0.8rem] md:w-[30rem] underline">
                    Inspiration
                  </p>
                </Reveal>

                <Reveal y={250}>
                  <p className="font-[400] text-[1.1rem] md:text-[1.2rem] md:font-[300]">
                    From the outset, our founder, Felix Sunday Ayeniko,
                    envisioned a company that would bridge the gap between
                    businesses and success. With a deep understanding of the
                    challenges faced by enterprises, Felsunny Technology set out
                    to provide top-notch services that drive growth and
                    prosperity.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>

          <div className="px-[1.5rem] md:px-[4rem] mt-[3rem] md:mt-[6rem] flex flex-col md:flex-row">
            <div className="pb-[2rem] md:w-1/2">
              <ImageReveal>
                <Image
                  src={value}
                  alt="spin"
                  width={60}
                  height={60}
                  className="animate-spin-slow invert"
                />
              </ImageReveal>
            </div>
            <div className="flex flex-col gap-[4rem] md:w-[50%]">
              <div className="flex flex-col gap-[1rem]">
                <Reveal y={80}>
                  <p className="uppercase font-[300] tracking-widest text-[1.1rem] md:text-[0.8rem] md:w-[30rem] underline">
                    Our Values
                  </p>
                </Reveal>
                <Reveal y={250}>
                  <p className="font-[400] text-[1.1rem] md:text-[1.2rem] md:font-[300]">
                    At Felsunny, we put our clients at the heart of everything
                    we do. By taking the time to understand your unique needs,
                    we ensure our solutions align perfectly with your goals. Our
                    client-focused approach has fostered strong, enduring
                    partnerships that span various sectors and regions.
                    Integrity, innovation, and reliability are not just words
                    for us; they are the pillars of our work. As we continue to
                    evolve and adapt to the ever-changing business landscape,
                    our values remain steadfast.
                  </p>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
        {/* /// */}
        <div className="absolute translate-x-1/2 right-1/2 w-[20rem] md:w-[25rem] md:h-[25rem] lg:w-[27rem] lg:h-[27rem] h-[20rem] roundedfull mx-auto mt-[4rem] lg:mt-[10rem] lg:scale-[1.3]">
          <ImageReveal>
            <video
              src="/ball.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="rounded-full"
            ></video>
          </ImageReveal>
        </div>
        {/* /// */}

        <Reveal y={200} width="100%">
          <h1 className="font-integral-bold text-center text-[3rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] px-[2rem] md:px-[4rem] xl:px-[5rem] leading-[3rem] md:leading-[5rem] lg:leading-[7rem] xl:leading-[8.5rem] mt-[21rem] md:mt-[25rem] lg:mt-[33rem] mb-[4rem] lg:mb-[5rem]">
            Meet the CEO
          </h1>
        </Reveal>
        <div className="flex flex-col justify-center items-center">
          <div className="overflow-hidden rounded-full w-auto h-auto">
            <ImageReveal>
              <Image
                src={ceo}
                width={280}
                height={280}
                alt="ceo"
                className="grayscale hover:grayscale-0 hover:scale-[1.1] duration-300 cursor-pointer rounded-full lg:w-[350px] lg:h-[350px]"
              />
            </ImageReveal>
          </div>
          <Reveal y={100}>
            <p className="font-integral mt-[1.3rem] text-[1.35rem] italic md:text-[2rem] md:mt-[2rem]">
              Felix Sunday Ayeniko
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
