import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-backgroundColor text-white mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between items-center p-8 md:px-32 px-5 space-y-8 md:space-y-0">

        {/* CarePathway Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
          <h1 className="font-bold text-2xl pb-4">CarePathway</h1>
          <p className="text-sm leading-relaxed">
            Our team of dedicated doctors, specializing in fields such as orthopedics, cardiology, pediatrics, neurology, dermatology, and more, provide expert care to our patients.
          </p>
        </div>

        {/* Social Icons Section */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-hoverColor"><FaFacebookF /></a>
          <a href="#" aria-label="Twitter" className="hover:text-hoverColor"><FaTwitter /></a>
          <a href="#" aria-label="Instagram" className="hover:text-hoverColor"><FaInstagram /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-hoverColor"><FaLinkedin /></a>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center md:items-start md:w-1/3 text-center md:text-left">
          <h1 className="font-semibold text-lg pb-4">Contact Us</h1>
          <nav className="flex flex-col gap-2">
            <a href="https://goo.gl/maps/sample" className="hover:text-hoverColor transition-all">
              16th street Chicago, IL 62701 United States
            </a>
            <a href="mailto:support@care.com" className="hover:text-hoverColor transition-all">
              support@care.com
            </a>
            <a href="tel:+123-456-7890" className="hover:text-hoverColor transition-all">
              +123-456-2345
            </a>
          </nav>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-white mt-8 py-4 text-center">
        <p>
          © 2024 Developed by 
          <span className="text-[#008080] font-bold"> CarePathway</span> | All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
