import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ProductDetailCarousel.css"; // Import the custom CSS file

const ProductDetailCarousel = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
      <div style={{display:"flex"}}>
      <div className="small-images">
        {product.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product Thumbnail ${index}`}
            onClick={() => handleImageClick(index)}
            className={index === currentImageIndex ? "active" : ""}
          />
        ))}
      </div>
      <div className="large-image">
        <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          showIndicators={false}
          selectedItem={currentImageIndex}
        >
          {product.images.map((image, index) => (
            <div key={index} style={{border:"1px solid black",padding:"30px"}}>
              <img src={image} alt={`Product ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductDetailCarousel;
