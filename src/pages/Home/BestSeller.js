import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Autoplay,
  Pagination,
} from "swiper/modules";
import ScrollCarousel from "scroll-carousel-react";
import {CardArr} from "../CardArr"
import { Container, Typography } from "@mui/material";
import BestSellerCard from "./BestSellerCard";
import "./BestSellerCard.css";
import CustomCard from "../../components/CustomCard";
import { useEffect, useRef, useState } from "react";
function BestSeller() {
  const cardArr = [
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      price: "20.00",
      offerprice: "20.00",
      img: "",
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
    // <Container maxWidth="xl">
    <>
      <Typography
        variant="h4"
        color="inherit"
        sx={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        Best Seller
      </Typography>
      <Container maxWidth="lg">
        <ScrollCarousel autoplay={true} autoplaySpeed={1} speed={1}>
          {CardArr.map((card, item) => (
            <div key={item} style={{ width: "280px", marginRight: "20px" }}>
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
                path={card?.id ? card?.id : ""}
              />
            </div>
          ))}
        </ScrollCarousel>
      </Container>

      {/* <div className="custom-container">
        {cardArr?.map((card, index) => (
          <div
            className="custom-card"
            key={index}
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
              path={card?.id ? card?.id : "" }
            />
          </div>
        ))}
      </div> */}
      {/* </Container> */}
    </>
  );
}

export default BestSeller;

//  <Swiper
//   slidesPerView={1}
//   spaceBetween={10}
//   grabCursor={true}
//   loop={true}
//   autoplay={{
//     delay: 2500,
//     disableOnInteraction: false,
//   }}
//   pagination={{
//     clickable: true,
//   }}
//   breakpoints={{
//     640: {
//       slidesPerView: 2,
//       spaceBetween: 20,
//     },
//     768: {
//       slidesPerView: 4,
//       spaceBetween: 40,
//     },
//     1024: {
//       slidesPerView: 4,
//       spaceBetween: 50,
//     },
//   }}
//   modules={[Autoplay, Pagination]}
//   className="mySwiper"
// >
//   {cardArr?.map((card, index) => (
//     <SwiperSlide key={index}>
//       <BestSellerCard
//         name={card?.name || ""}
//         subname={card?.subname || ""}
//         price={card?.price || ""}
//         offerprice={card?.offerprice || ""}
//         img={card?.img || ""}
//         rating={card?.rating || "0"}
//         ratingcolor={card?.ratingcolor || "#FF5894"}
//       />
//     </SwiperSlide>
//   ))}
// </Swiper>; 