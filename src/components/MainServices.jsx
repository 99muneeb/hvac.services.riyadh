import React from "react";
import UCPromiseCard from "./UCPromiseCard";

const MainServices = () => {
  const services = [
    {
      title: "Freon refill",
      rating: 4.66,
      reviews: 149,
      price: "SAR250",
      duration: "1 hr 30 mins",
      details: [
        "Gas leak fix and Freon recharge included",
        "American brands Freon used",
      ],
      img: "/assets/Services_Images/DeepCleaning.webp",
    },
    {
      title: "Deep Cleaning",
      rating: 4.85,
      reviews: 200,
      price: "SAR300",
      duration: "2 hrs",
      details: [
        "Foam cleaning for all AC types",
        "Improves cooling & air quality",
      ],
      img: "/assets/hero/installion.jpg",
    },
  ];

  return (
    <div className="w-full py-10 flex gap-x-4">
      <div className="w-[70%] flex flex-col gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex bg-white rounded-lg shadow-md border border-gray-300 overflow-hidden relative"
          >
            {/* Left Side Content */}
            <div className="w-3/4 p-4 flex flex-col justify-between">
              <h2 className="text-lg font-semibold">{service.title}</h2>

              {/* Rating, Price & Duration */}
              <div className="flex items-center text-sm text-gray-500 my-2">
                <span className="text-purple-600 font-semibold">
                  ⭐ {service.rating}
                </span>
                <span className="ml-1">({service.reviews} reviews)</span>
              </div>
              <p className="font-bold text-gray-900">
                {service.price}
                <span className="font-normal text-sm text-gray-500 ml-2">
                  • {service.duration}
                </span>
              </p>

              {/* Bullet Points */}
              <ul className="mt-3 space-y-1 text-sm text-gray-600 list-disc pl-5">
                {service.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>

              {/* View details link */}
              <a
                href="#"
                className="text-purple-600 text-sm font-medium mt-3 hover:underline"
              >
                View details
              </a>
            </div>

            {/* Right Side Image + Add Button */}
            <div className="w-1/4 p-3 flex flex-col items-center justify-between">
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-24 object-cover rounded-lg"
              />
              <button className="bg-purple-600 text-white text-sm px-4 py-1 rounded-md mt-3 hover:bg-purple-700">
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="1/4">
        <UCPromiseCard />
      </div>
    </div>
  );
};

export default MainServices;
