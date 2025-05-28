import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const sponsors = [
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_31438_20220614_doddipallivasudeva@gmail.com_spnsor/",
    alt: "vasu deva",
    title: "vasu deva",
  },
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_13490_20200115_suriyabhai6564@gmail.com_spnsor/",
    alt: "Thandavapura",
    title: "Thandavapura",
  },
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_16572_20200216_ajaykumar48231@gmail.com_spnsor/",
    alt: "Ajay Kumar",
    title: "Ajay Kumar",
  },
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_23059_20201012_chsridhar90009@gmail.com_spnsor/",
    alt: "sridhar",
    title: "sridhar",
  },
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_31438_20220614_doddipallivasudeva@gmail.com_spnsor/",
    alt: "vasu deva",
    title: "vasu deva",
  },
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_13490_20200115_suriyabhai6564@gmail.com_spnsor/",
    alt: "Thandavapura",
    title: "Thandavapura",
  },
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_16572_20200216_ajaykumar48231@gmail.com_spnsor/",
    alt: "Ajay Kumar",
    title: "Ajay Kumar",
  },
  {
    imgSrc:
      "https://smartcookie.in/core//image_sponsor/sponsor_23059_20201012_chsridhar90009@gmail.com_spnsor/",
    alt: "sridhar",
    title: "sridhar",
  },
  // Add other sponsors...
];

const SponsorsSection = () => {
  return (
    <section id="sponsor" className="client-area no-padding py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-semibold">Our Sponsors</h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={5}
          loop={true}
          autoplay={{ delay: 500, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 },
            640: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4, spaceBetween: 25 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
          style={{ paddingBottom: "1rem" }}
        >
          {sponsors.map(({ imgSrc, alt, title }, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <img
                src={imgSrc}
                alt={alt}
                title={title}
                className="max-h-20 object-contain"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default SponsorsSection;
