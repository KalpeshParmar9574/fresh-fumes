import React, { useEffect, useState } from "react";
import { Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";

function OfferOfTheDay() {
  const [offerDate, setOfferDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setOfferDate(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      container
      spacing={2}
      justifyContent="center"
      alignItems="center"
      style={{
        backgroundColor: "rgb(255, 238, 244)",
        padding: "30px",
      }}
    >
      <Grid
        item
        xs={12}
        sm={4}
        md={6}
        lg={6}
        style={{ display: "flex", alignItems: "center" }}
      >
        <img
          src="/assets/images/offeroftheday/offer.png"
          alt=""
          style={{ width: "100%", maxWidth: "300px", margin: "auto" }}
        />
      </Grid>
      <Grid item xs={12} sm={4} md={6} lg={6}>
        <div style={{ textAlign: "center" }}>
          <Typography
            variant="h2"
            color="inherit"
            gutterBottom
            sx={{ marginBottom: "10px" }}
          >
            Offer Of The Day
          </Typography>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              marginBottom: "10px",
            }}
          >
            <Typography
              variant="h2"
              color="inherit"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "15%",
              }}
            >
              {moment(offerDate).format("DD")}
            </Typography>
            <Typography variant="h2" color="inherit">
              :
            </Typography>
            <Typography
              variant="h2"
              color="inherit"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "15%",
              }}
            >
              {moment(offerDate).format("hh")}
            </Typography>
            <Typography variant="h2" color="inherit">
              :
            </Typography>
            <Typography
              variant="h2"
              color="inherit"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "15%",
              }}
            >
              {moment(offerDate).format("mm")}
            </Typography>
            <Typography variant="h2" color="inherit">
              :
            </Typography>
            <Typography
              variant="h2"
              color="inherit"
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderRadius: "15%",
              }}
            >
              {moment(offerDate).format("ss")}
            </Typography>
          </div>
          <Button
            sx={{
              color: "white",
              backgroundColor: "black",
              marginTop: "20px",
              padding: "10px 20px",
            }}
          >
            <span style={{ marginRight: "10px" }}>Buy Now</span>
            <img src="/assets/images/icons/AddCartIconWhite.png" alt="" />
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default OfferOfTheDay;
