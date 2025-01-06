import HeaderComponent from "../components/header";
import Footer from "../components/footer";
import { motion } from 'framer-motion';

function TermsAndConditions() {
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
          Terms and <span className="text-[#FFA6F8]">Conditions</span>
        </motion.h1>
        
        <motion.div 
          className="prose prose-invert max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          <p>Welcome to PurpleCard. By using our services, you agree to comply with and be bound by the following terms and conditions:</p>
          
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using PurpleCard's services, you agree to be bound by these Terms and Conditions and all applicable laws and regulations. If you do not agree with any part of these terms, you may not use our services.</p>
          
          <h2>2. Use of Service</h2>
          <p>You agree to use PurpleCard's services only for lawful purposes and in accordance with these Terms. You are prohibited from using the service in any way that could damage, disable, overburden, or impair PurpleCard's servers or networks.</p>
          
          <h2>3. Account Registration</h2>
          <p>To use certain features of the service, you may be required to register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.</p>
          
          <h2>4. Privacy Policy</h2>
          <p>Your use of PurpleCard's services is also governed by our Privacy Policy. Please review our Privacy Policy, which also governs the site and informs users of our data collection practices.</p>
          
          <h2>5. Intellectual Property</h2>
          <p>The content, organization, graphics, design, compilation, magnetic translation, digital conversion, and other matters related to the Site are protected under applicable copyrights, trademarks, and other proprietary rights.</p>
          
          <h2>6. Disclaimer of Warranties</h2>
          <p>PurpleCard's services are provided on an "as is" and "as available" basis. PurpleCard makes no representations or warranties of any kind, express or implied, as to the operation of the site or the information, content, materials, or products included on the site.</p>
          
          <h2>7. Limitation of Liability</h2>
          <p>PurpleCard shall not be liable for any damages of any kind arising from the use of this service, including, but not limited to direct, indirect, incidental, punitive, and consequential damages.</p>
          
          <h2>8. Governing Law</h2>
          <p>These Terms and Conditions are governed by and construed in accordance with the laws of [Your Jurisdiction], and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
          
          <h2>9. Changes to Terms</h2>
          <p>PurpleCard reserves the right to modify these Terms and Conditions at any time. We will notify users of any changes by posting the new Terms and Conditions on this page.</p>
          
          <p>If you have any questions about these Terms and Conditions, please contact us at support@purplecard.com.</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;

