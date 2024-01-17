import Image from "next/image";
import Logo from "@/public/Logo.png";
import { HiOutlineMenuAlt2 } from "react-icons/hi";

const Topbar = () => {
  return (
    <div className="flex items-center w-[1600px] justify-between">
      <div className="flex items-center">
        <div className="flex w-[454px] justify-between font-Poppins">
          <h2>Home</h2>
          <h2>Service</h2>
          <h2>About</h2>
          <h2>Blog</h2>
        </div>
        <Image
          className="ml-[300px]"
          src={Logo}
          width={92}
          height={91}
          alt="logo"
        />
      </div>

      <div>
        <HiOutlineMenuAlt2 size={32} />
      </div>
    </div>
  );
};

export default Topbar;
