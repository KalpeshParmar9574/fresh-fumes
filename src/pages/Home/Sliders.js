import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./swiper.css";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/pagination";
export default function Sliders() {
  return (
    <Swiper
      cssMode={true}
      navigation={true}
      pagination={false}
      mousewheel={true}
      keyboard={true}
      modules={[Navigation, Pagination, Mousewheel, Keyboard]}
      className="mySwiper"
      style={{ marginTop: "30px"}}
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
