import React from 'react'
import { styled } from "@mui/material/styles";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  Collapse,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { useState } from "react";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

function AddToCartCard(props) {
  const {
    name,
    subname,
    productName,
    price,
    offerprice,
    img,
    ratingcolor,
    rating,
    totalReviews,
    latestArrival,
    path,
    productweight,
  } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [showCartMenu, setShowCartMenu] = useState(false);
  const handleAgreed = (event) => {
    // console.log("Values", values);
    // setFieldValue(`agreed`, event.target.checked);
  };
  const OpenCartMenu =()=>{
setShowCartMenu(!showCartMenu)
  }
  const plusQuantity = () => {
    setQuantity(quantity + 1);
  };

  const minusQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

    const [quantity, setQuantity] = useState(1);
  return (
    <Card
      style={{
        position: "relative",
        maxWidth: 770,
        marginBottom: "20px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {latestArrival && (
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
            zIndex: "1",
            borderRadius: "inherit",
            textAlign: "center",
          }}
        >
          Latest Arrival
        </div>
      )}
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
          sm={3}
          md={5}
          lg={2}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <img
            src={
              isHovered
                ? img
                  ? img
                  : "/assets/images/products/product2.png"
                : "/assets/images/products/product2.png"
            }
            alt=""
            style={{ width: "100%", height: "100%", paddingLeft: "10px" }}
          />
        </Grid>
        <Grid
          item
          xs={3}
          sm={5}
          md={7}
          lg={2}
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            padding: "0px",
            marginTop: "10px",
          }}
        >
          <div>
            <Typography
              variant="h6"
              sx={{ fontWeight: "700", color: "rgba(0, 0, 0, 1)" }}
            >
              {name ? name : ""}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "auto",
                marginBottom: "10px",
                color: "rgba(0, 0, 0, 1)",
              }}
            >
              {subname ? subname : ""}
            </Typography>
            {/* <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "auto",
                marginBottom: "10px",
              }}
            >
              {productName ? productName : ""}
            </Typography> */}
          </div>
          <div style={{ display: "flex" }}>
            <Typography
              variant="h6"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
                color: "rgba(0, 0, 0, 1)",
                fontWeight: "700",
              }}
            >
              {offerprice ? `$${offerprice}` : ""}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
                color: "rgba(0, 0, 0, 1)",
                marginLeft: "20px",
                textDecoration: "line-through",
              }}
            >
              {price ? `$${price}` : ""}
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
          <div style={{ display: "flex" }}>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0, 0, 0, 1)",
                marginTop: "4px",
                marginRight: "10px",
              }}
            >
              {productweight ? productweight : "50ml"}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "rgba(0, 0, 0, 1)",
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
              {` ${rating}`}
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
              {totalReviews ? `(${totalReviews} reviews)` : `(0 reviews)`}
            </Typography>
          </div>
          <Stack>
            <Typography
              variant="caption"
              color="text.dark"
              sx={{
                marginTop: "2px",
                marginBottom: "2px",
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
          <div
            style={{
              display: "flex",
              marginRight: "auto",
              marginLeft: "10px",
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
          <div style={{display:"flex"}}>
            {showCartMenu ?
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0, 0, 0, 1)",
                  marginTop: "4px",
                  marginRight: "10px",
                }}
              >
                {productweight ? productweight : "50ml"}
              </Typography>
              : ""
            }
            {showCartMenu ?
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0, 0, 0, 1)",
                  marginTop: "4px",
                  marginRight: "10px",
                }}
              >
                {productweight ? productweight : "50ml"}
              </Typography>
              : ""
            }
            {showCartMenu ?
              <Typography
                variant="body1"
                sx={{
                  color: "rgba(0, 0, 0, 1)",
                  marginTop: "4px",
                  marginRight: "10px",
                }}
              >
                {productweight ? productweight : "50ml"}
              </Typography>
              : ""
            }
            <IconButton
              onClick={OpenCartMenu}
              sx={{
                color: "white",
                display:"flex",justifyContent:"end",
                width: "45px",
                marginRight:"20px",
                height: "45px",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                },
              }}
            >
              {!showCartMenu ? (
                <AddRoundedIcon style={{ width: "25px", height: "25px" }} />
              ) : (
                <CloseRoundedIcon style={{ width: "25px", height: "25px" }} />
              )}
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default AddToCartCard;