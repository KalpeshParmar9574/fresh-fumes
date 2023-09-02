import { Card, Container, Grid, Stack, Typography } from "@mui/material";

function Brand() {
    const brandsArr = [
      "/assets/images/freshfumes/brand1.png",
      "/assets/images/freshfumes/brand2.png",
      "/assets/images/freshfumes/brand3.png",
      "/assets/images/freshfumes/brand4.png",
    ];
    return (
      <>
        <Typography
          variant="h2"
          color="inherit"
          sx={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}
        >
          SELECT YOUR FAVOURITE BRAND
        </Typography>
        <Container maxWidth="lg">
          <Card>
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              alignItems="center"
              justifyContent="center"
            >
              {brandsArr?.map((brand, index) => (
                <Grid item xs={4} sm={2} md={3} lg={2} key={index}>
                  <img
                    src={brand}
                    alt=""
                    style={{
                      marginLeft: "auto",
                      marginRight: "auto",
                      padding: "30px",
                    }}
                  />
                </Grid>
              ))}
            </Grid>
          </Card>
        </Container>
      </>
    );
}

export default Brand;