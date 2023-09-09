import React from "react";
import { Grid, Typography, Box } from "@mui/material";

function Category() {
  const categoryArr = [
    { src: "/assets/images/freshfumes/man.png", label: "FOR MAN" },
    { src: "/assets/images/freshfumes/women.png", label: "FOR WOMEN" },
    { src: "/assets/images/freshfumes/unisex.png", label: "UNISEX" },
  ];

  return (
    <Grid
      container
      spacing={{ xs: 0, md: 0 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      alignItems="center"
      justifyContent="center"
    >
      {categoryArr?.map((category, index) => (
        <Grid
          item
          xs={4}
          sm={2.66666}
          md={4}
          lg={2}
          key={index}
          sx={{ paddingLeft: "0px", margin: "0px", position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              overflow: "hidden",
            }}
            // onMouseEnter={(e) => {
            //   e.currentTarget.querySelector(".zoom-box").style.width = "446px";
            //   e.currentTarget.querySelector(".zoom-box").style.height = "333px";
            //   e.currentTarget.querySelector(".label").style.fontSize = "60px";
            //   e.currentTarget.querySelector(".label").style.transition =
            //     "font-size 0.3s ease-in-out";
            //   e.currentTarget.querySelector(".zoom-box").style.transition =
            //     "transform 0.6s, width 0.6s, height 0.6s";
            //   e.currentTarget.querySelector(
            //     ".zoom-box"
            //   ).style.transitionTimingFunction =
            //     "cubic-bezier(0.25, 0.1, 0.25, 1.3)";
            // }}
            // onMouseLeave={(e) => {
            //   e.currentTarget.querySelector(".zoom-box").style.width = "289px";
            //   e.currentTarget.querySelector(".zoom-box").style.height = "162px";
            //   e.currentTarget.querySelector(".label").style.fontSize = "42px";
            //   e.currentTarget.querySelector(".label").style.transition =
            //     "font-size 0.3s ease-in-out";
            //   e.currentTarget.querySelector(".zoom-box").style.transition =
            //     "transform 0.6s, width 0.6s, height 0.6s";
            //   e.currentTarget.querySelector(
            //     ".zoom-box"
            //   ).style.transitionTimingFunction =
            //     "cubic-bezier(0.25, 0.1, 0.25, 0.75)";
            // }}
          >
            <img src={category.src} alt="" style={{ width: "100%" }} />
            {/* <Box
              className="zoom-box"
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgb(255 254 254 / 33%)",
                color: "#fff",
                width: "289px",
                height: "162px",
                borderRadius: "4px",
                transition: "transform 0.6s, width 0.6s, height 0.6s",
                display: "flex",
                alignItems: "center", // Center vertically
                justifyContent: "center", // Center horizontally
              }}
            >
              <Typography
                variant="body2"
                className="label"
                sx={{ fontSize: "42px" }}
              >
                {category.label}
              </Typography>
            </Box> */}
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Category;
