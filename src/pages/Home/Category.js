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
          <div style={{ position: "relative" }}>
            <img src={category.src} alt="" style={{ width: "100%" }} />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "rgb(255 254 254 / 33%)",
                color: "#fff",
                padding: "8px 16px",
                width: "289px",
                height: "162px",
                borderRadius: "4px",
              }}
            >
              <Typography variant="body2" sx={{ fontSize: "42px",paddingTop:"40px" }}>
                {category.label}
              </Typography>
            </Box>
          </div>
        </Grid>
      ))}
    </Grid>
  );
}

export default Category;
