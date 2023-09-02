import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CommentIcon from "@mui/icons-material/Comment";
import { Button, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";

export default function Feed() {
  const [expanded, setExpanded] = React.useState(false);
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const formik = useFormik({
    initialValues: {
      comment: ""},
    onsubmit: (values) => {
      console.log(values);
    }});
    const {
        errors,
        values,
        touched,
        handleChange,
        handleSubmit,
        setValues,
        setFieldValue,
        isSubmitting,
        getFieldProps,
        handleBlur,
        setSubmitting,
        resetForm,
        validateField,
      } = formik;

  return (
    <Card sx={{marginBottom: '20px'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hello guys i am happy to share that i have joined cybercom as a
          developer.
        </Typography>
      </CardContent>
      <CardMedia
        component="img"
        height="194"
        image="https://source.unsplash.com/random"
        alt="Paella dish"
      />
        <Typography variant="body2" color="text.secondary" marginTop={'10px'} marginLeft={'10px'}  fontSize={'12px'}>100 likes & 20 comments</Typography>
      <CardActions>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <CommentIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
            <form onSubmit={handleSubmit}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid item xs={9}>
              <TextField
                id="outlined-basic"
                autoComplete="off"
                label="Comment"
                variant="outlined"
                size="small"
                name="subject"
                inputProps={{
                  "data-cy": "txt-subject-department",
                }}
                FormHelperTextProps={{
                  "data-cy": "txt-subject-err-department",
                }}
                // value={values.subject}
                // onChange={handleChange}
                // error={Boolean(touched.subject && errors.subject)}
                // helperText={touched.subject && errors.subject}
                fullWidth
                // onBlur={handleBlur}
              />
            </Grid>
            <Grid item xs={3} >
              <Button variant="contained" color="primary" size="small" type="submit">
                Comment
              </Button>
            </Grid>
          </Grid>
            </form>
        </CardContent>
      </Collapse>
    </Card>
  );
}
