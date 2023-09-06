import React from "react";
import DashboardLayout from "../../layouts/dashboard";
import { CartArr } from "../CartArr";
import {
  Button,
  Card,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  IconButton,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import DebitCard from "./DebitCard";
function CheckOut() {
  const navigate = useNavigate();
  const editAddress = () => {
      
  }
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
              <Typography
                variant="h2"
                style={{
                  marginLeft: "7px",
                  marginRight: "auto",
                  color: "rgba(0, 0, 0, 1)",
                  fontWeight: "400",
                }}
              >
                Billing Details
              </Typography>
              <Typography
                variant="h6"
                style={{
                  marginLeft: "10px",
                  marginRight: "auto",
                  color: "rgba(0, 0, 0, 1)",
                  fontWeight: "400",
                }}
              >
                Please enter details carefully.
              </Typography>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <div style={{ display: "flex", marginRight: "auto" }}>
                  <IconButton>
                    <HouseRoundedIcon />
                  </IconButton>
                  <Typography
                    variant="h6"
                    color="text.secondary"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      color: "rgba(0, 0, 0, 1)",
                      fontWeight: "400",
                    }}
                  >
                    User Address
                  </Typography>
                </div>
                <div style={{ display: "flex", marginLeft: "auto" }}>
                  <Typography
                    variant="h6"
                    style={{
                      marginTop: "auto",
                      marginBottom: "auto",
                      color: "rgba(255, 88, 148, 1)",
                      fontWeight: "400",
                    }}
                  >
                    <span style={{ color: "rgba(0, 0, 0, 1)" }}>
                      New User ?
                    </span>
                    Login
                  </Typography>
                </div>
              </div>
              <Card sx={{ padding: "20px" }}>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "auto",
                    marginBottom: "auto",
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "400",
                  }}
                >
                  User Name{"   "}
                  <span
                    style={{
                      color: "rgba(255, 88, 148, 1)",
                      fontSize: "14px",
                      marginLeft: "10px",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                    onClick={editAddress}
                  >
                    Edit
                  </span>
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "10px",
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "400",
                  }}
                >
                  1365 N Willow Ave, Clovis, California - 93619
                </Typography>
                <Typography
                  variant="body1"
                  style={{
                    marginTop: "10px",
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "400",
                  }}
                >
                  (559) 297-7776
                </Typography>
              </Card>
              {/* <div style={{ marginTop: "20px" }}>
                <Typography
                  variant="h6"
                  style={{
                    marginTop: "10px",
                    color: "rgba(0, 0, 0, 1)",
                    fontWeight: "400",
                  }}
                >
                  Select Payment Method
                </Typography>
              </div> */}
              {/* <DebitCard /> */}
              <Button
                // variant="contained"
                sx={{
                  marginTop: "20px",
                  color: "rgba(0,0,0,1)",
                  backgroundColor: "white",
                  boxShadow: "0 8px 16px 0 rgba(0, 0, 0, 0.24)",
                  "&:hover": {
                    backgroundColor: "white",
                  },
                }}
                onClick={() => navigate("/paymentsuccess")}
              >
                Place Order
              </Button>
            </Grid>
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
              sx={{ marginLeft: "15px", marginRight: "auto", dispay: "flex" }}
            >
              <Typography variant="h6" sx={{ color: "rgba(0, 0, 0, 1)",marginRight:"auto" }}>
                Gucci Guilty Eau De Toilette (50 ml)
              </Typography>
              <Typography variant="h6" sx={{ color: "rgba(0, 0, 0, 1)",marginLeft:"auto" }}>
                $232.99
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
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#FF5894",
                    },
                  }}
                  onClick={() => navigate("/paymentsuccess")}
                >
                  CheckOut
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
  component: CheckOut,
  path: "/checkout",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;
