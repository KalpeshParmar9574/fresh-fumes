
import { styled } from "@mui/material/styles";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import { useState } from "react";
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function NewArrivalCard() {

  const [expanded, setExpanded] = useState(false);
    return (
      <Card sx={{ maxWidth: 270 }}>
        <CardHeader />
        <CardMedia
          component="img"
          image="/assets/images/products/product1.png"
          alt=""
          sx={{
            width: "200px",
            height: "200px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        />
        <CardContent>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" color="text.secondary">
              Jasmin Noir
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "5px",
              }}
            >
              By Jasmin
            </Typography>
          </div>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" color="text.secondary">
              $20.00
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                marginTop: "auto",
                marginBottom: "auto",
                marginLeft: "5px",
              }}
            >
              $20.00
            </Typography>
          </div>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    );
}

export default NewArrivalCard;