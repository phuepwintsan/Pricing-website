"use client";

import { useState } from "react";

export default function Contact() {

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Loading State
  const [loading, setLoading] = useState(false);

  // Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Form
  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {

        alert("Message sent successfully!");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

      } else {

        alert("Failed to send message");

      }

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    } finally {

      setLoading(false);

    }
  };

  return (
    <section id="contact" className="w-full bg-[#ffffff] py-20">
      <div className="max-w-6xl mx-auto px-12">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl font-semibold text-gray-900">
            Get in Touch
          </h2>

          <div className="mt-2 flex justify-center">
            <div className="w-5 h-[1px] bg-purple-500 rounded-full"></div>
          </div>

          <p className="text-gray-600 mt-4 max-w-3xl mx-auto">
            Have questions or need support? Our team is here to help you find the right solution for your business.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8">

              {/* Card */}
              <div className="bg-white p-8 rounded-2xl 
    border border-gray-200
    shadow-sm
    h-[220px] flex flex-col items-center justify-center text-center">

                <div className="w-12 h-12 mb-4 flex items-center justify-center 
      rounded-full bg-purple-50 border border-purple-200">
                  <img src="phone.svg" className="w-5 h-5 opacity-80" />
                </div>

                <p className="text-sm font-semibold text-gray-900 tracking-wide">
                  PHONE
                </p>

                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  +66 0845875734 <br />
                  +95 9766109458
                </p>
              </div>

              {/* Card */}
              <div className="bg-white p-8 rounded-2xl 
    border border-gray-200
    shadow-sm
    h-[220px] flex flex-col items-center justify-center text-center">

                <div className="w-12 h-12 mb-4 flex items-center justify-center 
      rounded-full bg-purple-50 border border-purple-200">
                  <img src="email.svg" className="w-5 h-5 opacity-80" />
                </div>

                <p className="text-sm mb-1 font-semibold text-gray-900 tracking-wide">
                  EMAIL US
                </p>

                <p className="text-sm mb-7 text-gray-600 leading-relaxed">
                  sales@yatyarzar.com
                </p>
              </div>


              {/* Card */}
              <div className="bg-white p-8 rounded-2xl 
    border border-gray-200
    shadow-sm
    h-[220px] flex flex-col items-center justify-center text-center">

                <div className="w-12 h-12 mb-4 flex items-center justify-center 
      rounded-full bg-purple-50 border border-purple-200">
                  <img src="location.svg" className="w-5 h-5 opacity-80" />
                </div>

                <p className="text-sm mb-1 font-semibold text-gray-900 tracking-wide">
                  LOCATION
                </p>

                <p className="text-sm mb-7 text-gray-600 leading-relaxed">
                  Bangkok, Thailand
                </p>
              </div>

              {/* Card (Why Choose - Single Sentence) */}
              <div className="bg-white p-8 rounded-2xl 
    border border-gray-200
    shadow-sm
    h-[220px] mb-2 flex flex-col items-center justify-center text-center">

                <p className="text-sm mb-7 font-semibold text-gray-900 tracking-wide">
                  WHY CHOOSE US
                </p>

                <p className="text-sm text-gray-600 leading-relaxed max-w-[220px]">
                  We provide fast, reliable support with a dedicated team you can trust.
                </p>

              </div>

            </div>

            {/* Social */}
            {/* <div className="flex flex-col mt-2 md:flex-row md:items-center justify-between gap-4">


  <p className="text-sm text-gray-600">
    Follow our social media
  </p>


  {/* <div className="flex items-center gap-3">
    <a href="#" className="group w-10 h-10 flex items-center justify-center 
      rounded-full bg-white border border-gray-200 
      shadow-[0_2px_8px_rgba(0,0,0,0.05)]
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
      transition duration-200">

      <img src="linkedin.svg" 
        className="w-7 h-7 opacity-70 group-hover:opacity-100" />
    </a>


    <a href="#" className="group w-10 h-10 flex items-center justify-center 
      rounded-full bg-white border border-gray-200 
      shadow-[0_2px_8px_rgba(0,0,0,0.05)]
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
      transition duration-200">

      <img src="whatsapp.svg" 
        className="w-7 h-7 opacity-70 group-hover:opacity-100" />
    </a>


    <a href="#" className="group w-10 h-10 flex items-center justify-center 
      rounded-full bg-white border border-gray-200 
      shadow-[0_2px_8px_rgba(0,0,0,0.05)]
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
      transition duration-200">

      <img src="wechat.svg" 
        className="w-7 h-7 opacity-70 group-hover:opacity-100" />
    </a>


    <a href="#" className="group w-10 h-10 flex items-center justify-center 
      rounded-full bg-white border border-gray-200 
      shadow-[0_2px_8px_rgba(0,0,0,0.05)]
      hover:shadow-[0_6px_20px_rgba(0,0,0,0.08)]
      transition duration-200">

      <img src="telegram.svg" 
        className="w-7 h-7 opacity-70 group-hover:opacity-100" />
    </a>

  </div> 

</div> */}
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-10 rounded-2xl 
  border border-gray-200 
  shadow-[0_10px_30px_rgba(0,0,0,0.06)]">

            {/* Title */}
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              Contact with Yatyarzar
            </h3>

            <form onSubmit={handleSubmit}>
  {/* Full Name */}
  <div>
    <label className="text-sm font-medium text-gray-700">
      Full Name
    </label>

    <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Enter your name"
      required
      className="w-full mt-2 px-4 py-2.5 
      text-sm text-gray-800
      border border-gray-300 rounded-lg 
      outline-none
      focus:ring-2 focus:ring-purple-500/30 
      focus:border-purple-500
      transition"
    />
  </div>

  {/* Email */}
  <div>
    <label className="text-sm font-medium text-gray-700">
      Email Address
    </label>

    <input
      type="email"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="Enter your email"
      required
      className="w-full mt-2 px-4 py-2.5 
      text-sm text-gray-800
      border border-gray-300 rounded-lg 
      outline-none
      focus:ring-2 focus:ring-purple-500/30 
      focus:border-purple-500
      transition"
    />
  </div>

  {/* Phone */}
  <div>
    <label className="text-sm font-medium text-gray-700">
      Phone Number
    </label>

    <input
      type="text"
      name="phone"
      value={formData.phone}
      onChange={handleChange}
      placeholder="Enter your phone number"
      className="w-full mt-2 px-4 py-2.5 
      text-sm text-gray-800
      border border-gray-300 rounded-lg 
      outline-none
      focus:ring-2 focus:ring-purple-500/30 
      focus:border-purple-500
      transition"
    />
  </div>

  {/* Message */}
  <div>
    <label className="text-sm font-medium text-gray-700">
      Message
    </label>

    <textarea
      rows="5"
      name="message"
      value={formData.message}
      onChange={handleChange}
      placeholder="Write your message..."
      required
      className="w-full mt-2 px-4 py-3 
      text-sm text-gray-800
      border border-gray-300 rounded-lg 
      outline-none resize-none
      focus:ring-2 focus:ring-purple-500/30 
      focus:border-purple-500
      transition"
    ></textarea>
  </div>

  {/* Button */}
  <button
    type="submit"
    disabled={loading}
    className="w-full py-3 rounded-lg 
    bg-gradient-to-r from-purple-600 to-purple-700 
    text-white font-medium text-sm
    shadow-[0_6px_20px_rgba(124,58,237,0.3)]
    hover:shadow-[0_10px_30px_rgba(124,58,237,0.4)]
    transition duration-200
    disabled:opacity-70"
  >
    {loading ? "Sending..." : "Send Message"}
  </button>

</form>
          </div>
        </div>
      </div>
    </section>
  );
}