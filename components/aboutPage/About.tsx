import UnfixedHeader from "../header/UnfixedHeader";

const About = () => {
  return (
    <section className="min-h-screen bg-[#121212] text-white">
      <UnfixedHeader invert="invert" color="text-[#e0fd60]" />
      <div className="mt-[3rem] ">
        <h1 className="font-integral-bold text-center text-[3rem] md:text-[5rem] lg:text-[7.5rem] xl:text-[9rem] px-[2rem] md:px-[4rem] xl:px-[5rem] leading-[3rem] md:leading-[5rem] lg:leading-[7rem] xl:leading-[8.5rem]">
          Who we are
          <span className="font-serif font-bold hidden md:inline-block custom-pulse">
            _
          </span>
        </h1>
      </div>
    </section>
  );
};

export default About;
