import React from "react";
import DashboardLayout from "../../layouts/dashboard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { CardArr } from "../CardArr";
import CustomCard from "../../components/CustomCard";
import CircularProgress from "@mui/material/CircularProgress";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
import "./ProductDetail.css";
import ShareRoundedIcon from "@mui/icons-material/ShareRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import ReviewChart from "./ReviewChart";

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
  const progress = 65;
  const { id } = useParams();
  console.log("params: ", id);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showImage, setShowImage] = useState(
    "/assets/images/products/product1.png"
  );
  console.log("product: ", product);
  useEffect(() => {
    setProduct(CardArr?.find((item) => item?.id == id));
  }, [id]);

  const [value, setValue] = React.useState(0);

  const handleAgreed = (event) => {
    // console.log("Values", values);
    // setFieldValue(`agreed`, event.target.checked);
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
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
            <div style={{ display: "flex" }}>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                  marginRight: "auto",
                }}
              >
                Gucci
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
                <IconButton>
                  <ShareRoundedIcon />
                </IconButton>
              </Typography>
            </div>
            <div style={{ display: "flex", justifyContent: "start" }}>
              <Typography
                variant="h6"
                color="text.dark"
                style={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                  height: "27px",
                  color: "white",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  // weight: "70px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              >
                In Stock
              </Typography>
            </div>
            <Stack>
              <Typography
                variant="h2"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                Gucci Guilty Eau De Toilette(50 ml)
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                $ 298.99
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                inclusive of All Taxes
              </Typography>
            </Stack>
            <Stack>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    marginTop: "4px",
                    // marginBottom: "auto",
                  }}
                >
                  <StarRoundedIcon
                    sx={{
                      color: "#FF5894",
                      width: "20px",
                      height: "20px",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  4.5
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "10px",
                  }}
                >
                  {true ? `(233 reviews)` : `(0 reviews)`}
                </Typography>
              </div>
            </Stack>
            <Stack>
              <Typography
                variant="h6"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                Sold by: FRESH FUMES LLP
              </Typography>
            </Stack>
            <Stack>
              <Typography
                variant="caption"
                color="text.dark"
                sx={{
                  marginTop: "10px",
                  marginBottom: "10px",
                  fontWeight: "400",
                }}
              >
                Free shipping available
              </Typography>
            </Stack>
            <Stack>
              <FormControl>
                <FormControlLabel
                  control={<Checkbox name="agreed" onChange={handleAgreed} />}
                  label="Pack for Gift"
                />
                {/*                       
                      {(touched?.agreed && errors?.agreed) && (
                        <FormHelperText>{errors?.agreed}</FormHelperText>
                      )} */}
              </FormControl>
            </Stack>
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: "auto" }}>
                <Typography
                  variant="h6"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  Product Quantity
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  marginLeft: "auto",
                  marginRight: "10px",
                }}
              >
                <IconButton onClick={minusQuantity}>
                  <RemoveRoundedIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                    borderRadius: "10px",
                    width: "45px",
                    textAlign: "center",
                  }}
                >
                  {quantity}
                </Typography>
                <IconButton onClick={plusQuantity}>
                  <AddRoundedIcon />
                </IconButton>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "10px",
              }}
            >
              <Button
                style={{
                  color: "white",
                  backgroundColor: "rgba(0, 0, 0, 0.8)",
                  marginTop: "20px",
                  padding: "10px 20px",
                  marginRight: "20px",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
              >
                <span style={{ marginRight: "10px" }}>Add to Cart</span>
                <img src="/assets/images/icons/AddCartIconWhite.png" alt="" />
              </Button>
              <Button
                style={{
                    color: "black",
                  backgroundColor: "white",
                  marginTop: "20px",
                  padding: "10px 20px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                  "&:hover": {
                    backgroundColor: "rgba(0, 0, 0, 0.8)",
                  },
                }}
              >
                Buy Now
              </Button>
            </div>
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
              Customer Review and Rating
            </Typography>
            <div style={{ display: "flex" }}>
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
                  Average Rating
                </Typography>
                <Typography
                  variant="h2"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  4.3
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
                  Rating's
                </Typography>
              </div>
              <div style={{ marginLeft: "20px" }}>
                <ReviewChart value={progress} />
                <Typography
                  variant="h6"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  250 out of 500 reviews
                </Typography>
              </div>
              <div></div>
            </div>
            <div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <img
                  src=""
                  alt=""
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginRight: "8px",
                  }}
                />
                <Typography
                  variant="h6"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  Customer Name
                </Typography>
              </div>
              <div>
                <Typography
                  variant="body2"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  This product manufacture and quality are good and its
                  fragrance very cool and fresh all of this are great product.
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    marginTop: "4px",
                    // marginBottom: "auto",
                  }}
                >
                  <StarRoundedIcon
                    sx={{
                      color: "#FF5894",
                      width: "20px",
                      height: "20px",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  4.5
                </Typography>
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "10px",
                  }}
                >
                  {totalReviews ? `(${totalReviews} reviews)` : `(0 reviews)`}
                </Typography> */}
              </div>
              <div style={{ display: "flex", marginTop: "20px" }}>
                <img
                  src=""
                  alt=""
                  style={{
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "35px",
                    height: "35px",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginRight: "8px",
                  }}
                />
                <Typography
                  variant="h6"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  Customer Name
                </Typography>
              </div>
              <div>
                <Typography
                  variant="body2"
                  color="text.dark"
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    fontWeight: "400",
                  }}
                >
                  This product manufacture and quality are good and its
                  fragrance very cool and fresh all of this are great product.
                </Typography>
              </div>
              <div style={{ display: "flex" }}>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    marginTop: "4px",
                    // marginBottom: "auto",
                  }}
                >
                  <StarRoundedIcon
                    sx={{
                      color: "#FF5894",
                      width: "20px",
                      height: "20px",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  />
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  4.5
                </Typography>
                {/* <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "10px",
                  }}
                >
                  {totalReviews ? `(${totalReviews} reviews)` : `(0 reviews)`}
                </Typography> */}
              </div>
              <div style={{ textAlign: "end" }}>
                <Button>All Reviews</Button>
              </div>
            </div>
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
