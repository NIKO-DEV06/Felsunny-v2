import React from 'react';
import about1 from '@/assets/auto-images/about1.jpg';
import about2 from '@/assets/auto-images/about2.jpg';
import about3 from '@/assets/auto-images/about3.jpg';
import Image from 'next/image';

const About = () => {
  return (
    <section
      id="about"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/about-auto.jpg")`,
        backgroundPosition: 'center',
      }}
      className="bg-no-repeat bg-cover relative minh-screen"
    >
      <div className="absolute top-0 w-full h-[300px] bg-gradient-to-b from-black via-black/50 to-transparent"></div>
      <div className="flex flex-col justify-center items-center relative mt-20 ">
        <h2 className="text-center text-5xl tracking-tighter">
          Driven by Innovation <br /> Powered by Sustainability
        </h2>
        <p className="text-lg w-[40%] text-center mt-8">
          We are committed to bringing the best electric vehicles to your
          doorstep. With a passion for innovation and sustainability, our
          dealership offers top EV models, expert guidance, and excellent
          customer service.
        </p>
      </div>
      <div className="pxpx flex gap-3 mt-12 mx2xl 2xl:mt-16">
        <div className="h-[400px] w-[33.3%] overflow-hidden rounded-3xl group cursor-pointer">
          <Image
            src={about1}
            width={1000}
            height={1000}
            className="w-full h-full object-cover group-hover:scale-[1.05] duration-500 ease-in-out"
            alt=""
          />
        </div>
        <div className="h-[400px] w-[33.3%] overflow-hidden rounded-3xl group cursor-pointer">
          <Image
            src={about2}
            width={1000}
            height={1000}
            className="w-full h-full object-cover group-hover:scale-[1.05] duration-500 ease-in-out"
            alt=""
          />
        </div>{' '}
        <div className="h-[400px] w-[33.3%] overflow-hidden rounded-3xl group cursor-pointer">
          <Image
            src={about3}
            width={1000}
            height={1000}
            className="w-full h-full object-cover group-hover:scale-[1.05] duration-500 ease-in-out"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default About;
