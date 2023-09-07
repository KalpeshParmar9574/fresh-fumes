import React from 'react'
import DashboardLayout from "../../layouts/dashboard";
import { Card, IconButton, Typography } from '@mui/material';
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { Container } from '@mui/system';
function PaymentSuccess() {

   const downloadReciept = () => {
     // using Java Script method to get PDF file
     fetch("logo.pdf").then((response) => {
       response.blob().then((blob) => {
         // Creating new object of PDF file
         const fileURL = window.URL.createObjectURL(blob);
         // Setting various property values
         let alink = document.createElement("a");
         alink.href = fileURL;
         alink.download = "logo.pdf";
         alink.click();
       });
     });
   };


  return (
    <Container maxWidth="md">
      <Card sx={{marginBottom:"30px"}}>
        <div style={{ display: "flex", margin: "30px" }}>
          <div>
            <img
              src="/assets/images/paymentsuccess/paymentsuccesstick.png"
              alt=""
              style={{
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
            />
            <Typography
              variant="h2"
              sx={{
                color: "rgba(23, 204, 162, 1)",
                textAlign: "center",
                marginBottom: "20px",
              }}
            >
              Payment Success
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0, 0, 0, 1)",
                display: "flex",
                marginBottom: "20px",
              }}
            >
              <span style={{ marginRight: "auto", fontWeight: "400" }}>
                Tracking Number:
              </span>
              <span style={{ fontWeight: "400" }}>987809809709</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "rgba(0, 0, 0, 1)",
                display: "flex",
                marginBottom: "10px",
              }}
            >
              <span style={{ fontWeight: "700", marginRight: "auto" }}>
                Paid Amount :
              </span>
              <span>$345.20</span>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "rgba(0, 0, 0, 1)", display: "flex" }}
            >
              <span style={{ fontWeight: "700", marginRight: "auto" }}>
                Receipt Print
              </span>
              <IconButton
                onClick={downloadReciept}
                sx={{
                  borderRadius: "10px",
                  //   backgroundColor: "rgba(0, 0, 0, 0.1)",
                  //   marginBottom: "8px",
                }}
              >
                <DownloadRoundedIcon />
              </IconButton>
            </Typography>
          </div>
          <div>
            <img
              src="/assets/images/paymentsuccess/paymentsuccess.png"
              alt=""
            />
          </div>
        </div>
      </Card>
    </Container>
  );
}

const componentConfig = {
  component: PaymentSuccess,
  path: "/paymentsuccess",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;