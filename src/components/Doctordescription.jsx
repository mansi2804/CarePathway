import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";

const Doctordescription = () => {
    const location = useLocation();
    const { doctorData } = location.state || {};

    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [backgroundImage, setBackgroundImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (selectedDate && selectedTime) {
            setBackgroundImage(doctorData.img); // Set background image from doctor data
            setShowPopup(true);
        }
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    if (!doctorData) {
        return <p>No doctor information available.</p>;
    }

    // Assuming these ratings are included in doctorData
    const ratings = doctorData.ratings || {
        5: 80,
        4: 10,
        3: 8,
        2: 2,
        1: 0
    };

    return (
        <div
            className="min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24"
            style={{
                backgroundImage: `url(${doctorData.img})`, 
                backgroundSize: 'cover',
                transition: 'background-image 0.5s ease', 
                backgroundPosition: 'center', 
             

            }}
        >
            {/* Main container */}
            <div className="max-w-7xl w-full p-8 bg-opacity-80 rounded-lg shadow-lg">
                {/* Upper part - Image and Info */}
                <div className="flex flex-col md:flex-row justify-between mb-10">
                    {/* Left side - Image */}
                    {/* <div className="w-full md:w-1/3 mb-10 md:mb-0 flex justify-center">
                        <img
                            src={doctorData.img} 
                            alt={doctorData.name}
                            className="h-40 w-40 rounded-sm border border-white object-cover"
                        />
                    </div> */}
                    {/* Right side - Doctor Info */}
                    <div className="w-full md:w-2/3 flex shadow-sm flex-col p-6 justify-center text-center md:text-left">
                        <h1 className="text-3xl font-bold text-[#008080]">{doctorData.name || "Mansi Patil"}</h1>
                        <p className="text-[#008080] mt-2 font-bold">Specialties: {doctorData.specialties || "Pediatrics"}</p>
                        <p className="text-[#008080] font-bold">Languages: {doctorData.languages || "English, Spanish"}</p>
                        <p className="text-[#008080] font-bold">Phone: {doctorData.phone || "(630) 820-8234"}</p>
                        <p className="text-[#008080] font-bold">Location: {doctorData.location || "Chicago, IL"}</p>
                        <p className="text-[#008080] font-bold">Clinical Area: {doctorData.clinicalArea}</p>
                    </div>
                </div>
                {/* Lower part - Two columns */}
                <div className="flex flex-col md:flex-row">
                    {/* Left Column - Education, About Me, Credentials, Ratings and Reviews */}
                    <div className="w-full md:w-2/3 mb-10 md:mr-5">
                        <div className="p-6 rounded-lg shadow-lg mb-5">
                            <h2 className="text-4xl font-bold mb-3 text-[#008080]">About Me</h2>
                            <p className="text-[#246666] font-bold">
                                {doctorData.aboutMe ||
                                    "Dr. is a board-certified pediatrician who has provided dedicated care to the children in the community for many years. She believes in the importance of staying up-to-date on all the latest medical news to help educate and provide the best care for her patients."}
                            </p>
                        </div>

                        <div className="p-6 rounded-lg shadow-lg mb-5">
                            <h2 className="text-2xl font-bold mb-3 text-[#008080]">Education</h2>
                            <p className="text-[#246666] font-bold">{doctorData.education}</p>
                        </div>

                        <div className="p-6 rounded-lg shadow-lg mb-5">
                            <h2 className="text-2xl font-bold mb-3 text-[#008080]">Credentials</h2>
                            <p className="text-[#246666] font-bold">{doctorData.credentials}</p>
                        </div>

                        {/* Ratings and Reviews */}
                        <div className="p-6 rounded-lg shadow-lg bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC]">
                            <h2 className="text-2xl font-bold text-center mb-5 text-[#008080]">Ratings and Reviews</h2>
                            <div className="flex items-center justify-center mb-5">
                                <span className="text-4xl text-[#008080]">⭐</span>
                                <span className="text-4xl font-bold ml-2 text-[#008080]">{doctorData.rating}</span>
                                <span className="text-xl ml-2 text-[#008080]">out of 5</span>
                            </div>
                            <p className="text-center text-[#246666]">27 global ratings</p>
                            <div className="mt-5">
                                {/* Progress Bars for ratings */}
                                {[5, 4, 3, 2, 1].map((star) => (
                                    <div className="flex justify-between items-center" key={star}>
                                        <p>{star}⭐</p>
                                        <div className="w-full bg-gray-200 h-2 mx-3 rounded-full">
                                            <div
                                                className="bg-[#008080] h-2 rounded-full"
                                                style={{ width: `${ratings[star] || 0}%` }}
                                            ></div>
                                        </div>
                                        <p>{ratings[star] || 0}%</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Appointment Booking */}
                    <div className="w-full md:w-1/3 flex flex-col">
                        <div className="bg-gradient-to-t from-[#B4E2E2] to-[#F5F5DC] p-6 rounded-lg shadow-lg">
                            <h2 className="text-2xl font-bold mb-3 text-[#008080] text-center">Book An Appointment</h2>
                            <div className="flex justify-between mb-5">
                                {/* Days */}
                                {[21, 22, 23, 24, 25, 26].map((day) => (
                                    <button
                                        key={day}
                                        className={`px-4 py-2 rounded-full ${selectedDate === day
                                            ? "bg-[#008080] text-white"
                                            : "bg-gray-200 text-[#008080]"
                                            }`}
                                        onClick={() => setSelectedDate(day)}
                                    >
                                        {day}
                                    </button>
                                ))}
                            </div>

                            {/* Time Slots */}
                            <div className="grid grid-cols-3 gap-3 mb-5">
                                {["09:00 AM", "10:00 AM", "11:00 AM", "01:00 PM", "02:00 PM", "03:00 PM"].map((time) => (
                                    <button
                                        key={time}
                                        className={`px-4 py-2 rounded-full ${selectedTime === time
                                            ? "bg-[#008080] text-white"
                                            : "bg-gray-200 text-[#008080]"
                                            }`}
                                        onClick={() => setSelectedTime(time)}
                                    >
                                        {time}
                                    </button>
                                ))}
                            </div>
                            <div className="flex justify-center">
                                <button
                                    onClick={handleSubmit}
                                    className="text-center bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] rounded-full text-[#008080]  border border-white font-bold px-5 py-2"
                                >
                                    Book An Appointment
                                </button>
                            </div>
                        </div>

                        {/* Popup Confirmation */}
                        {showPopup && (
                            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <div className="bg-white p-5 rounded-lg text-center">
                                    <p className="text-xl font-semibold text-[#008080]">
                                        Appointment successfully booked for {selectedDate} at {selectedTime}.
                                    </p>
                                    <button
                                        className="mt-5 bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] rounded-full text-[#008080] font-bold px-5 py-2"
                                        onClick={closePopup}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Doctordescription;

