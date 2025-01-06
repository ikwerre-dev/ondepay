import HeaderComponent from "../components/header";
import Footer from "../components/footer";
import { motion } from 'framer-motion';

function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#0c0510] text-white">
      <div 
        className="absolute w-[70vw] h-full left-[15vw] top-[-255px] bg-[#492a4d] pointer-events-none"
        style={{
          filter: 'blur(120px)',
          opacity: 0.5,
        }}
      />
      <HeaderComponent />
      <main className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1 
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          About <span className="text-[#FFA6F8]">PurpleCard</span>
        </motion.h1>
        
        <motion.section 
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg text-gray-300 mb-4">
            At PurpleCard, we're on a mission to revolutionize the way you interact with your digital assets. We believe in a future where managing and spending your cryptocurrency is as simple and seamless as using traditional currency.
          </p>
          <p className="text-lg text-gray-300">
            Our goal is to bridge the gap between the crypto world and everyday transactions, making digital currencies accessible and useful for everyone.
          </p>
        </motion.section>

        <motion.section 
          className="mb-16"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Story</h2>
          <p className="text-lg text-gray-300 mb-4">
            Founded in 2021, PurpleCard was born out of a shared frustration with the complexity of using cryptocurrencies for daily transactions. Our founders, a team of fintech experts and blockchain enthusiasts, came together with a vision to create a solution that would make crypto as easy to use as cash.
          </p>
          <p className="text-lg text-gray-300">
            Since then, we've grown from a small startup to a leading player in the crypto-fintech space, serving thousands of users across the globe.
          </p>
        </motion.section>

        

        <motion.section 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 1.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Join Us on Our Journey</h2>
          <p className="text-lg text-gray-300 mb-4">
            We're always looking for passionate individuals to join our team and help us shape the future of digital finance. If you're excited about the potential of cryptocurrencies and want to make a real impact, we'd love to hear from you.
          </p>
          <a href="#" className="inline-block bg-[#FFA6F8] text-[#0c0510] py-2 px-6 rounded-full font-semibold hover:bg-opacity-80 transition-colors">
            Download app
          </a>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}

export default About;

