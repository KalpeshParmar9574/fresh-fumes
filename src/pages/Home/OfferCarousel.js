import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./swiper.css";
import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
export default function OfferCarousel() {
  return (
    <Swiper
      // cssMode={true}
      // navigation={false}
      // pagination={false}
      // mousewheel={true}
      // keyboard={true}
      // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img src="assets/images/freshfumes/offer.png" alt=""/>
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/images/freshfumes/offer.png" alt=""/>
      </SwiperSlide>
    </Swiper>
  );
}
