'use client';
import { useRouter } from 'next/navigation';
import { Reveal } from '../utils/Reveal';
import { ImageReveal } from '../utils/ImageReveal';

const GetInTouch = () => {
  const router = useRouter();
  return (
    <ImageReveal>
      <aside className="bg-white rounded-[2rem] md:rounded-[2.5rem] md:mx-[3rem] xl:mx-[6rem] py-[4rem] md:py-[7rem] px-[1.5rem] md:px-[7rem] mb-[7rem]">
        <Reveal y={80}>
          <h1 className="font-integral text-[1.3rem] md:text-[2rem] mb-[1.5rem]">
            Tell us about your project
          </h1>
        </Reveal>
        <Reveal y={50}>
          <button
            onClick={() => {
              router.push('/contact');
            }}
            className="bg-[#e0fd60] hover:bg-[#dff385] px-[1.5rem] py-[.5rem] md:py-[.7rem] md:hover:tracking-wider duration-300 z-[10] cursor-pointer rounded-full font-bold border-black border-2 mb-[2rem]"
          >
            Get in touch
          </button>
        </Reveal>
        <ImageReveal>
          <hr className="mb-[1.5rem] md:mb-[2.5rem]" />
        </ImageReveal>

        <div className="flex flex-col gap-[2rem]">
          <Reveal y={50}>
            <h1 className="font-integral">Our Offices</h1>
          </Reveal>

          <div className="flex flex-col md:flex-row gap-[1rem] md:gap-[10rem]">
            <div className="flex flex-col gap-[0.1rem]">
              <Reveal y={50}>
                <p className="font-integral">Nigeria</p>
              </Reveal>
              <Reveal y={50}>
                <p className="font-[300]">
                  {' '}
                  ROOM 201V,
                  <br /> NOVARE CENTRAL OFFICE,
                  <br /> PLOT 502, DALABA STREET, <br />
                  WUSE ZONE 5, <br /> FCT ABUJA
                </p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <Reveal y={50}>
                <p className="font-integral">Nigeria</p>
              </Reveal>
              <Reveal y={50}>
                <p className="font-[300] uppercase">
                  2 Ahmadu Bello Way, <br />
                  Challenge 240101
                </p>
              </Reveal>
              <Reveal y={50}>
                <p className="font-[300] uppercase">Ilorin, Kwara State</p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-[0.1rem]">
              <Reveal y={50}>
                <p className="font-integral">United Kingdom</p>
              </Reveal>
              <Reveal y={50}>
                <p className="font-[300 uppercase">West Midlands</p>
              </Reveal>
              <Reveal y={50}>
                <p className="font-[300] uppercase">Wolverhampton</p>
              </Reveal>
            </div>
          </div>
        </div>
      </aside>
    </ImageReveal>
  );
};

export default GetInTouch;
