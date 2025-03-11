import UnfixedHeader from '@/components/header/UnfixedHeader';
import browse from '@/assets/auto-images/browse.jpg';
import Image from 'next/image';

const Hero = () => {
  return (
    <section id="automotives-hero" className="relative">
      <div className="absolute w-full z-[30]">
        <UnfixedHeader invert="invert" color="text-[#fffff]" />
      </div>
      <div className="relative">
        <video
          src="/auto-hero.mp4"
          autoPlay
          muted
          loop
          poster="/hero-bg.jpeg"
          controls={false}
          playsInline
          className="h-screen object-cover w-full pointer-events-none"
        />
        <div className="absolute top-0 w-full h-[300px] bg-gradient-to-b from-black via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-[500px] bg-gradient-to-t from-black via-black/50 to-transparent"></div>
      </div>
      <div className="pxpx mx2xl absolute bottom-20 flex items-end justify-between w-full 2xl:left-1/2 2xl:-translate-x-1/2">
        <div>
          <h1 className="text-7xl tracking-tighter">
            Your Destination for <br /> Electric Vehicles
          </h1>
          <p className="text-2xl font-light mt-4">
            Go electric, drive smarter!
          </p>
        </div>
        <div>
          <div className="overflow-hidden w-[500px] h-[250px] rounded-3xl opacity-90 cursor-pointer group">
            <Image
              src={browse}
              width={1000}
              height={1000}
              className="w-full h-full object-cover group-hover:scale-[1.05] duration-500 ease-in-out"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
