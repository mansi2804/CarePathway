import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Define roaming motion
const roamingMotion = {
  x: [0, "100vw", "50vw", "-50vw", "-100vw", "0"], // Moves around horizontally across the screen
  y: [0, "100vh", "-50vh", "50vh", "-100vh", "0"], // Moves around vertically across the screen
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 text-[#000000] bg-[url('assets/img/main.jpg')] bg-no-repeat bg-cover opacity-90 bg-[center_bottom_-50px] relative overflow-hidden">
      
      
      <motion.div
        className="absolute w-32 h-32 bg-teal-500 rounded-full opacity-30"
        animate={{ ...roamingMotion, transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }}}
        style={{ top: "10%", left: "15%" }}
      />
      <motion.div
        className="absolute w-40 h-40 bg-teal-500 rounded-full opacity-40"
        animate={{ ...roamingMotion, transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }}}
        style={{ top: "50%", right: "20%" }}
      />
      <motion.div
        className="absolute w-24 h-24 bg-teal-500 rounded-full opacity-50"
        animate={{ ...roamingMotion, transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }}}
        style={{ bottom: "15%", left: "35%" }}
      />
      <motion.div
        className="absolute w-56 h-56 bg-teal-500 rounded-full opacity-30"
        animate={{ ...roamingMotion, transition: { duration: 16, repeat: Infinity, ease: "easeInOut" }}}
        style={{ top: "5%", right: "10%" }}
      />
      <motion.div
        className="absolute w-48 h-48 bg-teal-500 rounded-full opacity-50"
        animate={{ ...roamingMotion, transition: { duration: 18, repeat: Infinity, ease: "easeInOut" }}}
        style={{ bottom: "10%", right: "30%" }}
      />
      <motion.div
        className="absolute w-28 h-28 bg-teal-500 rounded-full opacity-30"
        animate={{ ...roamingMotion, transition: { duration: 10, repeat: Infinity, ease: "easeInOut" }}}
        style={{ bottom: "25%", left: "60%" }}
      />

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-4/5 space-y-5 mt-10 relative z-10"
      >
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold leading-tight"
        >
          Seamless Solutions for Doctors, Unmatched Results for Patients
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-sm font-bold leading-tight"
        >
          Delivering Cutting-Edge Solutions Tailored for Healthcare Professionals.
          <br />
          Streamline Your Practice and Elevate Patient Care with Our Expertise.
        </motion.p>

        <Link to="/services"> 
        <motion.button
          whileHover={{ scale: 1.1 }}
          className=" mt-5 px-5 py-2 rounded-full border border-white bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] text-[#008080] font-bold"
          >
          See Services
        </motion.button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
