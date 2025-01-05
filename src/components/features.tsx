import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CreditCard, Building2, Users } from 'lucide-react';

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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  };

  const clientLogos = [
    { name: "Revolut", className: "font-semibold text-2xl" },
    { name: "NorthOne", className: "font-medium text-xl" },
    { name: "checkout.com", className: "font-medium text-lg" },
  ];

  return (
    <motion.div
      initial="hidden"
      animate={isLoaded ? "visible" : "hidden"}
      variants={containerVariants}
      className="bg-[#440C3F] min-h-screen py-16 px-4 md:px-8 overflow-hidden"
    >
      <motion.div variants={itemVariants} className="max-w-6xl mx-auto mb-32">
        <motion.h2 
          variants={itemVariants}
          className="text-white text-center mb-16 text-2xl font-light"
        >
          Clients Includes
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 items-center justify-items-center"
        >
          {clientLogos.map((client) => (
            <motion.div
              key={client.name}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="w-48 h-12 bg-white/5 backdrop-blur-sm rounded-lg flex items-center justify-center"
            >
              <span className={`text-white ${client.className}`}>
                {client.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Features Section */}
      <motion.div variants={itemVariants} className="max-w-6xl mx-auto mb-16">
        <motion.h2 
          variants={itemVariants}
          className="text-white text-center mb-16 text-2xl font-light"
        >
          Features
        </motion.h2>
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Powerful Features Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-sm rounded-[32px] p-10"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-white text-[40px] mb-12 font-light"
            >
              Powerful Features
            </motion.h3>
            <motion.div 
              variants={containerVariants}
              className="flex gap-6"
            >
              {[CreditCard, Building2, Users].map((Icon, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  className="w-14 h-14 rounded-full bg-[#581550] flex items-center justify-center"
                >
                  <Icon className="w-7 h-7 text-white" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Seamless Onboarding Card */}
          <motion.div
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="bg-black/20 backdrop-blur-sm rounded-[32px] p-10 flex justify-between items-start"
          >
            <motion.div variants={itemVariants} className="max-w-[60%]">
              <h3 className="text-white text-[40px] mb-6 font-light">
                Seamless onboarding
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Get started using a completely digital on-boarding process, and activate your OneCard in less than 5 minutes.
              </p>
            </motion.div>
            <motion.div
              variants={cardVariants}
              className="w-[280px] bg-black rounded-[24px] p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-white text-lg">Account</span>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center"
                >
                  <span className="text-white text-xl">+</span>
                </motion.div>
              </div>
              <div className="text-3xl text-white font-medium mb-8">$4,692.94</div>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 p-4 rounded-2xl"
                >
                  <div className="text-sm text-gray-400">Individual entrepreneur</div>
                  <div className="text-white text-xl font-medium mt-1">$2,398.78</div>
                  <div className="text-xs text-emerald-400 mt-1">10.8% ↑</div>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 p-4 rounded-2xl"
                >
                  <div className="text-sm text-gray-400">Revolut Card</div>
                  <div className="text-white text-xl font-medium mt-1">$2,294.16</div>
                  <div className="text-xs text-emerald-400 mt-1">2.3% ↑</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Family Card Section */}
      <motion.div 
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        <motion.div
          variants={cardVariants}
          whileHover={{ scale: 1.02 }}
          className="bg-black/20 backdrop-blur-sm rounded-[32px] p-10 flex flex-col md:flex-row justify-between items-center gap-12"
        >
          <motion.div variants={itemVariants} className="md:max-w-[40%]">
            <h3 className="text-white text-[40px] mb-6 font-light">
              My Family
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              Share limit with your family. They get their own co-branded OneCard with separate offers while you keep track and control of their spending.
            </p>
          </motion.div>
          <motion.div 
            variants={containerVariants}
            className="relative h-[200px] w-full md:w-[60%] flex items-center justify-end"
          >
            <motion.img
              src="/placeholder.svg?height=200&width=400"
              alt="Stacked Family Cards"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default FeaturesSection;

