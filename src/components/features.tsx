import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import featureimage from "../assets/feature.png";
import feature1 from "../assets/feature1.svg";
import feature2 from "../assets/feature2.png";
import feature3 from "../assets/feature3.png";
import feature4 from "../assets/feature4.png";
import feature5 from "../assets/feature5.png";

const FeaturesSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-[#0c0510] min-h-screen  overflow-hidden pb-[5rem]"
    >
      <img src={featureimage} className="w-full h-full absolute" alt="" />
      <div className="pt-[5rem] px-4 md:px-8">
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
          <motion.h1
            variants={itemVariants}
            className="text-3xl text-center  bold md:text-3xl   mb-16 text-white tracking-tight"
          >
            Flex Your Digital Wealth with{" "}
            <span className="text-[#FFA6F8]">OndePay</span>
          </motion.h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* First Column - Split into two */}
          <div className="space-y-6">
            {/* Versatile Use Card */}
            <div className="bg-[#150d18] backdrop-blur-sm text-center  rounded-[24px] p-8">
              <h3 className="text-2xl mb-4">
                <span className="text-white">Versatile</span>{" "}
                <span className="text-[#FFA6F8]">Use</span>
              </h3>
              <p className="text-gray-300 my-8">
                Use your digital card for online purchases, in-store{" "}
                <span className="text-[#FFA6F8]">purchases</span>, and more
              </p>
              <div className="relative h-[5rem] my-5 flex items-center justify-center">
                <img
                  src={feature1}
                  alt=""
                  className="absolute w-[5rem] bottom-0 "
                  aria-hidden="true"
                />
              </div>
            </div>

            <div className="bg-[#150d18] backdrop-blur-sm text-center  rounded-[24px] p-8">
              <h3 className="text-2xl mb-4">
                <span className="text-white">Easy</span>{" "}
                <span className="text-[#FFA6F8]">Management</span>
              </h3>
              <div className="relative h-[5rem] my-5 flex items-center justify-center">
                <img
                  src={feature2}
                  alt=""
                  className="absolute w-[5rem] bottom-0 "
                  aria-hidden="true"
                />
              </div>
              <p className="text-gray-300 my-8">
                Manage your digital card and transactions easily through our{" "}
                <span className="text-[#FFA6F8]">user-friendly</span> app.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-[#150d18] backdrop-blur-sm text-center  rounded-[24px] p-8">
              <h3 className="text-2xl mb-4">
                <span className="text-white">Accepted</span>{" "}
                <span className="text-[#FFA6F8]">Everywhere</span>
              </h3>
              <div className="relative h-[5rem] my-5 flex items-center justify-center">
                <img
                  src={feature3}
                  alt=""
                  className="absolute w-[5rem] bottom-0 "
                  aria-hidden="true"
                />
              </div>
              <p className="text-gray-300 my-8">
                Use your digital card at any merchant that accepts{" "}
                <span className="text-[#FFA6F8]"> Visa or Mastercard.</span>
              </p>
            </div>

            <div className="bg-[#150d18] backdrop-blur-sm text-center  rounded-[24px] p-8">
              <h3 className="text-2xl mb-4">
                <span className="text-white">Customer</span>{" "}
                <span className="text-[#FFA6F8]">Support</span>
              </h3>
              <div className="relative h-[5rem] my-5 flex items-center justify-center">
                <img
                  src={feature4}
                  alt=""
                  className="absolute w-[10rem] bottom-0 "
                  aria-hidden="true"
                />
              </div>
              <p className="text-gray-300 my-8">
                Our team is ready to help you with any{" "}
                <span className="text-[#FFA6F8]"> questions or issues</span> you
                may have.
              </p>
            </div>
          </div>

          <div className="bg-[#150d18] backdrop-blur-sm text-center rounded-[24px] p-8 lg:flex lg:flex-col">
            <h3 className="text-2xl mb-4">
              <span className="text-white">Effortlessly</span>{" "}
              <span className="text-[#FFA6F8]">Spend</span>
            </h3>
            <p className="text-gray-300 my-8">
              Our digital card allows you to spend your{" "}
              <span className="text-[#FFA6F8]">digital assets</span> with ease.
            </p>
            <div className="relative flex justify-center flex-grow">
              <div className="absolute bottom-8 ">
                <img
                  src={feature5}
                  alt=""
                  className="w-[20rem] h-auto"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturesSection;
