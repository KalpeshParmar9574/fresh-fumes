import React from 'react'
import DashboardLayout from "../../layouts/dashboard";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardArr } from '../CardArr';
import CustomCard from '../../components/CustomCard';
import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from "prop-types";
const imageArr = [
  "/assets/images/products/product1.png",
  "/assets/images/products/product2.png",
  "/assets/images/products/product3.png",
  "/assets/images/products/product1.png",
  "/assets/images/products/product3.png",
  "/assets/images/products/product2.png",
  "/assets/images/products/product1.png",
];

function ProductDetail() {
    const {id} = useParams();
    console.log('params: ', id);
    const [product,setProduct] = useState(null);
    const [showImage, setShowImage] = useState(
      "/assets/images/products/product1.png"
    );
    useEffect(()=>{
        setProduct(CardArr?.find((item)=>item?.id == id))
    })

      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CustomCard
        name={product?.name || ""}
        subname={product?.subname || ""}
        productName={product?.productName || ""}
        price={product?.price || ""}
        offerprice={product?.offerprice || ""}
        img={product?.img || ""}
        rating={product?.rating || "0"}
        ratingcolor={product?.ratingcolor || "#FF5894"}
        totalReviews={product?.totalReviews || "0"}
        latestArrival={product?.latestArrival || false}
      />
      <div>
        <Container maxWidth="lg">
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
            <Grid
              item
              xs={1}
              sm={1}
              md={2}
              lg={2}
              sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
              // onClick={()=>navigate(`/productdetail/${card?.id}`)}
            >
              {imageArr?.map((image) => (
                <img
                  src={image}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                  onClick={() => setShowImage(image)}
                />
              ))}
            </Grid>
            <Grid
              item
              xs={1.5}
              sm={3.5}
              md={5}
              lg={2}
              sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
              // onClick={()=>navigate(`/productdetail/${card?.id}`)}
            >
              <img src={showImage} alt="" />
            </Grid>
            <Grid
              item
              xs={1.5}
              sm={3.5}
              md={5}
              lg={2}
              sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
              // onClick={()=>navigate(`/productdetail/${card?.id}`)}
            >
              <img src={showImage} alt="" />
            </Grid>
          </Grid>
          <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab label="Product Description" {...a11yProps(0)} />
                <Tab label="Product Details" {...a11yProps(1)} />
                <Tab label="Product Review" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              Product Description
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Product Details
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Product Review
            </CustomTabPanel>
          </Box>
        </Container>
      </div>
    </>
  );
}

const componentConfig = {
  component: ProductDetail,
  path: "/productdetail/:id",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}