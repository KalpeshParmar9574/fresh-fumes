import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
import { Breadcrumbs, Container, Divider, Grid, Link, Typography } from "@mui/material";
import WishListCard from "./WishListCard";


function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}


function Wishlist() {
    

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
      <div role="presentation" onClick={handleClick}>
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Link underline="hover" color="inherit" href="/">
            MUI
          </Link>
          <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link>
          <Typography color="text.primary">Breadcrumbs</Typography>
        </Breadcrumbs>
      </div>
      <Typography
        variant="h4"
        color="inherit"
        sx={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
      >
        Wishlist
      </Typography>
      <Divider />
      {cardArr?.map((card, index) => (
        <WishListCard
          name={card?.name || ""}
          subname={card?.subname || ""}
          price={card?.price || ""}
          offerprice={card?.offerprice || ""}
          img={card?.img || ""}
          rating={card?.rating || "0"}
          ratingcolor={card?.ratingcolor || "#FF5894"}
        />
      ))}
    </Container>
  );
}

const componentConfig = {
  component: Wishlist,
  path: "/wishlist",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;
