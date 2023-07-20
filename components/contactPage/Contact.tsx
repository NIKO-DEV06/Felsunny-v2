"use client";
import { motion } from "framer-motion";
import UnfixedHeader from "../header/UnfixedHeader";

const Contact = () => {
  const services = [
    "Sales & Distribution",
    "Property Sales",
    "Consultancy",
    "Government Supplies",
    "Construction & Interior",
    "Gadgets & Devices",
  ];
  return (
    <section className="min-h-screen bg-white text-black">
      <UnfixedHeader invert="" color="text-black" />
      <h1 className="font-sofia-regular mt-[4.5rem] mb-[2rem] text-[3rem] px-[2rem] leading-[3.3rem]">
        Hey! Tell us all the things{" "}
        <motion.span
          animate={{ rotate: [0, 10, -8, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          className="inline-block"
        >
          👋
        </motion.span>
      </h1>
      <p className="font-sofia-regular px-[2rem] text-[1.7rem] opacity-30 mb-[2rem]">
        I'm interested in...
      </p>
      <div className="px-[2rem] flex flex-wrap gap-[0.7rem]">
        {services.map((service, index) => (
          <button
            key={index}
            className="border-[1px] border-[#00000045] w-fit px-[1.3rem] py-[0.8rem] font-sofia-regular rounded-full text-[0.9rem]"
          >
            {service}
          </button>
        ))}
      </div>

      <form
        id="contact-form"
        className="px-[2rem] mt-[3rem] flex flex-col gap-[2.5rem]"
      >
        <div>
          <input
            type="text"
            name="name"
            autoComplete="off"
            placeholder="Your name"
            className="border-b-[0.9px] border-b-[#00000045] focus:border-b-black w-full rounded-none appearance-none outline-none pb-[0.5rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50"
          />
        </div>
        <div>
          <input
            type="text"
            name="email"
            autoComplete="off"
            placeholder="Your email"
            className="border-b-[0.9px] border-b-[#00000045] focus:border-b-black w-full rounded-none appearance-none outline-none pb-[0.5rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50"
          />
        </div>
        <div>
          <input
            type="text"
            name="message"
            autoComplete="off"
            placeholder="Tell us about your project"
            className="border-b-[0.9px] border-b-[#00000045] focus:border-b-black w-full rounded-none appearance-none outline-none pb-[0.5rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
