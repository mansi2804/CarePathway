import React, { useState } from "react";

const Contact = ({ closeForm }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    issue: "",
  });

  const [errors, setErrors] = useState({});

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic validation on form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = "Name is required.";
    }
    if (!formData.email) {
      validationErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Email address is invalid.";
    }
    if (!formData.issue) {
      validationErrors.issue = "Please describe the issue you're facing.";
    }

    setErrors(validationErrors);

    // If no errors, proceed with form submission
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully!", formData);
      // Reset form data after submission
      setFormData({ name: "", email: "", issue: "" });
      closeForm(); // Close the form after submission if needed
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50">
      <div className="popup-form relative mt-12">
        <button
          className="absolute top-2 right-4 text-teal-500 text-2xl"
          onClick={closeForm}
        >
          &times;
        </button>
        <form
          className="w-80 md:w-96 space-y-5 p-5 bg-gradient-to-t from-[#48CCCC] to-[#246666] rounded-xl"
          onSubmit={handleSubmit}
        >
          <h1 className="text-xl font-semibold text-center">
            Share Your Thoughts!
          </h1>
          <h4 className="font-semibold text-center">
            "Have a question or feedback? Let us know, and we'll be in touch soon."
          </h4>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="text-red-500">{errors.name}</span>}
          </div>
          <div className="flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="text-red-500">{errors.email}</span>}
          </div>
          <div className="flex flex-col">
            <textarea
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              name="issue"
              placeholder="Describe the issue you're facing"
              value={formData.issue}
              onChange={handleChange}
              rows="4"
            />
            {errors.issue && <span className="text-red-500">{errors.issue}</span>}
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="ml-5 px-5 py-2 rounded-full border border-white bg-gradient-to-t from-[#48CCCC] to-[#F5F5DC] text-[#008080] font-bold"
            >
              Submit
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Contact;
