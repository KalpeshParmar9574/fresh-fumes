// src/components/ReviewBars.js
import React, { useState, useEffect } from "react";
import "./CustomerReviews.css";
import StarRoundedIcon from '@mui/icons-material/StarRounded';

const CustomerReviews = ({ customerReviews }) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    // Delay the animation by a short period (e.g., 500ms) after the component mounts.
    const animationTimeout = setTimeout(() => {
      setShouldAnimate(true);
    }, 500);

    // Clear the timeout when the component unmounts to prevent memory leaks.
    return () => clearTimeout(animationTimeout);
  }, []);

  const maxCount = Math.max(...customerReviews.map((rating) => rating.count));

  const renderBars = () => {
    return customerReviews.map((rating) => (
      <div
        className={`review-bar ${shouldAnimate ? "animate" : ""}`}
        key={rating.rating}
      >
        <div className="rating-label" style={{ display: "flex" }}>
          <div>
            <StarRoundedIcon
              sx={{ width: "20px", height: "20px", color: "#FF5894" }}
            />
          </div>
          <div style={{ marginTop: "auto", marginBottom: "auto" }}>
            {" "}
            {rating.rating} Star
          </div>
        </div>
        <div className="bar-container">
          <div
            className="bar"
            style={{
              width: shouldAnimate
                ? `${(rating.count / maxCount) * 100}%`
                : "0%", // Start from 0 and smoothly transition
              transition: shouldAnimate ? "width 1s ease-in-out" : "none",
            }}
          ></div>
        </div>
        <div className="count-label">{rating.count} Reviews</div>
      </div>
    ));
  };

  return <div className="review-bars">{renderBars()}</div>;
};

export default CustomerReviews;
