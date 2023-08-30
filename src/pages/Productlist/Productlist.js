import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
import {
  Breadcrumbs,
  Card,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Paper,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./swiper.css";
import "swiper/css";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import BasicMenu from "./Menu";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

function Productlist() {
  const navigate = useNavigate();
  const [sortBy,setSortBy] = React.useState(false);
  const [sortByMenu,setSortByMenu] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event,bool) => {
     setAnchorEl(event.currentTarget);
     if(bool){
      setSortBy(true);
      setSortByMenu(true);
    }else{
       setSortBy(false);
       setSortByMenu(false);
     }
   };
   const handleClose = () => {
     setAnchorEl(null);
   };
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
      totalReviews: "233",
      latestArrival: true,
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
      totalReviews: "233",
      latestArrival: false,
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
      totalReviews: "233",
      latestArrival: true,
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
      totalReviews: "233",
      latestArrival: false,
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
      totalReviews: "23",
      latestArrival: false,
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
      latestArrival: false,
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
      latestArrival: false,
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
      latestArrival: true,
    },
  ];
  return (
    <>
      {/* <Container maxWidth="sm"> */}
      <Container maxWidth="xl">
        <Swiper
          // cssMode={true}
          // navigation={false}
          // pagination={false}
          // mousewheel={true}
          // keyboard={true}
          // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          modules={[Autoplay]}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/assets/images/productlist/productlistoffer.png"
              alt=""
              style={{ width: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/productlist/productlistoffer.png"
              alt=""
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
        <Card sx={{ padding: "20px", marginBottom: "20px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="center"
            justifyContent="start"
          >
            <Grid
              item
              xs={4}
              sm={2}
              md={2}
              lg={2}
              sx={{
                paddingLeft: "0px",
                margin: "0px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Typography
                variant="body2"
                color="inherit"
                sx={{
                  textAlign: "left",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                {`Show All ${cardArr?.length} Products`}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={2}
              md={7}
              lg={2}
              sx={{
                paddingLeft: "0px",
                margin: "0px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Typography
                variant="body2"
                color="inherit"
                sx={{
                  textAlign: "center",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                Product List
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={2}
              md={3}
              lg={2}
              sx={{
                paddingLeft: "0px",
                margin: "0px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E5E5E5",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  borderRadius: "10px",
                  display: "flex",
                }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Typography
                  variant="body1"
                  color="inherit"
                  sx={{
                    textAlign: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "20px",
                  }}
                >
                  Sort By
                </Typography>
                {!sortBy ? (
                  <IconButton
                    sx={{ marginLeft: "auto", marginRight: "20px" }}
                    onClick={(e) => handleClick(e, true)}
                  >
                    <AddRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{ marginLeft: "auto", marginRight: "20px" }}
                    // id="basic-button"
                    // aria-controls={open ? "basic-menu" : undefined}
                    // aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                    onClick={(e) => handleClick(e, false)}
                  >
                    <RemoveRoundedIcon />
                  </IconButton>
                )}
              </div>
            </Grid>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{width: "330px"}}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
          </Grid>
        </Card>
      </Container>
      <BasicMenu />
      {/* {sortByMenu ? (
        <div
          style={{
            position: "absolute",
            top: "-25px",
            left: "-6px",
            width: "150px",
            height: "51px",
            marginTop: "auto",
            marginBottom: "auto",
            padding: "26px 15px 7px 15px",
            backgroundColor: "rgba(255, 88, 148, 0.5)",
            color: "black",
            zIndex: "1000",
            borderRadius: "inherit",
            textAlign: "center",
          }}
        >
          Latest Arrivalsdebgdffdgsfg
        </div>
      ) : (
        ""
      )} */}
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
  component: Productlist,
  path: "/productlist",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;
