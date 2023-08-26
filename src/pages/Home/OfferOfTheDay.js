import { Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function OfferOfTheDay() {
    const [offerDate,setOfferDate] = useState(new Date())
    useEffect(() => {
      setInterval(() => setOfferDate(new Date()), 1000);
    }, [new Date()]);
    return (
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        alignItems="center"
        justifyContent="center"
        sx={{
          maxHeight: "550px",
          backgroundColor: "rgb(255, 238, 244)",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Grid item xs={4} sm={4} md={6} lg={2}>
          <img src="/assets/images/offeroftheday/offer.png" alt="" />
        </Grid>
        <Grid item xs={4} sm={4} md={6} lg={2}>
          <div>
            <Typography
              variant="h2"
              color="inherit"
              sx={{
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
              }}
            >
              Offer Of The Days
            </Typography>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              alignItems="center"
              justifyContent="center"
              // sx={{
              //   maxHeight: "550px",
              //   backgroundColor: "rgb(255, 238, 244)",
              //   marginTop: "30px",
              //   marginBottom: "30px",
              // }}
            >
              <Grid item xs={4} sm={4} md={6} lg={2}>
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    {offerDate.getDay()}
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    {offerDate.getHours()}
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    {offerDate.getMinutes()}
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                    }}
                  >
                    {offerDate.getSeconds()}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Button
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
              }}
            >
              <span style={{ marginRight: "10px" }}>Buy Now</span>
              <img src="/assets/images/icons/AddCartIcon.png" alt="" />
            </Button>
          </div>
        </Grid>
      </Grid>
    );
}

export default OfferOfTheDay;