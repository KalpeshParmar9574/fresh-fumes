import React from 'react'
import DashboardLayout from "../../layouts/dashboard";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { CardArr } from '../CardArr';
import CustomCard from '../../components/CustomCard';
import { Box, Container, Grid, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from "prop-types";
import "./ProductDetail.css";
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
      console.log('product: ', product);
      useEffect(() => {
      setProduct(CardArr?.find((item) => item?.id == id));
    }, [id]);

      const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
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
            {/* <Box sx={{ borderBottom: 1, borderColor: "divider" }}> */}
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons
              allowScrollButtonsMobile
              aria-label="scrollable force tabs example"
            >
              <Tab label="Product Description" {...a11yProps(0)} />
              <Tab label="Product Details" {...a11yProps(1)} />
              <Tab label="Product Review" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <div>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                {product?.name ? (
                  <>
                    <span style={{ fontWeight: "700" }}>Brand Name:- </span>
                    <span>{product?.name}</span>
                  </>
                ) : (
                  ""
                )}
              </Typography>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                {product?.name ? (
                  <>
                    <span style={{ fontWeight: "700" }}>Product Size:- </span>
                    <span>50ml</span>
                  </>
                ) : (
                  ""
                )}
              </Typography>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                {product?.name ? (
                  <>
                    <span style={{ fontWeight: "700" }}>Fragrance:- </span>
                    <span>Rose</span>
                  </>
                ) : (
                  ""
                )}
              </Typography>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                {product?.name ? (
                  <>
                    <span style={{ fontWeight: "700" }}>
                      Special Feature:-{" "}
                    </span>
                    <span>{product?.name}</span>
                  </>
                ) : (
                  ""
                )}
              </Typography>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "700",
                }}
              >
                {product?.name ? "About this Product" : ""}
              </Typography>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                  marginLeft: "20px",
                }}
              >
                {product?.name ? (
                  <>
                    <ul>
                      <li>
                        Lorem ipsum dolor sit amet consectetur. Arcu porta
                        quisque morbi malesuada sed massa. Massa etiam platea
                        pellentesque ipsum tempus. In iaculis in velit id sed
                        fermentum feugiat scelerisque nisl.
                      </li>
                      <li>
                        Auctor tortor fermentum quisque mi viverra. Non mollis a
                        magna eu nunc integer id. Interdum dignissim purus
                        pellentesque sed.
                      </li>
                      <li>
                        Pharetra tortor egestas quis integer odio est dictum
                        neque. Elit tempus sed ac laoreet tincidunt nullam.
                        Iaculis urna proin libero ac leo ornare nisi.
                      </li>
                      <li>
                        Ultricies cursus turpis nec odio et. Urna in eget
                        elementum imperdiet nec sit at vulputate. In odio
                        feugiat vel volutpat vestibulum.
                      </li>
                      <li>
                        Fermentum in ac ultrices rutrum facilisi scelerisque.
                        Dignissim varius sed justo pharetra malesuada eget
                        posuere.
                      </li>
                    </ul>
                  </>
                ) : (
                  ""
                )}
              </Typography>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Product Details
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Typography
              variant="h6"
              color="text.dark"
              sx={{
                marginTop: "10px",
                marginBottom: "10px",
                fontWeight: "400",
              }}
            >
              {product?.name
                ? " Gucci was founded in Florence, Tuscany, in 1921 by Guccio Gucci.Under the leadership of Aldo Gucci (Guccio's son), Gucci became a world-renowned brand and an icon of the Italian Dolce Vita era. The product line includes bags, ready-to-wear, footwear,accessories, fragrances, and home furnishings. Influential,innovative, and progressive, Gucci is reinventing an utterly contemporary approach to fashion. The brand has redefined luxury for the 21st century and cemented its position as one of the world's most coveted fashion houses. "
                : ""}
            </Typography>
          </CustomTabPanel>
        </Box>
        <Typography
          variant="h4"
          color="text.dark"
          sx={{
            marginTop: "10px",
            marginBottom: "20px",
            fontWeight: "400",
          }}
        >
          Related Product
        </Typography>
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
          {CardArr?.map((card, index) => (
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
      </Container>
    </div>
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