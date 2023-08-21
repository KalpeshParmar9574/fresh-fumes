import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTheme, useMediaQuery, Divider, List, ListItem, ListItemButton, ListItemText, AppBar, Drawer, Container } from "@mui/material";
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
const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];
const AppBarRootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow:
    " 0 0 2px 0 rgba(145 158 171 0.24), 0 16px 32px -4px rgba(145 158 171 0.24)",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: "transparent",
  // backgroundColor: alpha(theme.palette.common.white, 1.00),
  // zIndex: '1',
}));
// Define your other styled components here

export default function MiniDrawer(props) {
  const { children,window } = props;
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

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className="background-color">
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBarRootStyle position="fixed" component="nav">
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
        </AppBarRootStyle>
        <CssBaseline />
        <Box component="nav">
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
        </Box>
        {/* <ScrollTop {...props}>
          <Fab size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop> */}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            marginTop: isSmallScreen ? "2rem" : "1rem",
            marginBottom: "2rem",
          }}
          id="back-to-top-anchor"
        >
          {/* <DrawerHeader /> */}
          {children}
        </Box>
      </Box>
    </div>
  );
}
