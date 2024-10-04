import React from "react";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/img/blog1.jpg";
import img2 from "../assets/img/blog2.jpg";
import img3 from "../assets/img/blog3.jpg";
import img4 from "../assets/img/blog4.jpg";
import img5 from "../assets/img/blog5.jpg";
import img6 from "../assets/img/blog6.jpg";

const Blogs = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 bg-gradient-to-b from-[#48CCCC] to-[#F5F5DC]">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-semibold text-center">Blogs</h1>
        <p className="mt-2 text-center">
          Unlock the Future of Healthcare with Expert Insights and Innovations
        </p>
      </div>
      <div className="my-8 bg-[#F5F5DC] p-5 rounded-lg">
        <div className="flex flex-wrap justify-center gap-5">
          <BlogCard img={img2} headlines="The Future of Telemedicine: What Patients Need to Know" link="https://lymphoma.org/news/patient-perspectives-understanding-telemedicine/?gad_source=1&gclid=CjwKCAjwgfm3BhBeEiwAFfxrG3AgJrMCsCniGlrpH8qV2Z0EzQxLRw7DrgydsfN4brai0GMDxQJpIBoCtkoQAvD_BwE" />
          <BlogCard img={img5} headlines="The Future of Biotechnology: Trends and Innovations" link="https://www.dni.gov/index.php/gt2040-home/gt2040-deeper-looks/future-of-biotech#:~:text=Biomanufacturing%20of%20Materials%20and%20Devices,and%20manufacturing%20outcomes%20by%202040." />
          <BlogCard img={img3} headlines="Healthy Lifestyle Changes for a Better Life" link="https://www.niddk.nih.gov/health-information/diet-nutrition/changing-habits-better-health" />
          <BlogCard img={img4} headlines="The Importance of Safety Protocols in Science Laboratories" link="https://www.labsafety.org/resource?gad_source=1&gclid=CjwKCAjwgfm3BhBeEiwAFfxrG8tiz4XoVFEx8OBZ9dAiH-g12JJzk3nGHCO-TT0vTOK7W5ju3zEuiBoCiEoQAvD_BwE" />
          <BlogCard img={img1} headlines="Top 7 Tips for Building Stronger Patient-Doctor Relationships" link="https://www.tacitkey.com/blog/improve-doctor-patient-relationship/" />
         <BlogCard img={img6} headlines="Exploring the Role of Laboratory Equipment in Scientific Discoveries" link="Exploring the Role of Laboratory Equipment in Scientific Discoveries" />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
