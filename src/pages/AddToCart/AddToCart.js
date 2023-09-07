import React from 'react'
import DashboardLayout from "../../layouts/dashboard";
import AddToCartCard from '../../components/AddToCartCard';
import { CartArr } from '../CartArr';
import { Button, Card, Container, Divider, Grid, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
function AddToCart() {
  const navigate = useNavigate()
  return (
    <Container maxWidth="lg">
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
          xs={4}
          sm={4}
          md={8}
          lg={2}
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            //   padding: "0px"
          }}
        >
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
              xs={4}
              sm={8}
              md={12}
              lg={2}
              sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
            >
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <Typography
                  variant="h6"
                  color="text.secondary"
                  style={{
                    marginLeft: "15px",
                    marginRight: "auto",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  Shopping Cart
                </Typography>
                <Typography
                  variant="h6"
                  style={{
                    marginLeft: "auto",
                    marginRight: "15px",
                    color: "rgba(0, 0, 0, 1)",
                  }}
                >
                  <span style={{ color: "rgba(255, 88, 148, 1)" }}>
                    {CartArr?.length}
                  </span>{" "}
                  Items
                </Typography>
              </div>
            </Grid>
            {CartArr?.map((card, index) => (
              <Grid
                item
                xs={4}
                sm={8}
                md={12}
                lg={2}
                key={index}
                sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
              >
                <AddToCartCard
                  name={card?.name || ""}
                  subname={card?.subname || ""}
                  productName={card?.productName || ""}
                  price={card?.price || ""}
                  offerprice={card?.offerprice || ""}
                  img={card?.img || ""}
                  rating={card?.rating || "0"}
                  ratingcolor={card?.ratingcolor || "#FF5894"}
                  totalReviews={card?.totalReviews || "0"}
                  latestArrival={card?.latestArrival || false}
                  path={card?.id ? card?.id : ""}
                  productweight={card?.productweight ? card?.productweight : ""}
                  offer={card?.offer ? card?.offer : ""}
                  tag={card?.tag ? card?.tag : ""}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid
          item
          xs={4}
          sm={4}
          md={4}
          lg={2}
          sx={{
            marginLeft: "auto",
            marginRight: "auto",
            // padding: "0px",
            marginBottom: "auto",
          }}
        >
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
              xs={4}
              sm={8}
              md={12}
              lg={2}
              sx={{ marginLeft: "15px", marginRight: "auto" }}
            >
              <Typography variant="h6" sx={{ color: "rgba(0, 0, 0, 1)" }}>
                Cart Total
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={8}
              md={12}
              lg={2}
              sx={{
                marginLeft: "auto",
                marginRight: "auto",
                padding: "10px",
                marginBottom: "10px",
                marginTop: "10px",
              }}
            >
              <Card style={{ padding: "20px" }}>
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginRight: "auto",
                      fontWeight: "400",
                    }}
                  >
                    SubTotal
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginLeft: "auto",
                      fontWeight: "400",
                    }}
                  >
                    $232.99
                  </Typography>
                </div>
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginRight: "auto",
                      fontWeight: "400",
                    }}
                  >
                    Shipping
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginLeft: "auto",
                      fontWeight: "400",
                    }}
                  >
                    --
                  </Typography>
                </div>
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginRight: "auto",
                      fontWeight: "400",
                    }}
                  >
                    Gift Packing
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginLeft: "auto",
                      fontWeight: "400",
                    }}
                  >
                    --
                  </Typography>
                </div>
                <div style={{ display: "flex", marginBottom: "15px" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginRight: "auto",
                      fontWeight: "400",
                    }}
                  >
                    Taxes
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginLeft: "auto",
                      fontWeight: "400",
                    }}
                  >
                    --
                  </Typography>
                </div>
                <Divider
                  sx={{
                    marginTop: "10px",
                    marginBottom: "10px",
                    borderBottomWidth: "medium",
                    borderColor: "rgba(0, 0, 0, 1)",
                  }}
                />
                <div style={{ display: "flex" }}>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginRight: "auto",
                      fontWeight: "400",
                    }}
                  >
                    Total
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: "rgba(0, 0, 0, 1)",
                      marginLeft: "auto",
                      fontWeight: "400",
                    }}
                  >
                    $232.99
                  </Typography>
                </div>
              </Card>
              <div
                style={{
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    color:"white",
                    "&:hover": {
                      backgroundColor: "#FF5894",
                    },
                  }}
                  onClick={()=>navigate("/checkout")}
                >
                  Checkout
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

const componentConfig = {
  component: AddToCart,
  path: "/addtocart",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;
