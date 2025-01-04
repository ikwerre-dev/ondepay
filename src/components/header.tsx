import { motion } from "framer-motion";
import stars from "../assets/stars.png";

const HeaderComponent = () => {
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
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 20 },
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
        <motion.div className="flex justify-between items-center px-[2rem] h-[5rem] w-full">
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
        <motion.div className="flex justify-between items-center px-[2rem] h-[5rem] w-full">
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
      </div>
    </motion.div>
  );
};

export default HeaderComponent;
