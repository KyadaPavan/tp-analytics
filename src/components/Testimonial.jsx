import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Ben Toalson",
    title: "Cofounder, Makerpad",
    text: "Came at an absolutely crucial time. Saved our community and has been integral in allowing us to grow. The team is so responsive and the way they have built the platform is so intuitive that the platform gets better every week.",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    name: "Gesche Haas",
    title: "Dreamers & Doers",
    text: "We’ve gotten invaluable and truly life-changing input from the community. Especially as a community builder myself, I’m so grateful for the phenomenal community Circle has put together to support us and make our user experience an extraordinary one!",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    name: "Pat Flynn",
    title: "Smart Passive Income",
    text: "Our members are so impressed. It’s intuitive. It’s clean. It’s distraction free. I’m so glad we made this decision.",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    name: "Caroline Guntur",
    title: "OrganizingPhotos.net, TeachingPhotoOrganizers.com",
    text: "Circle embodies what many other platforms miss – community! I have been blown away by the generosity of my fellow course creators who have shared their setups and tips, and I instantly felt like I was a part of the group. That, and the fact that we have such great access to the support team makes Circle hands down the best community platform on the market.",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
  {
    name: "Melissa Tal",
    title: "Unival",
    text: "The key here is that Circle brings a technical way to centralize and see community. It’s offering growth by shrinking! A consolidation of tech, location in exchange for the potential for better connection and servability.",
    image: "https://via.placeholder.com/50", // Replace with actual image URL
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="px-4 py-12 mx-auto ">
      <h2 className="mb-8 text-4xl font-bold text-center">
        Loved by thousands of creators and brands
      </h2>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-4">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <p className="mb-4 text-gray-700">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  className="w-10 h-10 mr-4 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500">{testimonial.title}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonial;
