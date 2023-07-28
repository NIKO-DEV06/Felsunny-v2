"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import UnfixedHeader from "../header/UnfixedHeader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import * as yup from "yup";
import toast, { Toaster } from "react-hot-toast";
import { Reveal } from "../utils/Reveal";

const Contact = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedServicesString, setSelectedServicesString] = useState("");

  console.log(selectedServices);
  console.log(selectedServicesString);

  const [isSending, setIsSending] = useState(false);

  const services = [
    "Sales & Distribution",
    "Property Sales",
    "Consultancy",
    "Government Supplies",
    "Construction & Interior",
    "Gadgets & Devices",
  ];

  const handleServiceClick = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices((prevServices) =>
        prevServices.filter((item) => item !== service)
      );
    } else {
      setSelectedServices((prevServices) => [...prevServices, service]);
    }
    setSelectedServicesString(selectedServices.join(", "));
  };

  useEffect(() => {
    setSelectedServicesString(selectedServices.join(", "));
  }, [selectedServices]);

  const schema = yup.object().shape({
    name: yup.string().trim().required("Please enter your name"),
    email: yup.string().email().required("Please enter a valid email address"),
    message: yup.string().trim().required("Please enter a message"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitFormHandler = async (data: any) => {
    setIsSending(true);
    try {
      const response = await emailjs.sendForm(
        process.env.NEXT_SERVICE_ID ?? "",
        process.env.NEXT_TEMPLATE_ID ?? "",
        "#contact-form",
        process.env.NEXT_KEY_ID ?? ""
      );
      reset();
      setIsSending(false);
      setSelectedServices([]);
      toast.success("Message Sent!");
    } catch (error) {
      setIsSending(false);
      console.log(error);
      toast.error("Message failed to send");
    }
  };
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <section className="min-h-screen bg-white text-black pb-[8rem]">
        <UnfixedHeader invert="" color="text-black" />
        <Reveal y={100}>
          <h1 className="font-sofia-regular mt-[4.5rem] md:mt-[7rem] mb-[2rem] md:mb-[5rem] text-[3rem] md:text-[4.7rem] md:leading-[4.8rem] px-[2rem] md:px-[9rem] leading-[3.3rem]">
            Hey! Tell us all
            <br /> the things{" "}
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
        </Reveal>
        <Reveal y={80}>
          <p className="font-sofia-regular md:font-sofia px-[2rem] md:px-[9rem] text-[1.7rem] md:text-[2.3rem] opacity-30 mb-[2rem]">
            I'm interested in...
          </p>
        </Reveal>
        <div className="px-[2rem] md:px-[9rem] flex flex-wrap gap-[0.7rem] md:gap-[1rem]">
          {services.map((service, index) => (
            <Reveal y={50}>
              <button
                key={index}
                className={`border-[1px] mb-[0.3rem] border-[#00000045] w-fit px-[1.3rem] md:px-[1.8rem] py-[0.8rem] md:py-[1.2rem] font-sofia-regular md:font-sofia rounded-full text-[0.9rem] md:text-[1.2rem] group ${
                  selectedServices.includes(service)
                    ? "bg-black text-white transition duration-[250ms] ease-in-out"
                    : ""
                }`}
                onClick={() => handleServiceClick(service)}
              >
                <div className="w-fit h-[1.8rem] md:h-[2rem] overflow-hidden flex flex-col gap-[0.3rem]">
                  <p className="translate-y-[.2rem] md:translate-y[-1rem] md:group-hover:translate-y-[-2rem] duration-[30ms] cubic">
                    {service}
                  </p>
                  <p className="md:group-hover:translate-y-[-1.8rem] hidden md:block duration-[300ms] cubic">
                    {service}
                  </p>
                </div>
                <div />
              </button>
            </Reveal>
          ))}
        </div>

        <form
          id="contact-form"
          onSubmit={handleSubmit(submitFormHandler)}
          className="px-[2rem] md:px-[9rem] mt-[4rem] md:pt-[5rem] flex flex-col gap-[3rem] md:gap-[5rem]"
        >
          <Reveal y={100} width="100%">
            <div>
              <input
                type="text"
                {...register("name")}
                name="name"
                autoComplete="off"
                placeholder="Your name"
                className={`border-b-[0.9px] md:border-b-[1.5px] ${
                  errors.name
                    ? "border-b-[#ff0000] focus:border-b-[#ff0000]"
                    : "border-b-[#00000045] focus:border-b-black"
                } w-full rounded-none appearance-none outline-none pb-[0.6rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50 md:text-[2.5rem] md:font-sofia relative`}
              />
              <p className="text-[#ff0000] font-sofia md:text-[1.1rem] text-left pt-1 md:pt-[1rem] absolute tracking-wide">
                {errors.name?.message}
              </p>
            </div>
          </Reveal>
          <Reveal y={100} width="100%">
            <div>
              <input
                type="text"
                {...register("email")}
                name="email"
                autoComplete="off"
                placeholder="Your email"
                className={`border-b-[0.9px] md:border-b-[1.5px] ${
                  errors.email
                    ? "border-b-[#ff0000] focus:border-b-[#ff0000]"
                    : "border-b-[#00000045] focus:border-b-black"
                } w-full rounded-none appearance-none outline-none pb-[0.6rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50 md:text-[2.5rem] md:font-sofia relative`}
              />
              <p className="text-[#ff0000] font-sofia md:text-[1.1rem] text-left pt-1 md:pt-[1rem] absolute tracking-wide">
                {errors.email?.message}
              </p>
            </div>
          </Reveal>
          <Reveal y={100} width="100%">
            <div>
              <input
                type="text"
                {...register("message")}
                name="message"
                autoComplete="off"
                placeholder="Tell us about your project"
                className={`border-b-[0.9px] md:border-b-[1.5px] ${
                  errors.message
                    ? "border-b-[#ff0000] focus:border-b-[#ff0000]"
                    : "border-b-[#00000045] focus:border-b-black"
                } w-full rounded-none appearance-none outline-none pb-[0.6rem] font-sofia-regular text-[1.7rem] placeholder:opacity-50 md:text-[2.5rem] md:font-sofia relative`}
              />
              <p className="text-[#ff0000] font-sofia md:text-[1.1rem] text-left pt-1 md:pt-[1rem] absolute tracking-wide">
                {errors.message?.message}
              </p>
            </div>
          </Reveal>

          <input
            type="hidden"
            name="selectedServices"
            value={selectedServicesString}
          />
          <Reveal y={100} width="100%">
            <button
              disabled={isSending}
              className={`font-sofia-regular text-[1.5rem] border-b-2 w-fit border-black md:border-[#00000045] ${
                isSending && "text-[#00000045]"
              } mt-[1rem] md:text-[1.7rem] relative group`}
            >
              {isSending ? "Sending..." : "Send Request"}
              <div
                className={`scale-x-0 hidden md:block md:absolute w-full h-[2px] bg-black bottom-[-2px] group-hover:scale-x-100 duration-300`}
              ></div>
            </button>
          </Reveal>
        </form>
      </section>
    </>
  );
};

export default Contact;
