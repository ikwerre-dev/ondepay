import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import cardinfo from "../assets/cardinfo.png";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};
const CardInfo = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center gap-[2.5rem] py-[5rem] bg-gradient-to-b from-[#211123] to-[#0d0511]">
      <section className="container mx-auto bg-[#ccc]/5 rounded-[1rem]  p-[2rem] py-[4rem]">
        <div className="grid lg:grid-cols-2 px-[2.5rem] gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-3xl text-white font-bold mb-8">
              Create Unique Cards in{" "}
              <span className="text-[#FFA6F8]">Style</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our cards offer more than just attractive design. They also
              feature instant payment notifications and in-app card security
              management. Plus, you can start making purchases right away using
              Google Pay or Apple Pay.
            </p>
            <button className="bg-[#FFA6F8] hover:bg-[#FFA6F8] text-black px-8 py-4 rounded-full text-sm flex items-center transition-colors">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
          <motion.div className="flex justify-center ">
            <img src={cardinfo} alt="" className=" h-[20rem] " />
          </motion.div>
        </div>
      </section>
     
      <section className="container mx-auto bg-[#ccc]/5 rounded-[1rem]  p-[2rem] py-[4rem]">
        <div className="grid lg:grid-cols-2 px-[2.5rem] gap-12 items-center">
          <motion.div className="flex justify-center ">
            <img src={cardinfo} alt="" className=" h-[20rem] " />
          </motion.div>
          <div className="max-w-xl">
            <h1 className="text-3xl text-white font-bold mb-8">
              Create Unique Cards in{" "}
              <span className="text-[#FFA6F8]">Style</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Our cards offer more than just attractive design. They also
              feature instant payment notifications and in-app card security
              management. Plus, you can start making purchases right away using
              Google Pay or Apple Pay.
            </p>
            <button className="bg-[#FFA6F8] hover:bg-[#FFA6F8] text-black px-8 py-4 rounded-full text-sm flex items-center transition-colors">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

     
    </div>
  );
};

export default CardInfo;
