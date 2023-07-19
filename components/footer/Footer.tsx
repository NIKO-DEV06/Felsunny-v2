import Image from "next/image";
import logo from "@/assets/logo2.png";

const Footer = () => {
  return (
    <footer className="bg-[#000000] min-h-[68vh] md:min-h-screen">
      <Image
        src={logo}
        alt="logo"
        width={500}
        height={500}
        className="invert mx-auto translate-x-[-0.8rem]"
      />
      <div>
        <div></div>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
