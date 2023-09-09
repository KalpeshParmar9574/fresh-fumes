import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductDetailCarousel.css"; // Import the custom CSS file
import { Grid } from "@mui/material";

const ProductDetailCarousel = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
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
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
          padding: "0px",
          // overflowY: "auto", // Add overflow-y property for responsiveness
          // maxHeight: "300px",
        }}
        // onClick={()=>navigate(`/productdetail/${card?.id}`)}
        className="small-images"
      >
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Thumbnail ${index}`}
            onClick={() => handleImageClick(index)}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </Grid>
      <Grid
        item
        xs={3}
        sm={7}
        md={10}
        lg={2}
        sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
        // onClick={()=>navigate(`/productdetail/${card?.id}`)}
        className="large-image"
      >
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={currentImageIndex}
        >
          {product.images.map((image, index) => (
            <div
              key={index}
              style={{ border: "1px solid black", padding: "30px" }}
            >
              <img src={image} alt={`Product ${index}`} />
            </div>
          ))}
        </Carousel>
      </Grid>
    </Grid>
  );
};

export default ProductDetailCarousel;
