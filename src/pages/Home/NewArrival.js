import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import "./NewArrivalCard.css";

import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";

import { Container, Typography } from "@mui/material";
import NewArrivalCard from "./NewArrivalCard"
import CustomCard from "../../components/CustomCard";

function NewArrival() {
    const cardArr = [
      {
        name: "Jasmin Noir",
        subname: "By Jasmin",
        price: "20.00",
        offerprice: "20.00",
        img: "/assets/images/products/product1.png",
        ratingcolor: "#FF5894",
        rating: "4.5",
      },
      {
        name: "Jasmin Noir",
        subname: "By Jasmin",
        price: "211.00",
        offerprice: "322.00",
        img: "/assets/images/products/product2.png",
        ratingcolor: "#FF5894",
        rating: "4.5",
      },
      {
        name: "Jasmin Noir",
        subname: "By Jasmin",
        price: "122 .00",
        offerprice: "320.00",
        img: "/assets/images/products/product3.png",
        ratingcolor: "#FF5894",
        rating: "4.5",
      },
      {
        name: "Jasmin Noir",
        subname: "By Jasmin",
        price: "120.00",
        offerprice: "320.00",
        img: "/assets/images/products/product4.png",
        ratingcolor: "#FF5894",
        rating: "4.5",
      },
    ];
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h4"
        color="inherit"
        sx={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        New Arrivals
      </Typography>
      <div className="custom-container">
        {cardArr?.map((card, index) => (
          <div
            className="custom-card"
            key={index}
            onClick={() => window.open(`/productdetail/${card?.id}`)}
          >
            <CustomCard
              name={card?.name || ""}
              subname={card?.subname || ""}
              productName={card?.productName || ""}
              price={card?.price || ""}
              offerprice={card?.offerprice || ""}
              img={card?.img || ""}
              rating={card?.rating || "0"}
              ratingcolor={card?.ratingcolor || "#FF5894"}
              totalReviews={card?.totalReviews || "0"}
              latestArrival={card?.latestArrival || false}
            />
          </div>
        ))}
      </div>
    </Container>
  );
}

export default NewArrival;

{/* <Swiper
  slidesPerView={1}
  grabCursor={true}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  spaceBetween={10}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  }}
  modules={[Autoplay, Pagination]}
  className="mySwiper"
>
  {cardArr?.map((card, index) => (
    <SwiperSlide key={index}>
      <NewArrivalCard
        name={card?.name || ""}
        subname={card?.subname || ""}
        price={card?.price || ""}
        offerprice={card?.offerprice || ""}
        img={card?.img || ""}
        rating={card?.rating || "0"}
        ratingcolor={card?.ratingcolor || "#FF5894"}
      />
    </SwiperSlide>
  ))}
</Swiper>; */}