import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function ReviewChart(props) {
  return (
    <Box sx={{ position: "relative",
    display: "flex",
    justifyContent: "center",
    marginTop: "18px",
 }}>
      <CircularProgress variant="determinate" {...props} style={{width:"100px",height:"100px"}} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
