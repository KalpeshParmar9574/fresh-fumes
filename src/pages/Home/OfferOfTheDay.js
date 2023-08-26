import { Button, Grid, Typography } from "@mui/material";
import moment from "moment/moment";
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
        style={{
          maxHeight: "550px",
          backgroundColor: "rgb(255, 238, 244)",
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Grid
          item
          xs={4}
          sm={4}
          md={6}
          lg={2}
          sx={{ marginLeft: "auto", marginRight: "auto" }}
        >
          <img
            src="/assets/images/offeroftheday/offer.png"
            alt=""
            style={{ marginLeft: "auto", marginRight: "auto" }}
          />
        </Grid>
        <Grid item xs={4} sm={4} md={6} lg={2}>
          <div>
            <Typography
              variant="h2"
              color="inherit"
              sx={{
                textAlign: "left",
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
              justifyContent="start"
            >
              <Grid item xs={4} sm={4} md={6} lg={2}>
                <div style={{ display: "flex", justifyContent: "start" }}>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "10px",
                      borderRadius: "15%",
                    }}
                  >
                    {moment(offerDate).format("DD")}
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                      padding: "10px",
                    }}
                  >
                    :
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "10px",
                      borderRadius: "15%",
                    }}
                  >
                    {moment(offerDate).format("hh")}
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                      padding: "10px",
                    }}
                  >
                    :
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "10px",
                      borderRadius: "15%",
                    }}
                  >
                    {moment(offerDate).format("mm")}
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                      padding: "10px",
                    }}
                  >
                    :
                  </Typography>
                  <Typography
                    variant="h2"
                    color="inherit"
                    sx={{
                      textAlign: "center",
                      marginTop: "30px",
                      marginBottom: "30px",
                      backgroundColor: "white",
                      padding: "10px",
                      borderRadius: "15%",
                    }}
                  >
                    {moment(offerDate).format("ss")}
                  </Typography>
                </div>
              </Grid>
            </Grid>
            <Button
              sx={{
                color: "white",
                display: "flex",
                alignItems: "center",
                backgroundColor: "black",
                marginTop: "30px",
                marginBottom: "30px",
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