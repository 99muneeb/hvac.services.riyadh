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
      title: "maintenance or repair",
      img: "/assets/Services_Images/repair.webp",
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
    slidesToShow: 3, // show 3 cards by default
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <>
      {/* Left Side (25%) */}
      <div className="bg-white p-4">
        <h2 className="text-lg font-semibold mb-4">Choose a Service</h2>
        <hr className="border-gray-300 mb-4" />

        <Slider {...settings}>
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white rounded-lg shadow p-3 hover:shadow-md cursor-pointer"
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 object-cover rounded"
              />
              <p className="mt-2 text-center text-sm font-medium">
                {service.title}
              </p>
            </div>
          ))}
        </Slider>
      </div>
      {/* <div className="bg-white rounded-lg border p-4 shadow"></div> */}
    </>
  );
}
