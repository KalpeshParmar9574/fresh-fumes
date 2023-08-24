import React from "react";
import { Grid } from "@mui/material";

function Category() {
  const categoryArr = [
    "/assets/images/freshfumes/man.png",
    "/assets/images/freshfumes/women.png",
    "/assets/images/freshfumes/unisex.png",
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
          sx={{ paddingLeft: "0px", margin: "0px" }}
        >
          <img src={category} alt="" />
        </Grid>
      ))}
    </Grid>
  );
}

export default Category;
