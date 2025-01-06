import React from "react";
import grid from "../assets/grid.png";
import phone from "../assets/phone.png";
import star from "../assets/star.png";
import { ArrowRightIcon, Star } from "lucide-react";
import { Link } from "react-router-dom";

const BannerComponent: React.FC = () => {
  return (
    <div className="relative min-h-[30rem] md:min-h-[55rem] w-full overflow-hidden">
      <div className="absolute inset-0 h-auto top-0 flex justify-center w-full">
        <div className="relative max-w-4xl -bottom-10 h-auto flex flex-col w-full justify-start items-start">
          <img
            src={grid}
            className="w-full object-cover opacity-15"
            alt="Grid Background"
          />
        </div>
      </div>

      <div className="relative flex flex-col pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="max-w-xl mx-auto text-center mb-[1.5rem]">
            <div className="bg-white/5 flex items-center justify-center text-[#FFA6F8] gap-5 w-fit backdrop-blur-md rounded-full py-[1rem] px-[2rem] mx-auto">
              <Star />
              <h5 className="text-[#FFA6F8] whitespace-nowrap">
                Customized card for you
              </h5>
              <Star />
            </div>
          </div>

          <h1 className="text-3xl sm:text-3xl bold md:text-6xl  mb-[1.5rem] text-white tracking-tight">
            Experience Financial
            <span className="text-[#FFA6F8]"> Freedom</span> with
            <span className="text-[#FFA6F8]"> Ondepay</span>
          </h1>

          <p className="text-md text-gray-400 mb-[1.5rem] max-w-2xl mx-auto leading-relaxed">
            Welcome to Ondepay, where every transaction is smooth, secure, and
            speedy. Designed for entrepreneurs, freelancers, and general users.
          </p>

          <div className="flex justify-center items-center gap-3">
            <button
              className="flex gap-3 justify-center items-center bg-[#FFA6F8] text-black rounded-[3rem] font-medium text-sm
                       shadow-lg hover:shadow-xl hover:bg-opacity-95 transition-all duration-300"
              style={{
                backdropFilter: "blur(10px)",
                textShadow: "0 0 1px rgba(0,0,0,0.1)",
              }}
            >
              <Link
                to="/download"
                className="flex gap-3  px-10 py-3 justify-center items-center  "
              >
                {" "}
                Download Now <ArrowRightIcon size={15} />{" "}
              </Link>
            </button>

            <Link
              to="/about"
              className="hidden md:flex gap-3 justify-center items-center bg-transparent border-white border-2 text-white px-10 py-3 rounded-[3rem] font-medium text-sm
                       shadow-lg hover:shadow-xl hover:bg-opacity-95 transition-all duration-300"
              style={{
                backdropFilter: "blur(10px)",
                textShadow: "0 0 1px rgba(0,0,0,0.1)",
              }}
            >
              Learn More <ArrowRightIcon size={15} />
            </Link>
          </div>
          <div className="mt-5 flex flex-col items-center justify-center">
            <img src={phone} alt="" />
          </div>
        </div>
        {[1, 2, 3, 4, 5, 6].map((data, index) => {
          const positions = [
            "w-[2rem] top-[1%] md:top-[10%] left-[10%]",
            "w-5 md:w-[2.5rem] top-[18%] md:top-[10%]  right-[10%]",
            "hidden md:flex w-[1.2rem] top-[40%] left-[25%]",
            "w-[2rem]  bottom-[10%] left-[10%]",
            "w-[2rem] bottom-[10%] right-[10%]",
            "hidden md:flex w-[2rem] top-[25%] right-[40%]",
          ];

          return (
            <img
              src={star}
              key={data}
              className={`${positions[index]} absolute`}
              alt=""
            />
          );
        })}
      </div>
    </div>
  );
};

export default BannerComponent;
