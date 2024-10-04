import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center lg:px-32 px-5 text-[#000000]">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 bg-[url('./assets/img/about.jpg')] bg-no-repeat bg-cover filter blur-sm opacity-60"></div>

      {/* Content Container */}
      <div className="relative w-full lg:w-4/5 space-y-5 mt-10 text-center">
        <h1 className="text-5xl font-bold leading-tight text-[#008080]">
          About Us
        </h1>
        <p className="text-justify lg:text-center">
          At CarePathway, we are dedicated to revolutionizing the way healthcare professionals operate. With a passion for innovation and a commitment to excellence, we provide tailored solutions that simplify the practice of medicine. Founded by a team of experienced healthcare experts and technology enthusiasts, we understand the unique challenges faced by doctors and medical practitioners. Our mission is to empower you with the tools and support you need to deliver the highest quality care to your patients.
        </p>
        <br/>
        <p className="text-5xl font-bold leading-tight text-[#008080]">
          What We Offer:
          <br/>
        </p>
        <ul className="list-disc text-justify lg:text-start space-y-2">
          <li>Expert-Driven Services: Our solutions are crafted by professionals who know the intricacies of the healthcare industry, ensuring you receive the best support possible.</li>
          <li>Tailored Solutions: We understand that every practice is unique. That’s why we customize our services to fit your specific needs, helping you streamline your operations and enhance patient care.</li>
          <li>Commitment to Innovation: We continuously seek out the latest technologies and practices to ensure you have access to cutting-edge resources that can transform your practice.</li>
        </ul>
          <p className="text-justify lg:text-center">
          Join us on our mission to enhance healthcare delivery, one practice at a time. Together, we can make a difference in the lives of doctors and patients alike.
        </p>
      </div>
    </div>
  );
};

export default About;
