import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  useTheme,
  useMediaQuery,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  AppBar,
  Drawer,
  Container,
  Grid,
  Hidden,
  FormControl,
  Input,
  InputAdornment,
  FormHelperText,
  Stack,
  Slide,
  useScrollTrigger,
} from "@mui/material";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled, alpha } from "@mui/material/styles";
import CallRoundedIcon from "@mui/icons-material/CallRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link } from '@mui/material';
import { Facebook, Instagram, Twitter, YouTube } from '@mui/icons-material';
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import ScrollToTop from "react-scroll-to-top";
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const AppBarRootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow:
    " 0 0 2px 0 rgba(145 158 171 0.24), 0 16px 32px -4px rgba(145 158 171 0.24)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: "rgba(255, 255, 255, 0.7)",
  // backgroundColor: alpha(theme.palette.common.white, 1.00),
  // zIndex: '1',
}));
// Define your other styled components here
const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

// function HideOnScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }


export default function MiniDrawer(props) {
  const { children, window } = props;
  const [isHidden, setIsHidden] = useState(false);
  // console.log('isHidden: ', isHidden);

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
const handleOpenSocialMedia = () =>{
  window.open("https://www.w3schools.com");
}
  React.useEffect(() => {
    setIsHidden(trigger);
  }, [trigger]);
  const mail = "freshfumes18@gmail.com"
  const call = "845-633-6739";
  const hoverColor = (theme)=>theme.palette.primary.main;
  // const hoverColor = "#FF5894";
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };
  // const drawerList = ["Home", "Collection", "On Sale", "Gifts", "New Arrival"];
    const drawerList = [
    { title: "Home", path: "/home" },
    { title: "Collection", path: "" },
    { title: "On Sale", path: "" },
    { title: "Gifts", path: "" },
    { title: "New Arrival", path: "" },
  ];
  const appbarNames = ["News", "Search", "Cart"];
  const drawerBottomList = [
    <div style={{display:'flex',justifyContent:'center'}}>
      <CallRoundedIcon sx={{ width: "20px", hieght: "20px" }} />
      <Typography
        variant="caption"
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        {call}
      </Typography>
    </div>,
    <div style={{display:'flex',justifyContent:'center'}}>
      <EmailRoundedIcon sx={{ width: "20px", hieght: "20px" }} />
      <Typography
        variant="caption"
        component="div"
        sx={{
          textAlign: "center",
        }}
      >
        {mail}
      </Typography>
    </div>,
  ];
  const drawerContent = (
    <div style={{overflow:'scroll'}}>
      <List>
        {drawerList?.map((item, index) => {
          return (
            <>
              <ListItem button key={index}>
                <ListItemText
                  primary={item?.title}
                  style={{ textAlign: "center", cursor: "pointer" }}
                  onClick={()=>navigate(item?.path)}
                />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
      <List sx={{ marginTop: "auto" }}>
        {drawerBottomList?.map((item, index) => {
          return (
            <>
              <ListItem button key={index}>
                <ListItemText
                  primary={item}
                  style={{ textAlign: "center", cursor: "pointer" }}
                />
              </ListItem>
              <Divider />
            </>
          );
        })}
      </List>
    </div>
  );

  return (
    <div className="background-color">
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <AppBarRootStyle position="fixed" component="nav">
          <Toolbar
            sx={{
              paddingTop: "5px",
              display: isHidden ? "none" : "block",
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
              alignItems="center"
              justifyContent="center"
            >
              <Hidden smDown>
                <Grid
                  item
                  xs={8}
                  sm={2.65}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <CallRoundedIcon sx={{ width: "20px", hieght: "20px" }} />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      textAlign: "center",
                    }}
                  >
                    845-633-6739
                  </Typography>
                </Grid>
              </Hidden>
              <Grid
                item
                xs={4}
                sm={2.65}
                md={4}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Hidden smUp>
                  <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{
                      display: "flex",
                      justifyContent: "start",
                      marginRight: "auto",
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                </Hidden>
                {/* <Typography
                  variant="h4"
                  sx={{
                    textAlign: "center",
                    color: "#FF5894",
                    width: "100%",
                    marginTop: "auto",
                    marginBottom: "auto",
                    [theme.breakpoints.up("sm")]: {
                      textAlign: "center",
                    },
                  }}
                > */}
                <img
                  src="/assets/images/logo/freshfumeslogo.png"
                  alt=""
                  // style={{ width: "150px", height: "90px" }}
                  style={{
                    width: "150px",
                    height: "90px",
                    textAlign: "center",
                    color: "#FF5894",
                    marginTop: "auto",
                    marginBottom: "auto",
                    [theme.breakpoints.up("sm")]: {
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "start",
                    },
                  }}
                />
                {/* </Typography> */}
              </Grid>

              <Hidden smDown>
                <Grid
                  item
                  xs={8}
                  sm={2.65}
                  md={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <EmailRoundedIcon sx={{ width: "20px", hieght: "20px" }} />
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    freshfumes18@gmail.com
                  </Typography>
                </Grid>
              </Hidden>
            </Grid>
          </Toolbar>
          <Toolbar
            sx={{
              "&.MuiToolbar-root": {
                paddingLeft: "0px",
                paddingRight: "0px",
              },
            }}
          >
            <Grid
              container
              spacing={{ xs: 2, md: 3 }}
              columns={{ xs: 4, sm: 8, md: 12 }}
            >
              <Hidden smDown>
                <Hidden xsDown={!isDrawerOpen}>
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    md={6}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "auto",
                      marginBottom: "auto",
                    }}
                  >
                    {drawerList?.map((item, index) => {
                      return (
                        <Grid
                          item
                          md={2}
                          sm={2}
                          key={index}
                          onClick={() => navigate(item?.path)}
                        >
                          <Typography
                            variant="h6"
                            component="div"
                            sx={{ textAlign: "center", cursor: "pointer" }}
                          >
                            {item?.title}
                          </Typography>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Hidden>
              </Hidden>
              <Grid
                item
                xs={4}
                sm={4}
                md={6}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "auto",
                  marginBottom: "auto",
                }}
              >
                <Hidden xsDown={!isDrawerOpen}>
                  <Grid
                    container
                    spacing={{ xs: 2, md: 3 }}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid
                      item
                      xs={2.5}
                      sm={5}
                      md={9}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
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
                    </Grid>
                    <Grid
                      item
                      xs={0.5}
                      sm={1}
                      md={1}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      <PersonRoundedIcon
                        sx={{ width: "35px", hieght: "35px" }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={0.5}
                      sm={1}
                      md={1}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      <FavoriteBorderRoundedIcon
                        sx={{
                          width: "35px",
                          hieght: "35px",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/wishlist")}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={0.5}
                      sm={1}
                      md={1}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "auto",
                        marginBottom: "auto",
                      }}
                    >
                      <ShoppingCartRoundedIcon
                        sx={{
                          width: "35px",
                          hieght: "35px",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/addtocart")}
                      />
                    </Grid>
                  </Grid>
                </Hidden>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBarRootStyle>
        <Drawer
          anchor="left"
          open={isDrawerOpen}
          onClose={toggleDrawer(false)}
          PaperProps={{ sx: { width: 200 } }}
          style={{ textAlign: "center" }}
        >
          {drawerContent}
        </Drawer>
      </Box>
      {/* <AppBarRootStyle position="fixed" component="nav">
          <Container maxWidth="xl">
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              >
                MUI
              </Typography>
              <Box sx={{ display: { xs: "none", sm: "block" } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: "#fff" }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Toolbar>
          </Container>
        </AppBarRootStyle> */}
      {/* <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box> */}
      {/* <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop> */}
      <Box component="main" sx={{ flexGrow: 1, marginTop: "6.5rem" }}>
        {/* <Container maxWidth="xl"> */}
        <DrawerHeader />
        {children}
        {/* <Chat /> */}
        {/* </Container> */}
      </Box>
      <CssBaseline />
      <Box sx={{ background: "#000000", paddingTop: "40px" }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  marginBottom: "40px",
                  fontWeight: "bold",
                }}
              >
                <img
                  src="/assets/images/logo/freshfumeslogo.png"
                  alt=""
                  style={{ width: "150px", height: "90px" }}
                />
              </Typography>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                {<HouseRoundedIcon />}
                <span style={{ marginLeft: "10px" }}>
                  6270 route 209 Kerhonkson ny 12446
                </span>
              </Link>
              <Link
                href="tel:8456336739"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                <CallRoundedIcon />
                <span style={{ marginLeft: "10px" }}>{call}</span>
              </Link>
              <Link
                href="mailto:freshfumes18@gmail.com"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                <EmailRoundedIcon />
                <span style={{ marginLeft: "10px" }}>{mail}</span>
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  marginBottom: "40px",
                  fontWeight: "bold",
                }}
              >
                About Us
              </Typography>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                Contact Us
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                FAQ
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                Privacy Policy
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  marginBottom: "40px",
                  fontWeight: "bold",
                }}
              >
                Support
              </Typography>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                Refund - Return Policy
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                Track Order
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                Shipping
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                Terms and Condition
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                24 / 7 Customer Support
              </Link>
            </Grid>
            <Grid
              item
              xs={12}
              sm={6}
              md={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  marginBottom: "40px",
                  fontWeight: "bold",
                }}
              >
                FRESH FUMES
              </Typography>
              <Link
                // href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                Lorem ipsum dolor sit amet consectetur. Elementum ut adipiscing
                hendrerit dignissim. Duis viverra ultrices est est neque sed
                magna pellentesque. Urna maecenas pretium in dolor faucibus dui
                vivamus egestas orci
              </Link>
              <div style={{ display: "flex" }}>
                <Link href="https://www.instagram.com/" target="_blank">
                  <IconButton
                    sx={{
                      borderRadius: "10px",
                      //   backgroundColor: "rgba(0, 0, 0, 0.1)",
                      //   marginBottom: "8px",
                    }}
                  >
                    <img src="/assets/images/icons/Instagram.png" alt="" />
                  </IconButton>
                </Link>
                <Link href="https://www.facebook.com/" target="_blank">
                  <IconButton
                    sx={{
                      borderRadius: "10px",
                      //   backgroundColor: "rgba(0, 0, 0, 0.1)",
                      //   marginBottom: "8px",
                    }}
                  >
                    <img src="/assets/images/icons/Facebook.png" alt="" />
                  </IconButton>
                </Link>
                <Link href="https://www.snapchat.com/" target="_blank">
                  <IconButton
                    sx={{
                      borderRadius: "10px",
                      // backgroundColor: "rgba(255, 255, 255, 1)",
                      //   marginBottom: "8px",
                    }}
                  >
                    <img src="/assets/images/icons/Snapchat.png" alt="" />
                  </IconButton>
                </Link>
                <Link href="https://twitter.com/login?lang=en" target="_blank">
                  <IconButton
                    sx={{
                      borderRadius: "10px",
                      //   backgroundColor: "rgba(0, 0, 0, 0.1)",
                      //   marginBottom: "8px",
                    }}
                  >
                    <img src="/assets/images/icons/Twitter.png" alt="" />
                  </IconButton>
                </Link>
              </div>
              {/* <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                <Facebook />
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                <Instagram />
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                <Twitter />
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </Link>
              <Link
                href="#"
                variant="body1"
                sx={{
                  color: "white",
                  marginBottom: "20px",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                <YouTube />
                <span style={{ marginLeft: "10px" }}>YouTube</span>
              </Link> */}
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            background: "#111",
            borderTop: "1px solid #444",
            paddingTop: "20px",
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="body2"
              align="center"
              sx={{ color: "#aaa", marginBottom: "10px" }}
            >
              &copy; All Copyright Reserved by{" "}
              <Link
                href="#"
                variant="body2"
                sx={{
                  color: "#aaa",
                  marginBottom: "20px",
                  textDecoration: "none",
                  "&:hover": { color: hoverColor, transition: "200ms ease-in" },
                }}
              >
                FRESH FUMES
              </Link>
            </Typography>
            {/* <Typography variant="body2" align="center" sx={{ color: "#aaa" }}>
              Created with ❤️ by Your Name
            </Typography> */}
          </Container>
        </Box>
      </Box>
      <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth />
    </div>
  );
}
