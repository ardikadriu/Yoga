import Image from "next/image";
import backgroundImage from "@/public/Woman-yoga.png";

const Secondsection = () => {
  return (
    <div
      className="w-[890px] h-[890px] bg-[#E4E4E4] rounded-[462px] flex justify-center items-center  relative"
      style={{
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="w-[105px] h-[105px] rounded-full border-[1px] border-black justify-center items-center flex absolute top-0  left-[602px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
        >
          <g clip-path="url(#clip0_0_73)">
            <path
              d="M22.549 9.82479C19.8831 8.21703 16.4833 10.1369 16.4833 13.2501V31.7499C16.4833 34.8632 19.8831 36.783 22.549 35.1753L37.8869 25.9253C40.4659 24.37 40.4659 20.6301 37.8869 19.0747L22.549 9.82479Z"
              fill="#1F1F1F"
            />
          </g>
          <defs>
            <clipPath id="clip0_0_73">
              <rect width="50" height="49" fill="white" />
            </clipPath>
          </defs>
        </svg>{" "}
      </div>
    </div>
  );
};

export default Secondsection;
