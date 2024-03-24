/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

const Banner = () => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const sliders = [
    {
      img: "https://images.pexels.com/photos/3735739/pexels-photo-3735739.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Improve quality of life",
      des: "Many healthcare organizations aim to improve the quality of life for their patients. This can involve providing preventive care, treating chronic conditions, and helping patients manage their health.",
    },
    {
      img: "https://images.pexels.com/photos/3735707/pexels-photo-3735707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Provide affordable care",
      des: "Access to affordable healthcare is a major concern for many people. Some healthcare organizations focus on providing quality care at an affordable price.",
    },
    {
      img: "https://images.pexels.com/photos/3735745/pexels-photo-3735745.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Focus on patients",
      des: "The patient should always be at the center of care. This means providing care that is respectful, compassionate, and patient-centered.",
    },
    {
      img: "https://images.pexels.com/photos/3786157/pexels-photo-3786157.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Advance health",
      des: "Healthcare organizations also play a role in advancing health research and developing new treatments.",
    },
    {
      img: "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Serve the community",
      des: "Many healthcare organizations see themselves as part of a larger community and strive to improve the health of the population they serve. This can involve providing outreach programs, education, and screenings.",
    },
  ];
  const prevSlider = () =>
    setCurrentSlider((currentSlider: any) =>
      currentSlider === 0 ? sliders.length - 1 : currentSlider - 1
    );
  const nextSlider = () =>
    setCurrentSlider((currentSlider: any) =>
      currentSlider === sliders.length - 1 ? 0 : currentSlider + 1
    );
  const isSmallScreen = window.innerWidth <= 768;

  return (
    <div
      className="w-full h-60 sm:h-96 md:h-[590px] flex flex-col xl:flex-row items-center justify-center gap-5 lg:gap-10 relative bg-cover before:absolute before:bg-black/50 before:inset-0 transform duration-1000 ease-linear z-30 overflow-hidden"
      style={{
        backgroundImage: `url(${
          currentSlider === 0
            ? sliders[sliders.length - 1].img
            : sliders[currentSlider - 1].img
        })`,
      }}
    >
      {/* arrow */}
      <div className="absolute bottom-1/4 flex gap-3 z-50 px-5">
        {/* arrow left */}
        <button
          onClick={prevSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
        {/* arrow right */}
        <button
          onClick={nextSlider}
          className="flex justify-center items-center hover:bg-white/30 rounded-full w-6 h-6 md:w-8 md:h-8"
        >
          <svg
            viewBox="0 0 1024 1024"
            className="w-4 h-4 md:w-6 md:h-6 icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            transform="rotate(180)"
          >
            <g strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                fill="#0095FF"
                d="M685.248 104.704a64 64 0 010 90.496L368.448 512l316.8 316.8a64 64 0 01-90.496 90.496L232.704 557.248a64 64 0 010-90.496l362.048-362.048a64 64 0 0190.496 0z"
              ></path>
            </g>
          </svg>
        </button>
      </div>
      {/* text container here */}
      <div className="w-1/2 px-4 left-0 absolute drop-shadow-lg text-white rounded-lg lg:ms-10">
        <h1 className="lg:text-5xl text-lg mb-3">
          {sliders[currentSlider].title}
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg">
          {sliders[currentSlider].des}
        </p>
      </div>
      {/* slider container */}
      <div className="w-1/2 ml-auto overflow-hidden  absolute -right-5 lg:-right-16 z-50 px-4 py-10">
        <div
          className="ease-linear duration-300 flex gap-4 items-center"
          style={{
            transform: `translateX(-${
              currentSlider * (isSmallScreen ? 98 : 200)
            }px)`,
          }}
        >
          {/* sliders */}
          {sliders.map((slide, inx) => (
            <img
              key={inx}
              src={slide.img}
              className={`h-[180px] sm:h-[200px] lg:h-[320px] min-w-[90px] lg:min-w-[184px] ${
                currentSlider - 1 === inx ? "scale-0" : "scale-100 delay-500"
              } drop-shadow-lg shadow-lg shadow-black bg-black/50 duration-300 rounded-lg z-50`}
              alt={slide.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
