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
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomCard from "../../components/CustomCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "./Productlist.css";
import "swiper/css";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import BasicMenu from "./Menu";
import { v4 as uuidv4 } from "uuid";
import { CardArr } from "../CardArr";
import { Delete } from "@mui/icons-material";
import { useFormik } from "formik";
import { debounce } from "lodash";
import CardMenu from "./Menu";

// import "swiper/css/navigation";
// import "swiper/css/pagination";

const marks = [
  {
    value: 0,
    label: "$0",
  },
  {
    value: 250,
    label: "$250",
  },
  {
    value: 500,
    label: "$500",
  },
  {
    value: 750,
    label: "$750",
  },
  {
    value: 1000,
    label: "$1000",
  },
];

function valuetext(value) {
  return `$${value}`;
}

function valueLabelFormat(value) {
  return marks.findIndex((mark) => mark.value === value) * 250; // Adjusted for $250 increments
}

function Productlist() {
  const formik = useFormik({
    initialValues: {
      bySize: {
        "15 ml": "",
        "30 ml": "",
        "40 ml": "",
        "50 ml": "",
        "60 ml": "",
        "90 ml": "",
        "100 ml": "",
        "125 ml": "",
      },
      byFragrance: {
        Lavender: "",
        Burberry: "",
        Rose: "",
        Eternity: "",
        Fresh: "",
      },
      byBrand: {
        Gucci: "",
        Rolex: "",
        Millen: "",
        "Hugo Boss": "",
        Chenal: "",
      },
    },
    // validationSchema: LoginSchema,
    onSubmit: async (values) => {},
  });
  const inputRef = React.useRef(null);
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleSubmit,
    getFieldProps,
    setFieldValue,
  } = formik;
  console.log("values: ", values);

  const [selectedFilters, setSelectedFilters] = React.useState([]);
  const bySizeArr = [
    "15 ml",
    "30 ml",
    "40 ml",
    "50 ml",
    "60 ml",
    "90 ml",
    "100 ml",
    "125 ml",
    "200 ml",
  ];
  const [bySize, setBySize] = React.useState(true);
  const openBySize = () => {
    setBySize(!bySize);
  };
  const byFragranceArr = ["Lavender", "Burberry", "Rose", "Eternity", "Fresh"];
  const [byPriceRange, setByPriceRange] = React.useState(true);
  const openByPriceRange = () => {
    setByPriceRange(!byPriceRange);
  };
  const [byFragrance, setByFragrance] = React.useState(true);
  const openByFragrance = () => {
    setByFragrance(!byFragrance);
  };
  const byBrandArr = ["Gucci", "Rolex", "Millen", "Hugo Boss", "Chenal"];
  const [byBrand, setByBrand] = React.useState(true);
  const openByBrand = () => {
    setByBrand(!byBrand);
  };
  const [byGender, setByGender] = React.useState(true);
  const openByGender = () => {
    setByGender(!byGender);
  };
  // const cardStyles = {
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   padding: "0px",
  // };

  // const cardContainerStyles = {
  //   display: "flex",
  //   flexWrap: "wrap",
  //   alignItems: "flex-start", // Align items to the top of the container
  //   marginLeft: "auto",
  //   marginRight: "auto",
  //   marginBottom: "20px",
  //   marginTop: "20px",
  //   padding: "0px",
  // };

  // const cardMediaQueries = {
  //   xs: {
  //     width: "50%", // 2 cards per row for xs screens
  //   },
  //   sm: {
  //     width: "50%", // 2 cards per row for sm screens
  //   },
  //   md: {
  //     width: "33.33%", // 3 cards per row for md screens
  //   },
  //   lg: {
  //     width: "33.33%", // 3 cards per row for lg screens
  //   },
  // };
  const [byGenderChips, setByGenderChips] = React.useState([
    { label: "Men", isDeletable: false },
    { label: "Women", isDeletable: false },
    { label: "Unisex", isDeletable: false },
  ]);

  const [byType, setByType] = React.useState(true);
  const openByType = () => {
    setByType(!byType);
  };

  const handleChipClick = (index) => {
    const updatedChips = [...byGenderChips];
    updatedChips[index].isDeletable = !updatedChips[index].isDeletable;
    setByGenderChips(updatedChips);
    setSelectedFilters([
      ...selectedFilters,
      { ...updatedChips[index], filterType: "byGender" },
    ]);
  };

  const handleDeleteClick = (index) => {
    const updatedChips = [...byGenderChips];
    updatedChips[index].isDeletable = false;
    setByGenderChips(updatedChips);
    const i = selectedFilters?.findIndex(
      (filter) => filter?.label == updatedChips[index]?.label
    );
    selectedFilters?.splice(i, 1);
    setSelectedFilters([...selectedFilters]);
  };

  console.log("selectedFilters: =======>>>>>>>>>>>>", selectedFilters);

  const [byTypeChips, setByTypeChips] = React.useState([
    { label: "Eau de toilettes", isDeletable: false },
    { label: "Eau de cologne", isDeletable: false },
    { label: "Eau de Parfum", isDeletable: false },
  ]);

  const handleChipClickByType = (index) => {
    const updatedChips = [...byTypeChips];
    updatedChips[index].isDeletable = !updatedChips[index].isDeletable;
    setByTypeChips(updatedChips);
    setSelectedFilters([
      ...selectedFilters,
      { ...updatedChips[index], filterType: "byType" },
    ]);
  };

  const handleDeleteClickByType = (index) => {
    const updatedChips = [...byTypeChips];
    updatedChips[index].isDeletable = false;
    setByTypeChips(updatedChips);
    const i = selectedFilters?.findIndex(
      (filter) => filter?.label == updatedChips[index]?.label
    );
    selectedFilters?.splice(i, 1);
    setSelectedFilters([...selectedFilters]);
  };

  const handleCheckBox = (event, label, filterType) => {
    const checkboxValue = event?.target?.checked;
    const fieldName = `${filterType}.${label}`;
    console.log("checkboxValue: ", checkboxValue);
    if (checkboxValue) {
      setFieldValue(fieldName, true);
      const duplicate = selectedFilters?.filter(
        (filter) => filter?.label == label
      );
      if (duplicate?.length == 0) {
        setSelectedFilters([
          ...selectedFilters,
          { label: label, filterType: filterType, isDeletable: true },
        ]);
      }
    } else {
      setFieldValue(fieldName, false);
      const i = selectedFilters?.findIndex((filter) => filter?.label == label);
      if (i >= 0) {
        selectedFilters?.splice(i, 1);
        setSelectedFilters([...selectedFilters]);
      }
    }
  };

  const handleDeleteFilterChips = (index) => {
    if (selectedFilters[index]?.filterType == "byGender") {
      const updatedChips = [...byGenderChips];

      const i = selectedFilters?.find(
        (filter) => filter?.label == updatedChips[index]?.label
      );
      const genderIndex = updatedChips?.findIndex(
        (filter) => filter?.label == selectedFilters[index]?.label
      );
      updatedChips[genderIndex].isDeletable = false;
      setByGenderChips(updatedChips);
      selectedFilters?.splice(index, 1);
      setSelectedFilters([...selectedFilters]);
    } else if (selectedFilters[index]?.filterType == "byType") {
      const updatedChips = [...byTypeChips];

      const i = selectedFilters?.find(
        (filter) => filter?.label == updatedChips[index]?.label
      );
      const genderIndex = updatedChips?.findIndex(
        (filter) => filter?.label == selectedFilters[index]?.label
      );
      updatedChips[genderIndex].isDeletable = false;
      setByTypeChips(updatedChips);
      selectedFilters?.splice(index, 1);
      setSelectedFilters([...selectedFilters]);
    } else {
      const fieldName = `${selectedFilters[index]?.filterType}.${selectedFilters[index]?.label}`;
      setFieldValue(fieldName, false);
      setFieldValue();
      selectedFilters?.splice(index, 1);
      setSelectedFilters([...selectedFilters]);
    }
  };

  const navigate = useNavigate();
  const [sortBy, setSortBy] = React.useState(false);
  const [sortByMenu, setSortByMenu] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event, bool) => {
    setAnchorEl(event.currentTarget);
    if (bool) {
      setSortBy(true);
      setSortByMenu(true);
    } else {
      setSortBy(false);
      setSortByMenu(false);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSortBy(false);
  };

  const handleSearch = async (e) => {
    const value = e?.target?.value;
    console.log("value:----------------- ", value.length);
    if (value.length == 0) {
      const i = selectedFilters?.findIndex(
        (filter) => filter?.filterType == "search"
      );
      if (i >= 0) {
        selectedFilters?.splice(i, 1);
        setSelectedFilters([...selectedFilters]);
      }
    } else {
      const duplicate = selectedFilters?.filter(
        (filter) => filter?.filterType == "search"
      );
      if (duplicate?.length > 0) {
        const duplicateIndex = selectedFilters?.findIndex(
          (filter) => filter?.filterType == "search"
        );
        selectedFilters[duplicateIndex].label = value;
        setSelectedFilters([...selectedFilters]);
      } else {
        setSelectedFilters([
          ...selectedFilters,
          { label: value, filterType: "search", isDeletable: true },
        ]);
      }
    }
  };
  const debounceWithSearch = debounce(handleSearch, 500);

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
              {selectedFilters?.length > 0 &&
                selectedFilters?.map((filters, index) => (
                  <Chip
                    key={index}
                    label={filters.label}
                    // onClick={() => handleChipClick(index)}
                    onDelete={
                      filters.isDeletable
                        ? () => handleDeleteFilterChips(index)
                        : undefined
                    }
                    style={{
                      margin: "5px",
                      padding: "15px",
                      // backgroundColor: chip.isDeletable ? "#FF5894" : "White",
                      // color: chip.isDeletable ? "white" : "Black",
                      // border: chip.isDeletable ? "none" : "2px solid black",
                    }}
                  />
                ))}
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
          </Grid>
        </Card>
      </Container>
      {sortByMenu ? (
        <div
          // id="basic-menu"
          // anchorEl={anchorEl}
          // open={open}
          // onClose={handleClose}
          // MenuListProps={{
          //   "aria-labelledby": "basic-button",
          // }}
          // sx={{ width: "400px", height: "auto", maxWidth: "100%" }}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "right",
          // }}
          // transformOrigin={{
          //   vertical: "top",
          //   horizontal: "right",
          // }}
          className="Menu-data"
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
              {/* <Input
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
                    onChange={(e) => handleCheckBox(e, item, "byFragrance")}
                    placeholder="Search"
                  /> */}
              <TextField
                fullWidth
                // label="Search by Title"
                placeholder="Search"
                name="search"
                variant="standard"
                size="small"
                onChange={debounceWithSearch}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                }}
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
                    control={
                      <Checkbox
                        name={bySize?.[item]}
                        checked={values?.bySize?.[item]}
                        // {...getFieldProps(`bySize.${item}`)}
                        onChange={(e) => handleCheckBox(e, item, "bySize")}
                      />
                    }
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
              <IconButton onClick={openByGender} sx={{ marginLeft: "auto" }}>
                <AddRoundedIcon />
              </IconButton>
            ) : (
              <IconButton onClick={openByGender} sx={{ marginLeft: "auto" }}>
                <RemoveRoundedIcon />
              </IconButton>
            )}
          </div>
          <Divider sx={{ border: "1px solid black" }} />
          {!byGender && (
            <div style={{ padding: "15px" }}>
              {byGenderChips.map((chip, index) => (
                <Chip
                  key={index}
                  label={chip.label}
                  onClick={() => handleChipClick(index)}
                  onDelete={
                    chip.isDeletable
                      ? () => handleDeleteClick(index)
                      : undefined
                  }
                  style={{
                    margin: "5px",
                    padding: "15px",
                    backgroundColor: chip.isDeletable ? "#FF5894" : "White",
                    color: chip.isDeletable ? "white" : "Black",
                    border: chip.isDeletable ? "none" : "2px solid black",
                  }}
                />
              ))}
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
              By Type
            </Typography>
            {byType ? (
              <IconButton onClick={openByType} sx={{ marginLeft: "auto" }}>
                <AddRoundedIcon />
              </IconButton>
            ) : (
              <IconButton onClick={openByType} sx={{ marginLeft: "auto" }}>
                <RemoveRoundedIcon />
              </IconButton>
            )}
          </div>
          <Divider sx={{ border: "1px solid black" }} />
          {!byType && (
            <div style={{ padding: "15px" }}>
              {byTypeChips.map((chip, index) => (
                <Chip
                  key={index}
                  label={chip.label}
                  onClick={() => handleChipClickByType(index)}
                  onDelete={
                    chip.isDeletable
                      ? () => handleDeleteClickByType(index)
                      : undefined
                  }
                  style={{
                    margin: "5px",
                    padding: "15px",
                    backgroundColor: chip.isDeletable ? "#FF5894" : "White",
                    color: chip.isDeletable ? "white" : "Black",
                    border: chip.isDeletable ? "none" : "2px solid black",
                  }}
                />
              ))}
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
            <div
              style={{
                display: "flex",
                padding: "15px",
                width: "400px",
              }}
            >
              <Slider
                aria-label="Price range"
                defaultValue={0}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={null}
                valueLabelDisplay="auto"
                marks={marks}
                max={1000}
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
                    control={
                      <Checkbox
                        name={byFragrance?.[item]}
                        checked={values?.byFragrance?.[item]}
                        // {...getFieldProps(`bySize.${item}`)}
                        onChange={(e) => handleCheckBox(e, item, "byFragrance")}
                      />
                    }
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
                    control={
                      <Checkbox
                        name={byBrand?.[item]}
                        checked={values?.byBrand?.[item]}
                        // {...getFieldProps(`bySize.${item}`)}
                        onChange={(e) => handleCheckBox(e, item, "byBrand")}
                      />
                    }
                    // control={<Checkbox name="agreed" onChange={handleAgreed} />}
                    // label="Pack for Gift"
                    sx={{ marginRight: "0px" }}
                  />
                </FormControl>
              </MenuItem>
            ))}
        </div>
      ) : (
        ""
      )}
      {/* <BasicMenu /> */}
      <div className="custom-container-productlist">
        {CardArr?.map((card, index) => (
          <div className={`custom-card-productlist}`} key={index}>
            {console.log("card: ", card, index)}
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
