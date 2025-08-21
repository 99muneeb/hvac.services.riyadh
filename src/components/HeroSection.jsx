import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSection = () => {
  const slides = [
    {
      title: "Fast & Reliable AC Repair",
      description:
        "We provide 24/7 AC repair services across Riyadh with expert technicians.",
      img: "/assets/hero/installion.jpg",
    },
    {
      title: "Professional Cleaning Service",
      description:
        "Deep cleaning for all AC types, improving performance and air quality.",
      img: "/assets/hero/installion.jpg",
    },
    {
      title: "Installation & Uninstallation",
      description:
        "Expert installation and uninstallation services with guaranteed quality.",
      img: "/assets/hero/installion.jpg",
    },
    {
      title: "Maintenance Contracts",
      description:
        "Weekly visits and immediate issue resolution for 1 or 2-year plans.",
      img: "/assets/hero/installion.jpg",
    },
  ];

  const settings = {
    // dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 10000, // 1 second
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="!flex bg-white overflow-hidden">
            {/* Left Side Text */}
            <div className="w-1/2 p-6 flex flex-col  items-start">
              <h2 className="text-2xl font-bold mb-4">{slide.title}</h2>
              <p className="text-gray-600">{slide.description}</p>
            </div>

            {/* Right Side Image */}
            <div className="w-1/2">
              <img
                src={slide.img}
                alt={slide.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSection;
