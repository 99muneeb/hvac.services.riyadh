import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function ServiceSelection() {
  const services = [
    {
      title: "Deep Cleaning",
      img: "/assets/Services_Images/foam-cleaning.webp",
    },
    {
      title: "Repair",
      img: "/assets/Services_Images/repair.webp",
    },
    {
      title: "Install & Uninstall",
      img: "/assets/Services_Images/install-uninstall.webp",
    },
    {
      title: "Install & Uninstall",
      img: "/assets/Services_Images/install-uninstall.webp",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="bg-white py-6 px-2 flex flex-col gap-6">
      {/* Title and Rating */}
      <div>
        <h1 className="text-2xl font-bold">AC Cleaning and Repair</h1>
        <p className="text-sm text-gray-600 flex items-center mt-1">
          <span className="text-purple-600 font-bold mr-1">⭐ 4.74</span>
          (22K bookings)
        </p>
      </div>

      {/* Service Selection */}
      <div className="border border-gray-300 rounded-lg p-4 sticky top-20 z-50">
        <h2 className="text-sm font-medium mb-4">Select a service</h2>
        <hr className="border-gray-200 mb-4" />

        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg p-3 cursor-pointer hover:shadow-md"
            >
              <div className="overflow-hidden rounded-lg flex items-center justify-center">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
                />
              </div>
              <p className="mt-2 text-center text-sm font-medium">
                {service.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
