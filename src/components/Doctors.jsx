import React, { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";


const Doctors = () => {
  // Initial data for doctors
  const data = [
    {
      id: 1,
      img: "/src/assets/img/doc1.jpg",
      name: "Dr. Nirvan Patil",
      specialties: "Cardiologist",
      gender: "Male",
      rating: "4.9",
      clinicalArea: "Heart Health, Interventional Cardiology",
      languages: "English, Hindi",
      phone: "(630) 820-8201",
      education: "MD from Harvard Medical School, Fellowship at Johns Hopkins Hospital",
      credentials: "Board Certified in Cardiology",
      aboutMe: "Dr. Nirvan Patil is a dedicated cardiologist with over 10 years of experience in managing heart conditions. He is passionate about patient education and preventive care."
    },
    {
      id: 2,
      img: "/src/assets/img/doc2.jpg",
      name: "Dr. Mansi Patil",
      specialties: "Neurologist",
      gender: "Female",
      rating: "4.7",
      clinicalArea: "Epilepsy, Stroke, Multiple Sclerosis",
      languages: "English, Marathi",
      phone: "(630) 820-8234",
      education: "MD from Stanford University, Residency at Mayo Clinic",
      credentials: "Board Certified in Neurology",
      aboutMe: "Dr. Mansi Patil specializes in neurological disorders and is known for her compassionate approach towards her patients. She stays updated with the latest research and treatment options."
    },
    {
      id: 3,
      img: "/src/assets/img/doc3.jpg",
      name: "Dr. Parth Patil",
      specialties: "Pediatrician",
      gender: "Male",
      rating: "4.8",
      clinicalArea: "Childhood Illnesses, Preventive Care",
      languages: "English, Gujarati",
      phone: "(630) 820-8245",
      education: "MD from University of Illinois, Residency at Children's Hospital",
      credentials: "Fellow of the American Academy of Pediatrics",
      aboutMe: "Dr. Parth Patil has a passion for working with children and helping them grow healthy. He believes in a family-centered approach to pediatric care."
    },
    {
      id: 4,
      img: "/src/assets/img/doc4.jpg",
      name: "Dr. Akshata Patil",
      specialties: "Dermatologist",
      gender: "Female",
      rating: "4.9",
      clinicalArea: "Skin Cancer, Cosmetic Dermatology",
      languages: "English, Kannada",
      phone: "(630) 820-8256",
      education: "MD from Yale University, Fellowship in Dermatology",
      credentials: "Board Certified in Dermatology",
      aboutMe: "Dr. Akshata Patil is a board-certified dermatologist who specializes in skin cancer and cosmetic procedures. She is committed to providing personalized care for her patients."
    },
    {
      id: 5,
      img: "/src/assets/img/doc5.jpg",
      name: "Dr. Mihir Patil",
      specialties: "Cardiologist",
      gender: "Male",
      rating: "5",
      clinicalArea: "Heart Disease, Electrophysiology",
      languages: "English, Punjabi",
      phone: "(630) 820-8267",
      education: "MD from University of California, Fellowship in Cardiology",
      credentials: "Board Certified in Cardiology",
      aboutMe: "Dr. Mihir Patil has a distinguished career as a cardiologist with a focus on treating complex heart conditions. His expertise in electrophysiology has earned him recognition in the field."
    },
    {
      id: 6,
      img: "/src/assets/img/doc6.jpg",
      name: "Dr. Narendra Patil",
      specialties: "Ophthalmologist",
      gender: "Male",
      rating: "5",
      clinicalArea: "Cataract Surgery, Glaucoma",
      languages: "English, Hindi",
      phone: "(630) 820-8278",
      education: "MD from Johns Hopkins University, Residency in Ophthalmology",
      credentials: "Board Certified in Ophthalmology",
      aboutMe: "Dr. Narendra Patil specializes in cataract surgery and glaucoma management. He is dedicated to improving the quality of vision for his patients."
    },
  ];



  const slider = useRef(null);

  const [searchName, setSearchName] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [searchGender, setSearchGender] = useState("");

  // Filtering logic
  const filteredData = data.filter((doctor) => {
    return (
      doctor.name.toLowerCase().includes(searchName.toLowerCase()) && // Name filter
      (searchCategory === "" || doctor.specialties === searchCategory) && // Category filter
      (searchGender === "" || doctor.gender === searchGender) // Gender filter
    );
  });

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: filteredData.length < 3 ? filteredData.length : 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: filteredData.length < 3 ? filteredData.length : 3,
          slidesToScroll: filteredData.length < 3 ? filteredData.length : 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  // Debug log
  console.log('Rendering Doctors Component');
  console.log(filteredData);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] px-5">

      <div className="w-full lg:px-32 mb-10">
        <h1 className="text-3xl font-semibold text-center mb-5 text-[#008080]">Find a Doctor:</h1>
        <div className="flex justify-center gap-5 flex-wrap">

          <div className="relative">
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#008080]" />
            <input
              type="text"
              placeholder="Search by Name"
              className="bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] pl-10 pr-5 py-2 rounded-full text-[#008080] focus:outline-none"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>


          <select
            className="bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] px-5 py-2 rounded-full text-[#008080] focus:outline-none"
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Ophthalmologist">Ophthalmologist</option>
          </select>


          <select
            className="bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] px-5 py-2 rounded-full text-[#008080] focus:outline-none"
            value={searchGender}
            onChange={(e) => setSearchGender(e.target.value)}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      <div className="flex justify-between w-full px-32">
        <button
          className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
          onClick={() => slider.current.slickPrev()}
        >
          <FaArrowLeft size={25} />
        </button>
        <button
          className="bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
          onClick={() => slider.current.slickNext()}
        >
          <FaArrowRight size={25} />
        </button>
      </div>
      <div className="mt-5 w-full">
        <Slider ref={slider} {...settings}>
          {filteredData.length > 0 ? (
            filteredData.map((doctor, index) => (
              <div
                className="text-black bg-gradient-to-b from-[#48CCCC] to-[#246666] p-5 rounded-xl shadow-lg"
                key={doctor.id}
              >

                <div className="flex flex-col justify-center items-center h-[350px]">
                  <img
                    src={doctor.img}
                    alt="doctor"
                    className="h-40 w-40 rounded-full mb-5 object-cover"
                  />
                  <h1 className="text-white font-semibold text-xl mb-2">{doctor.name}</h1>
                  <h3 className="text-white text-sm">{doctor.specialties}</h3>
                  <p className="text-white">⭐ {doctor.rating}</p>
                  <Link
                    to="/Doctordescription"
                    state={{ doctorData: doctor }} 
                  >
                    <button
                      className="mt-5 px-5 py-2 bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] rounded-full text-[#008080] font-bold"
                    >
                      Make An Appointment
                    </button>
                  </Link>

                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-[#246666]">No doctors found</p>
          )}
        </Slider>
      </div>



    </div>
  );
};

export default Doctors;
