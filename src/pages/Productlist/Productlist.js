import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
import {
  Breadcrumbs,
  Card,
  Checkbox,
  Chip,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Menu,
  MenuItem,
  Paper,
  Slider,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay,Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import "./swiper.css";
import "swiper/css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import BasicMenu from "./Menu";
import { v4 as uuidv4 } from "uuid";
import { CardArr } from "../CardArr";
import { Delete } from "@mui/icons-material";

// import "swiper/css/navigation";
// import "swiper/css/pagination";

const marks = [
  {
    value: 0,
    label: '$0',
  },
  {
    value: 50,
    label: '$50',
  },
  {
    value: 100,
    label: '$100',
  },
  {
    value: 150,
    label: '$150',
  },
  {
    value: 200,
    label: '$200',
  },
  {
    value: 250,
    label: '$250',
  },
  {
    value: 300,
    label: '$300',
  },
  {
    value: 350,
    label: '$350',
  },
  {
    value: 400,
    label: '$400',
  },
  {
    value: 450,
    label: '$450',
  },
  {
    value: 500,
    label: '$500',
  },
  {
    value: 550,
    label: '$550',
  },
  {
    value: 600,
    label: '$600',
  },
  {
    value: 650,
    label: '$650',
  },
  {
    value: 700,
    label: '$700',
  },
  {
    value: 750,
    label: '$750',
  },
  {
    value: 800,
    label: '$800',
  },
  {
    value: 850,
    label: '$850',
  },
  {
    value: 900,
    label: '$900',
  },
  {
    value: 950,
    label: '$950',
  },
  {
    value: 1000,
    label: '$1000',
  },
];

function valuetext(value) {
  return `${value}`;
}


function Productlist() {
  const bySizeArr = ["15 ml","30 ml","40 ml","50 ml","60 ml","90 ml","100 ml","125 ml","200 ml"]
  const [bySize,setBySize] = React.useState(false)
  const openBySize = ()=>{
  setBySize(!bySize)
  }
  const byFragranceArr = [
    "Lavender",
    "Burberry",
    "Rose",
    "Eternity",
    "Fresh",
  ];
  const [byPriceRange, setByPriceRange] = React.useState(false);
const openByPriceRange = () => {
  setByPriceRange(!byPriceRange);
};
  const [byFragrance, setByFragrance] = React.useState(false);
const openByFragrance = () => {
  setByFragrance(!byFragrance);
};
  const byBrandArr = [
    "Gucci",
    "Rolex",
    "Millen",
    "Hugo Boss",
    "Chenal",
  ];
  const [byBrand, setByBrand] = React.useState(false);
  const openByBrand = () => {
    setByBrand(!byBrand);
  };
  const [byGender, setByGender] = React.useState(false);
  const openByGender = () => {
    setByGender(!byGender);
  };
  const byGenderArr = ["Male","Female","Unisex"]
const cardStyles = {
  marginLeft: "auto",
  marginRight: "auto",
  padding: "0px",
};

const cardContainerStyles = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "flex-start", // Align items to the top of the container
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "20px",
  marginTop: "20px",
  padding: "0px",
};

const cardMediaQueries = {
  xs: {
    width: "50%", // 2 cards per row for xs screens
  },
  sm: {
    width: "50%", // 2 cards per row for sm screens
  },
  md: {
    width: "33.33%", // 3 cards per row for md screens
  },
  lg: {
    width: "33.33%", // 3 cards per row for lg screens
  },
};
 const [chips, setChips] = React.useState([
   { label: "Chip 1", isDeletable: false },
   { label: "Chip 2", isDeletable: false },
   { label: "Chip 3", isDeletable: false },
 ]);

 const handleChipClick = (index) => {
   const updatedChips = [...chips];
   updatedChips[index].isDeletable = !updatedChips[index].isDeletable;
   setChips(updatedChips);
 };

 const handleDeleteClick = (index) => {
   const updatedChips = [...chips];
   updatedChips[index].isDeletable = false;
   setChips(updatedChips);
 };

  const navigate = useNavigate();
  const [sortBy,setSortBy] = React.useState(false);
  const [sortByMenu,setSortByMenu] = React.useState(false);
   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event,bool) => {
     setAnchorEl(event.currentTarget);
     if(bool){
      setSortBy(true);
      setSortByMenu(true);
    }else{
       setSortBy(false);
       setSortByMenu(false);
     }
   };
   const handleClose = () => {
     setAnchorEl(null);
     setSortBy(false);
   };

  return (
    <>
      {/* <Container maxWidth="sm"> */}
      <Container maxWidth="xl">
        <Swiper
          // cssMode={true}
          // navigation={false}
          // pagination={false}
          // mousewheel={true}
          // keyboard={true}
          // modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          modules={[Autoplay]}
          grabCursor={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="/assets/images/productlist/productlistoffer.png"
              alt=""
              style={{ width: "100%" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/images/productlist/productlistoffer.png"
              alt=""
              style={{ width: "100%" }}
            />
          </SwiperSlide>
        </Swiper>
        <Card sx={{ padding: "20px", marginBottom: "20px" }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            alignItems="center"
            justifyContent="start"
          >
            <Grid
              item
              xs={4}
              sm={2}
              md={2}
              lg={2}
              sx={{
                paddingLeft: "0px",
                margin: "0px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Typography
                variant="body2"
                color="inherit"
                sx={{
                  textAlign: "left",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                {`Show All ${CardArr?.length} Products`}
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={2}
              md={7}
              lg={2}
              sx={{
                paddingLeft: "0px",
                margin: "0px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <Typography
                variant="body2"
                color="inherit"
                sx={{
                  textAlign: "center",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                }}
              >
                Product List
              </Typography>
            </Grid>
            <Grid
              item
              xs={4}
              sm={2}
              md={3}
              lg={2}
              sx={{
                paddingLeft: "0px",
                margin: "0px",
                marginTop: "auto",
                marginBottom: "auto",
              }}
            >
              <div
                style={{
                  backgroundColor: "#E5E5E5",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  borderRadius: "10px",
                  display: "flex",
                }}
                id="basic-button"
                aria-controls={open ? "basic-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
              >
                <Typography
                  variant="body1"
                  color="inherit"
                  sx={{
                    textAlign: "center",
                    marginTop: "auto",
                    marginBottom: "auto",
                    marginLeft: "20px",
                  }}
                >
                  Sort By
                </Typography>
                {!sortBy ? (
                  <IconButton
                    sx={{ marginLeft: "auto", marginRight: "20px" }}
                    onClick={(e) => handleClick(e, true)}
                  >
                    <AddRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    sx={{ marginLeft: "auto", marginRight: "20px" }}
                    // id="basic-button"
                    // aria-controls={open ? "basic-menu" : undefined}
                    // aria-haspopup="true"
                    // aria-expanded={open ? "true" : undefined}
                    onClick={(e) => handleClick(e, false)}
                  >
                    <RemoveRoundedIcon />
                  </IconButton>
                )}
              </div>
            </Grid>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              style={{ width: "100%", height: "auto" }}
            >
              <MenuItem>
                <FormControl
                  variant="standard"
                  sx={{
                    m: 1,
                    mt: 3,
                    width: "100%",
                    marginTop: "auto",
                    marginBottom: "auto",
                  }}
                >
                  <Input
                    id="standard-adornment-weight"
                    endAdornment={
                      <InputAdornment position="end">
                        <SearchRoundedIcon />
                      </InputAdornment>
                    }
                    aria-describedby="standard-weight-helper-text"
                    inputProps={{
                      "aria-label": "weight",
                    }}
                    placeholder="Search"
                  />
                </FormControl>
              </MenuItem>
              <div
                style={{
                  display: "flex",
                  padding: "15px",
                  paddingBottom: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    marginRight: "auto",
                    color: "rgba(0,0,0,1)",
                  }}
                >
                  By Size
                </Typography>
                {bySize ? (
                  <IconButton onClick={openBySize} sx={{ marginLeft: "auto" }}>
                    <AddRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={openBySize} sx={{ marginLeft: "auto" }}>
                    <RemoveRoundedIcon />
                  </IconButton>
                )}
              </div>
              <Divider sx={{ border: "1px solid black" }} />
              {!bySize &&
                bySizeArr?.map((item, index) => (
                  <div key={index} style={{ display: "flex", padding: "15px" }}>
                    <Typography
                      variant="body2"
                      color="inherit"
                      sx={{
                        textAlign: "left",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        marginRight: "auto",
                      }}
                    >
                      {item}
                    </Typography>
                    <FormControl sx={{ marginLeft: "auto" }}>
                      <FormControlLabel
                        control={<Checkbox name={item} />}
                        // control={<Checkbox name="agreed" onChange={handleAgreed} />}
                        // label="Pack for Gift"
                        sx={{ marginRight: "0px" }}
                      />
                    </FormControl>
                  </div>
                ))}
              <div
                style={{
                  display: "flex",
                  padding: "15px",
                  paddingBottom: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    marginRight: "auto",
                    color: "rgba(0,0,0,1)",
                  }}
                >
                  By Gender
                </Typography>
                {byGender ? (
                  <IconButton
                    onClick={openByGender}
                    sx={{ marginLeft: "auto" }}
                  >
                    <AddRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={openByGender}
                    sx={{ marginLeft: "auto" }}
                  >
                    <RemoveRoundedIcon />
                  </IconButton>
                )}
              </div>
              <Divider sx={{ border: "1px solid black" }} />
              {/* {!byGender &&
                byGenderArr?.map((item, index) => (
                  <div key={index} style={{ display: "flex", padding: "15px" }}>
                    
                  </div>
                ))} */}
              {chips.map((chip, index) => (
                <Chip
                  key={index}
                  label={chip.label}
                  onClick={() => handleChipClick(index)}
                  onDelete={
                    chip.isDeletable
                      ? () => handleDeleteClick(index)
                      : undefined
                  }
                  color={chip.isDeletable ? "secondary" : "primary"}
                  // icon={
                  //   chip.isDeletable && (
                  //     <IconButton onClick={() => handleDeleteClick(index)}>
                  //       <Delete />
                  //     </IconButton>
                  //   )
                  // }
                  style={{ margin: "5px" }}
                />
              ))}
              <div
                style={{
                  display: "flex",
                  padding: "15px",
                  paddingBottom: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    marginRight: "auto",
                    color: "rgba(0,0,0,1)",
                  }}
                >
                  By Price Range
                </Typography>
                {byPriceRange ? (
                  <IconButton onClick={openByPriceRange}>
                    <AddRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={openByPriceRange}>
                    <RemoveRoundedIcon />
                  </IconButton>
                )}
              </div>
              <Divider sx={{ border: "1px solid black" }} />
              {!byPriceRange && (
                <div style={{ display: "flex", padding: "15px" }}>
                  <Slider
                    aria-label="Always visible"
                    defaultValue={250}
                    getAriaValueText={valuetext}
                    step={50}
                    marks={marks}
                    valueLabelDisplay="on"
                  />
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  padding: "15px",
                  paddingBottom: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    marginRight: "auto",
                    color: "rgba(0,0,0,1)",
                  }}
                >
                  By Fragrance
                </Typography>
                {byFragrance ? (
                  <IconButton onClick={openByFragrance}>
                    <AddRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={openByFragrance}>
                    <RemoveRoundedIcon />
                  </IconButton>
                )}
              </div>
              <Divider sx={{ border: "1px solid black" }} />
              {!byFragrance &&
                byFragranceArr?.map((item, index) => (
                  <div style={{ display: "flex", padding: "15px" }} key={index}>
                    <Typography
                      variant="body2"
                      color="inherit"
                      sx={{
                        textAlign: "left",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        marginRight: "auto",
                      }}
                    >
                      {item}
                    </Typography>
                    <FormControl sx={{ marginLeft: "auto" }}>
                      <FormControlLabel
                        control={<Checkbox name={item} />}
                        // control={<Checkbox name="agreed" onChange={handleAgreed} />}
                        // label="Pack for Gift"
                        sx={{ marginRight: "0px" }}
                      />
                    </FormControl>
                  </div>
                ))}
              <div
                style={{
                  display: "flex",
                  padding: "15px",
                  paddingBottom: "5px",
                }}
              >
                <Typography
                  variant="h6"
                  color="inherit"
                  sx={{
                    textAlign: "left",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    marginRight: "auto",
                    color: "rgba(0,0,0,1)",
                  }}
                >
                  By Brand
                </Typography>
                {byBrand ? (
                  <IconButton onClick={openByBrand}>
                    <AddRoundedIcon />
                  </IconButton>
                ) : (
                  <IconButton onClick={openByBrand}>
                    <RemoveRoundedIcon />
                  </IconButton>
                )}
              </div>
              <Divider sx={{ border: "1px solid black" }} />
              {!byBrand &&
                byBrandArr?.map((item, index) => (
                  <MenuItem
                    style={{ display: "flex", padding: "15px" }}
                    key={index}
                  >
                    <Typography
                      variant="body2"
                      color="inherit"
                      sx={{
                        textAlign: "left",
                        paddingTop: "10px",
                        paddingBottom: "10px",
                        marginRight: "auto",
                      }}
                    >
                      {item}
                    </Typography>
                    <FormControl sx={{ marginLeft: "auto" }}>
                      <FormControlLabel
                        control={<Checkbox name={item} />}
                        // control={<Checkbox name="agreed" onChange={handleAgreed} />}
                        // label="Pack for Gift"
                        sx={{ marginRight: "0px" }}
                      />
                    </FormControl>
                  </MenuItem>
                ))}
            </Menu>
          </Grid>
        </Card>
      </Container>
      {/* <BasicMenu /> */}
      <div className="custom-container">
        {CardArr?.map((card, index) => (
          <div className="custom-card" key={index}>
            <CustomCard
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
            />
          </div>
        ))}
      </div>
      {/* </Container> */}
    </>
  );
}

const componentConfig = {
  component: Productlist,
  path: "/productlist",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;


//  <Grid
//         container
//         spacing={{ xs: 2, md: 3 }}
//         columns={{ xs: 4, sm: 8, md: 12 }}
//         alignItems="center"
//         justifyContent="center"
//         sx={{
//           marginLeft: "auto",
//           marginRight: "auto",
//           marginBottom: "20px",
//           marginTop: "20px",
//           padding: "0px",
//         }}
//       >
//         {CardArr?.map((card, index) => (
//           <Grid
//             item
//             xs={4}
//             sm={4}
//             md={2.40}
//             lg={2}
//             key={index}
//             sx={{ marginLeft: "auto", marginRight: "auto", padding: "0px" }}
//             onClick={()=>window.open(`/productdetail/${card?.id}`)}
//             // component={RouterLink}
// 						// 	to={`/productdetail/${card?.id}`}
//           >
//             <CustomCard
//               name={card?.name || ""}
//               subname={card?.subname || ""}
//               productName={card?.productName || ""}
//               price={card?.price || ""}
//               offerprice={card?.offerprice || ""}
//               img={card?.img || ""}
//               rating={card?.rating || "0"}
//               ratingcolor={card?.ratingcolor || "#FF5894"}
//               totalReviews={card?.totalReviews || "0"}
//               latestArrival={card?.latestArrival || false}
//             />
//           </Grid>
//         ))}
//       </Grid>