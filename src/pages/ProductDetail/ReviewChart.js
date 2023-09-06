import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function ReviewChart(props) {
  const [animateProgress, setAnimateProgress] = useState(0);

  useEffect(() => {
    // Delay the animation by a short period (e.g., 500ms) after the component mounts.
    const animationTimeout = setTimeout(() => {
      setAnimateProgress(props.value);
    }, 800);

    // Clear the timeout when the component unmounts to prevent memory leaks.
    return () => clearTimeout(animationTimeout);
  }, [props.value]);

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        justifyContent: "center",
        marginTop: "18px",
      }}
    >
      <CircularProgress
        variant="determinate"
        value={animateProgress}
        style={{
          width: "100px",
          height: "100px",
          transition: "all 1s ease-in-out", // Adjust duration and timing function as needed
        }}
      />
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
          {`${Math.round(animateProgress)}%`}
        </Typography>
      </Box>
    </Box>
  );
}
