import { useState } from "react";
import { motion } from "framer-motion";
import stars from "../assets/stars.png";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const rightItemVariants = {
    hidden: { opacity: 1, x: 20 },
    visible: { opacity: 1, x: 0 },
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.div
      className="w-full h-[5rem] relative flex flex-col items-center justify-center"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <img src={stars} className="absolute w-full top-[2rem]" alt="" />
      <div className="flex z-10 justify-between h-[5rem] w-full max-w-4xl">
        <motion.div className="hidden md:flex justify-between items-center px-[2rem] h-[5rem] w-full">
          <motion.a
            href="#"
            variants={itemVariants}
            className="text-white text-sm cursor-pointer font-normal"
          >
            Home
          </motion.a>
          <motion.a
            href="#"
            variants={itemVariants}
            className="text-white text-sm cursor-pointer font-normal"
          >
            About
          </motion.a>
          <motion.a
            href="#"
            variants={itemVariants}
            className="text-white text-sm cursor-pointer font-normal"
          >
            Services
          </motion.a>
        </motion.div>
        <motion.div
          className="flex justify-center items-center px-[2rem] h-[5rem] w-full"
          variants={logoVariants}
        >
          <h4 className="text-white text-3xl text-center acme-font font-bold">
            ONDEPAY
          </h4>
        </motion.div>
        <motion.div className="hidden md:flex justify-between items-center px-[2rem] h-[5rem] w-full">
          <motion.a
            href="#"
            variants={rightItemVariants}
            className="text-white text-sm cursor-pointer font-normal"
          >
            Blog
          </motion.a>
          <motion.a
            href="#"
            variants={rightItemVariants}
            className="text-white text-sm cursor-pointer font-normal"
          >
            Contact
          </motion.a>
          <motion.a
            href="#"
            variants={rightItemVariants}
            className="text-white text-sm cursor-pointer font-normal"
          >
            Login
          </motion.a>
        </motion.div>
        <div className="md:hidden flex items-center px-[2rem]">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z" />
              ) : (
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-[5rem] left-0 right-0 bg-[#440C3F] z-20"
        >
          <div className="flex flex-col items-center py-4">
            <a href="#" className="text-white text-sm cursor-pointer font-normal py-2">Home</a>
            <a href="#" className="text-white text-sm cursor-pointer font-normal py-2">About</a>
            <a href="#" className="text-white text-sm cursor-pointer font-normal py-2">Services</a>
            <a href="#" className="text-white text-sm cursor-pointer font-normal py-2">Blog</a>
            <a href="#" className="text-white text-sm cursor-pointer font-normal py-2">Contact</a>
            <a href="#" className="text-white text-sm cursor-pointer font-normal py-2">Login</a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default HeaderComponent;

