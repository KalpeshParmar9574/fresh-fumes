
import { styled } from "@mui/material/styles";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

import { useState } from "react";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function WishListCard(props) {
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
  } = props;
const [isHovered, setIsHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);
    return (
      // <Card sx={{ maxWidth: 270 }}>
      //   <CardHeader />
      //   <CardMedia
      //     component="img"
      //     image="/assets/images/products/product1.png"
      //     alt=""
      //     sx={{
      //       width: "200px",
      //       height: "200px",
      //       marginLeft: "auto",
      //       marginRight: "auto",
      //     }}
      //   />
      //   <CardContent>
      //     <div style={{ display: "flex" }}>
      //       <Typography variant="h6" color="text.secondary">
      //         Jasmin Noir
      //       </Typography>
      //       <Typography
      //         variant="body2"
      //         color="text.secondary"
      //         sx={{
      //           marginTop: "auto",
      //           marginBottom: "auto",
      //           marginLeft: "5px",
      //         }}
      //       >
      //         By Jasmin
      //       </Typography>
      //     </div>
      //     <div style={{ display: "flex" }}>
      //       <Typography variant="h6" color="text.secondary">
      //         $20.00
      //       </Typography>
      //       <Typography
      //         variant="body2"
      //         color="text.secondary"
      //         sx={{
      //           marginTop: "auto",
      //           marginBottom: "auto",
      //           marginLeft: "5px",
      //           textDecoration: "line-through",
      //         }}
      //       >
      //         $20.00
      //       </Typography>
      //     </div>
      //   </CardContent>
      //   <CardActions disableSpacing>
      //     <IconButton aria-label="add to favorites">
      //       <FavoriteIcon />
      //     </IconButton>
      //     <IconButton aria-label="share">
      //       <ShareIcon />
      //     </IconButton>
      //   </CardActions>
      // </Card>
      // <Card
      //   sx={{ position: "relative", maxWidth: 270, marginBottom: "20px" }}
      //   style={{ backgroundColor: "white" }}
      //   onMouseEnter={() => setIsHovered(true)}
      //   onMouseLeave={() => setIsHovered(false)}
      // >
      // <CardHeader />
      <Card
        style={{
          position: "relative",
          maxWidth: 270,
          marginBottom: "20px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {
latestArrival && (

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
            )
                    }
        <CardMedia
          component="img"
          image={img || "/assets/images/products/product1.png"}
          alt=""
          sx={{
            width: "200px",
            height: "240px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10px",
          }}
        />
        <CardContent sx={{ paddingBottom: "8px" }}>
          <div>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ marginBottom: "10px" }}
            >
              {name ? name : ""}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "auto",
                marginBottom: "10px",
              }}
            >
              {subname ? subname : ""}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "auto",
                marginBottom: "10px",
              }}
            >
              {productName ? productName : ""}
            </Typography>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              {offerprice ? `$${offerprice}` : ""}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "auto",
                textDecoration: "line-through",
              }}
            >
              {price ? `$${price}` : ""}
            </Typography>
          </div>
          {isHovered && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-end", // Align icons to the right
                position: "absolute",
                top: "0px",
                bottom: "0px",
                right: 0, // Position the div on the right side
                width: "16%",
                height: "47%",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "8px", // Add padding for spacing
                boxSizing: "border-box",
                marginTop: "auto",
                marginBottom: "auto",
                borderRadius: "9px 0px 0px 9px",
              }}
            >
              <IconButton onClick={() => alert(`Thank You for like`)}>
                <ThumbUpAltRoundedIcon />
              </IconButton>
              <IconButton onClick={() => alert(`Thank You for Comment`)}>
                <CommentRoundedIcon />
              </IconButton>
              <IconButton onClick={() => alert(`Thank You for Send`)}>
                <SendRoundedIcon />
              </IconButton>
            </div>
          )}
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
        </CardContent>
        {/* <CardActions disableSpacing>
        </CardActions> */}
      </Card>
    );
}

export default WishListCard;