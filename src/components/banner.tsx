import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import grid from "../assets/grid.png";
import homescreen from "../assets/screenshots/homescreen.jpg";

const BannerComponent: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const { scrollY } = useScroll();
  
  // Enhanced scroll-based transforms
  const gridY = useTransform(scrollY, [0, 500], [0, 150]);
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const blackBackgroundOpacity = useTransform(scrollY, [0, 500], [0, 1]);
  const dynamicIslandWidth = useTransform(scrollY, [0, 300], ["7rem", "10rem"]);
  const phoneScale = useTransform(scrollY, [0, 300], [1, 1.05]);
  const phoneY = useTransform(scrollY, [0, 300], ["55vh", "60vh"]);

  // Responsive breakpoints
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Enhanced animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.95,
    },
  };

  const floatingCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  return (
    <motion.div
      className="relative min-h-[55rem] w-full overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className="absolute inset-0 bg-gradient-to-b from-[#440C3F] via-[#581550] to-[#6C1565]"
        style={{ opacity: backgroundOpacity }}
      />
      <motion.div 
        className="absolute inset-0 bg-[#2e0929]"
        style={{ opacity: blackBackgroundOpacity }}
      />

      <motion.div
        className="absolute inset-0 h-auto top-0 flex justify-center w-full"
        style={{ 
          y: !isMobile ? gridY : 0, 
          opacity: backgroundOpacity 
        }}
      >
        <div className="relative max-w-4xl -bottom-10 h-auto flex flex-col w-full justify-start items-start">
          <img
            src={grid}
            className="w-full object-cover opacity-70"
            alt="Grid Background"
          />
        </div>
      </motion.div>

      <div className="relative flex flex-col pt-16 md:pt-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-normal md:text-5xl lg:text-6xl xl:text-7xl font-serif mb-6 sm:mb-8 text-white tracking-tight"
            style={{
              lineHeight: "1.1",
              textShadow: "0 2px 4px rgba(0,0,0,0.2)",
              letterSpacing: "-0.02em",
            }}
          >
            The first Employee Consumer Card
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-gray-100 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{
              textShadow: "0 1px 2px rgba(0,0,0,0.1)",
              opacity: 0.9,
            }}
          >
            Higher perk adoption, instant expense management, simple benefits
            access and much more
          </motion.p>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-white text-purple-900 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-medium text-sm
                     shadow-lg hover:shadow-xl hover:bg-opacity-95 transition-all duration-300"
            style={{
              backdropFilter: "blur(10px)",
              textShadow: "0 0 1px rgba(0,0,0,0.1)",
            }}
          >
            Request a Demo
          </motion.button>
        </div>
      </div>

      <motion.div 
        className="absolute bottom-0 w-full flex items-center justify-center"
        style={{ 
          y: phoneY,
          scale: phoneScale,
        }}
      >
        <motion.img
          src={homescreen}
          className="bottom-0 border-8 rounded-[1.5rem] border-black w-[15rem] md:w-[25rem] max-w-full"
          alt="Login Screenshot"
          whileInView={{ 
            opacity: [0, 1],
            y: [50, 0] 
          }}
          transition={{ 
            duration: 0.8,
            ease: "easeOut"
          }}
        />
        <motion.div 
          className="rounded-[5rem] bg-black h-[1.7rem] absolute top-[1rem]"
          style={{ 
            width: dynamicIslandWidth
          }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
        />
      </motion.div>

      <motion.div
        className="absolute hidden md:flex top-1/4 left-4 md:left-8 lg:left-16"
        variants={floatingCardVariants}
        initial="hidden"
        animate="visible"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl p-4 w-32  py-[2rem] flex flex-col items-center justify-center md:w-[15rem]"
          animate={{
            rotateY: [0, 10, 0],
            rotateX: [0, 5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
          }}
        >
          <h3 className="text-purple-900 font-semibold mb-2">Easy Expense</h3>
          <p className="text-sm text-gray-600 text-center">Manage your expenses effortlessly</p>
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute hidden md:flex top-1/2 right-4 md:right-8 lg:right-16"
        variants={floatingCardVariants}
        initial="hidden"
        animate="visible"
        style={{
          perspective: "1000px",
        }}
      >
        <motion.div
          className="bg-white rounded-lg shadow-xl p-4 w-32 py-[2rem]  flex flex-col items-center justify-center md:w-[15rem]"
          animate={{
            rotateY: [0, -10, 0],
            rotateX: [0, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <h3 className="text-purple-900 font-semibold mb-2">Smart Benefits</h3>
          <p className="text-sm text-gray-600 text-center">Access your perks instantly</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default BannerComponent;

