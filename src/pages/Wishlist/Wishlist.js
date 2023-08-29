import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
import {
  Breadcrumbs,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

function Wishlist() {
  const navigate = useNavigate();
  const cardArr = [
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "20.00",
      offerprice: "20.00",
      img: "/assets/images/products/product1.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews:"233",
      latestArrival:true,
    },
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "211.00",
      offerprice: "322.00",
      img: "/assets/images/products/product2.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews:"233",
      latestArrival:false,
    },
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "122 .00",
      offerprice: "320.00",
      img: "/assets/images/products/product3.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews:"233",
      latestArrival:true,
    },
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "120.00",
      offerprice: "320.00",
      img: "/assets/images/products/product4.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews:"233",
      latestArrival:false,
    },
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "120.00",
      offerprice: "320.00",
      img: "/assets/images/products/product4.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews:"23",
      latestArrival:false,
    },
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "120.00",
      offerprice: "320.00",
      img: "/assets/images/products/product4.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews: "2",
      latestArrival:false,
    },
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "120.00",
      offerprice: "320.00",
      img: "/assets/images/products/product4.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews: "",
      latestArrival:false,
    },
    {
      name: "Jasmin Noir",
      subname: "By Jasmin",
      productName: "eau de toilette",
      price: "120.00",
      offerprice: "320.00",
      img: "/assets/images/products/product4.png",
      ratingcolor: "#FF5894",
      rating: "4.5",
      totalReviews: "1",
      latestArrival:true,
    },
  ];
  return (
    // <Container maxWidth="xl">
    <>
      <div
        role="presentation"
        onClick={handleClick}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Breadcrumbs
          aria-label="breadcrumb"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <Link
            underline="hover"
            color="inherit"
            onClick={() => navigate("/home")}
            sx={{ cursor: "pointer" }}
          >
            Home
          </Link>
          {/* <Link
            underline="hover"
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            Core
          </Link> */}
          <Typography color="text.primary" onClick={()=>navigate("/productlist")} sx={{ cursor: "pointer" }}>Productlist</Typography>
        </Breadcrumbs>
      </div>
      <Typography
        variant="h4"
        color="inherit"
        sx={{ textAlign: "center", marginTop: "10px", marginBottom: "10px" }}
      >
        Wishlist
      </Typography>
      <Divider sx={{ marginBottom: "20px" }} />
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "20px",
          marginTop: "20px",
          padding: "0px",
        }}
      >
        {cardArr?.map((card, index) => (
          <Grid
            item
            xs={4}
            sm={4}
            md={3}
            lg={2}
            key={index}
            sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
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
          </Grid>
        ))}
      </Grid>
      {/* </Container> */}
    </>
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
