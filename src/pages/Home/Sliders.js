import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
export default function Sliders() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={true}
      mousewheel={true}
      keyboard={true}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay,Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      style={{ marginTop: "30px" }}
    >
      <SwiperSlide>
        <img src="assets/images/sliders/slider1.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/images/sliders/slider2.png" alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="assets/images/sliders/slider3.png" alt="" />
      </SwiperSlide>
    </Swiper>
  );
}
