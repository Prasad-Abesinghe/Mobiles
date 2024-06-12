"use client";
import Phone from "./Phone";

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

const PopularPhoneCarousel = ({ phones }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        960: { slidesPerView: 3 },
        1440: { slidesPerView: 4 },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="popular-phone-slider mb-8"
    >
      {phones.map((phone) => {
        return (
          <SwiperSlide key={phone._id}>
            <Phone phone={phone} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PopularPhoneCarousel;
