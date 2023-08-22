// import * as React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import CssBaseline from "@mui/material/CssBaseline";
// import useScrollTrigger from "@mui/material/useScrollTrigger";
// import Box from "@mui/material/Box";
// import Container from "@mui/material/Container";
// import Fab from "@mui/material/Fab";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
// import Fade from "@mui/material/Fade";
import DashboardLayout from "../../layouts/dashboard";
// import IconButton from "@mui/material/IconButton";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// function ScrollTop(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//     disableHysteresis: true,
//     threshold: 100,
//   });

//   const handleClick = (event) => {
//     const anchor = (event.target.ownerDocument || document).querySelector(
//       "#back-to-top-anchor"
//     );

//     if (anchor) {
//       anchor.scrollIntoView({
//         block: "center",
//       });
//     }
//   };

//   return (
//     <Fade in={trigger}>
//       <Box
//         onClick={handleClick}
//         role="presentation"
//         sx={{ position: "fixed", bottom: 16, right: 16 }}
//       >
//         {children}
//       </Box>
//     </Fade>
//   );
// }

// ScrollTop.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// const pages = ["Products", "Pricing", "Blog"];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
// function Home(props) {
//   const [anchorElNav, setAnchorElNav] = React.useState(null);
//   const [anchorElUser, setAnchorElUser] = React.useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   return (
//     <React.Fragment>
//       {/* <AppBar position="static">
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
//             <Typography
//               variant="h6"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "none", md: "flex" },
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LOGO
//             </Typography>

//             <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>
//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: "bottom",
//                   horizontal: "left",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "left",
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: "block", md: "none" },
//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center">{page}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//             <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
//             <Typography
//               variant="h5"
//               noWrap
//               component="a"
//               href="/"
//               sx={{
//                 mr: 2,
//                 display: { xs: "flex", md: "none" },
//                 flexGrow: 1,
//                 fontFamily: "monospace",
//                 fontWeight: 700,
//                 letterSpacing: ".3rem",
//                 color: "inherit",
//                 textDecoration: "none",
//               }}
//             >
//               LOGO
//             </Typography>
//             <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
//               {pages.map((page) => (
//                 <Button
//                   key={page}
//                   onClick={handleCloseNavMenu}
//                   sx={{ my: 2, color: "white", display: "block" }}
//                 >
//                   {page}
//                 </Button>
//               ))}
//             </Box>

//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
//                   <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: "45px" }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: "top",
//                   horizontal: "right",
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//       <CssBaseline />
//       <AppBar>
//         <Toolbar>
//           <Typography variant="h6" component="div">
//             Scroll to see button
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Toolbar id="back-to-top-anchor" />
//       <Container>
//         <Box sx={{ my: 2 }}>
//           {[...new Array(12)]
//             .map(
//               () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`
//             )
//             .join("\n")}
//         </Box>
//       </Container>
//       <ScrollTop {...props}>
//         <Fab size="small" aria-label="scroll back to top">
//           <KeyboardArrowUpIcon />
//         </Fab>
//       </ScrollTop> */}
//       <Typography>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique unde
//         fugit veniam eius, perspiciatis sunt? Corporis qui ducimus quibusdam,
//         aliquam dolore excepturi quae. Distinctio enim at eligendi perferendis
//         in cum quibusdam sed quae, accusantium et aperiam? Quod itaque
//         exercitationem, at ab sequi qui modi delectus quia corrupti alias
//         distinctio nostrum. Minima ex dolor modi inventore sapiente
//         necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
//         sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
//         eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
//         temporibus beatae doloremque voluptatum doloribus soluta accusamus porro
//         reprehenderit eos inventore facere, fugit, molestiae ab officiis illo
//         voluptates recusandae. Vel dolor nobis eius, ratione atque soluta,
//         aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
//         Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
//         delectus quo eius exercitationem tempore. Delectus sapiente, provident
//         corporis dolorum quibusdam aut beatae repellendus est labore quisquam
//         praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
//         deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
//         fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
//         recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
//         debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
//         praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
//         voluptate iure labore, repellendus beatae quia unde est aliquid dolor
//         molestias libero. Reiciendis similique exercitationem consequatur, nobis
//         placeat illo laudantium! Enim perferendis nulla soluta magni error,
//         provident repellat similique cupiditate ipsam, et tempore cumque quod!
//         Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate
//         iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid
//         inventore commodi reprehenderit rerum reiciendis! Quidem alias
//         repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas
//         ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro
//         a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur
//         impedit, nam facilis libero dolorem dolores sunt inventore perferendis,
//         aut sapiente modi nesciunt.Lorem ipsum dolor sit amet consectetur
//         adipisicing elit. Similique unde fugit veniam eius, perspiciatis sunt?
//         Corporis qui ducimus quibusdam, aliquam dolore excepturi quae.
//         Distinctio enim at eligendi perferendis in cum quibusdam sed quae,
//         accusantium et aperiam? Quod itaque exercitationem, at ab sequi qui modi
//         delectus quia corrupti alias distinctio nostrum. Minima ex dolor modi
//         inventore sapiente necessitatibus aliquam fuga et. Sed numquam quibusdam
//         at officia sapiente porro maxime corrupti perspiciatis asperiores,
//         exercitationem eius nostrum consequuntur iure aliquam itaque, assumenda
//         et! Quibusdam temporibus beatae doloremque voluptatum doloribus soluta
//         accusamus porro reprehenderit eos inventore facere, fugit, molestiae ab
//         officiis illo voluptates recusandae. Vel dolor nobis eius, ratione atque
//         soluta, aliquam fugit qui iste architecto perspiciatis. Nobis,
//         voluptatem! Cumque, eligendi unde aliquid minus quis sit debitis
//         obcaecati error, delectus quo eius exercitationem tempore. Delectus
//         sapiente, provident corporis dolorum quibusdam aut beatae repellendus
//         est labore quisquam praesentium repudiandae non vel laboriosam quo ab
//         perferendis velit ipsa deleniti modi! Ipsam, illo quod. Nesciunt commodi
//         nihil corrupti cum non fugiat praesentium doloremque architecto laborum
//         aliquid. Quae, maxime recusandae? Eveniet dolore molestiae dicta
//         blanditiis est expedita eius debitis cupiditate porro sed aspernatur
//         quidem, repellat nihil quasi praesentium quia eos, quibusdam provident.
//         Incidunt tempore vel placeat voluptate iure labore, repellendus beatae
//         quia unde est aliquid dolor molestias libero. Reiciendis similique
//         exercitationem consequatur, nobis placeat illo laudantium! Enim
//         perferendis nulla soluta magni error, provident repellat similique
//         cupiditate ipsam, et tempore cumque quod! Qui, iure suscipit tempora
//         unde rerum autem saepe nisi vel cupiditate iusto. Illum, corrupti?
//         Fugiat quidem accusantium nulla. Aliquid inventore commodi reprehenderit
//         rerum reiciendis! Quidem alias repudiandae eaque eveniet cumque nihil
//         aliquam in expedita, impedit quas ipsum nesciunt ipsa ullam consequuntur
//         dignissimos numquam at nisi porro a, quaerat rem repellendus. Voluptates
//         perspiciatis, in pariatur impedit, nam facilis libero dolorem dolores
//         sunt inventore perferendis, aut sapiente modi nesciunt.Lorem ipsum dolor
//         sit amet consectetur adipisicing elit. Similique unde fugit veniam eius,
//         perspiciatis sunt? Corporis qui ducimus quibusdam, aliquam dolore
//         excepturi quae. Distinctio enim at eligendi perferendis in cum quibusdam
//         sed quae, accusantium et aperiam? Quod itaque exercitationem, at ab
//         sequi qui modi delectus quia corrupti alias distinctio nostrum. Minima
//         ex dolor modi inventore sapiente necessitatibus aliquam fuga et. Sed
//         numquam quibusdam at officia sapiente porro maxime corrupti perspiciatis
//         asperiores, exercitationem eius nostrum consequuntur iure aliquam
//         itaque, assumenda et! Quibusdam temporibus beatae doloremque voluptatum
//         doloribus soluta accusamus porro reprehenderit eos inventore facere,
//         fugit, molestiae ab officiis illo voluptates recusandae. Vel dolor nobis
//         eius, ratione atque soluta, aliquam fugit qui iste architecto
//         perspiciatis. Nobis, voluptatem! Cumque, eligendi unde aliquid minus
//         quis sit debitis obcaecati error, delectus quo eius exercitationem
//         tempore. Delectus sapiente, provident corporis dolorum quibusdam aut
//         beatae repellendus est labore quisquam praesentium repudiandae non vel
//         laboriosam quo ab perferendis velit ipsa deleniti modi! Ipsam, illo
//         quod. Nesciunt commodi nihil corrupti cum non fugiat praesentium
//         doloremque architecto laborum aliquid. Quae, maxime recusandae? Eveniet
//         dolore molestiae dicta blanditiis est expedita eius debitis cupiditate
//         porro sed aspernatur quidem, repellat nihil quasi praesentium quia eos,
//         quibusdam provident. Incidunt tempore vel placeat voluptate iure labore,
//         repellendus beatae quia unde est aliquid dolor molestias libero.
//         Reiciendis similique exercitationem consequatur, nobis placeat illo
//         laudantium! Enim perferendis nulla soluta magni error, provident
//         repellat similique cupiditate ipsam, et tempore cumque quod! Qui, iure
//         suscipit tempora unde rerum autem saepe nisi vel cupiditate iusto.
//         Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid inventore
//         commodi reprehenderit rerum reiciendis! Quidem alias repudiandae eaque
//         eveniet cumque nihil aliquam in expedita, impedit quas ipsum nesciunt
//         ipsa ullam consequuntur dignissimos numquam at nisi porro a, quaerat rem
//         repellendus. Voluptates perspiciatis, in pariatur impedit, nam facilis
//         libero dolorem dolores sunt inventore perferendis, aut sapiente modi
//         nesciunt.Lorem ipsum dolor sit amet consectetur adipisicing elit.
//         Similique unde fugit veniam eius, perspiciatis sunt? Corporis qui
//         ducimus quibusdam, aliquam dolore excepturi quae. Distinctio enim at
//         eligendi perferendis in cum quibusdam sed quae, accusantium et aperiam?
//         Quod itaque exercitationem, at ab sequi qui modi delectus quia corrupti
//         alias distinctio nostrum. Minima ex dolor modi inventore sapiente
//         necessitatibus aliquam fuga et. Sed numquam quibusdam at officia
//         sapiente porro maxime corrupti perspiciatis asperiores, exercitationem
//         eius nostrum consequuntur iure aliquam itaque, assumenda et! Quibusdam
//         temporibus beatae doloremque voluptatum doloribus soluta accusamus porro
//         reprehenderit eos inventore facere, fugit, molestiae ab officiis illo
//         voluptates recusandae. Vel dolor nobis eius, ratione atque soluta,
//         aliquam fugit qui iste architecto perspiciatis. Nobis, voluptatem!
//         Cumque, eligendi unde aliquid minus quis sit debitis obcaecati error,
//         delectus quo eius exercitationem tempore. Delectus sapiente, provident
//         corporis dolorum quibusdam aut beatae repellendus est labore quisquam
//         praesentium repudiandae non vel laboriosam quo ab perferendis velit ipsa
//         deleniti modi! Ipsam, illo quod. Nesciunt commodi nihil corrupti cum non
//         fugiat praesentium doloremque architecto laborum aliquid. Quae, maxime
//         recusandae? Eveniet dolore molestiae dicta blanditiis est expedita eius
//         debitis cupiditate porro sed aspernatur quidem, repellat nihil quasi
//         praesentium quia eos, quibusdam provident. Incidunt tempore vel placeat
//         voluptate iure labore, repellendus beatae quia unde est aliquid dolor
//         molestias libero. Reiciendis similique exercitationem consequatur, nobis
//         placeat illo laudantium! Enim perferendis nulla soluta magni error,
//         provident repellat similique cupiditate ipsam, et tempore cumque quod!
//         Qui, iure suscipit tempora unde rerum autem saepe nisi vel cupiditate
//         iusto. Illum, corrupti? Fugiat quidem accusantium nulla. Aliquid
//         inventore commodi reprehenderit rerum reiciendis! Quidem alias
//         repudiandae eaque eveniet cumque nihil aliquam in expedita, impedit quas
//         ipsum nesciunt ipsa ullam consequuntur dignissimos numquam at nisi porro
//         a, quaerat rem repellendus. Voluptates perspiciatis, in pariatur
//         impedit, nam facilis libero dolorem dolores sunt inventore perferendis,
//         aut sapiente modi nesciunt.
//       </Typography>
//     </React.Fragment>
//   );
// }

// const componentConfig = {
//   component: Home,
//   path: "/home",
//   public: false,
//   layout: DashboardLayout,
//   roles: ["admin"],
//   group: null,
//   sidebar: true,
// };

// export default componentConfig;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import Hidden from "@mui/material/Hidden";
import Divider from "@mui/material/Divider";

function Home() {
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
  const drawerList = ["News", "News", "News", "News", "Search", "Cart"];
  const appbarNames = ["News", "Search", "Cart"];
  const drawerBottomList = ["+919658741222", "Cart"];
  const drawerContent = (
    <div>
      <List>
        {drawerList?.map((item, index) => {
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
    // <Box sx={{ flexGrow: 1 }}>
    //   <AppBar position="static">
    //     <Toolbar>
    //       <Grid container alignItems="center" justifyContent="center">
    //         <Hidden smUp>
    //           <Grid item xs={2}>
    //             <IconButton
    //               edge="start"
    //               color="inherit"
    //               aria-label="menu"
    //               onClick={toggleDrawer(true)}
    //             >
    //               <MenuIcon />
    //             </IconButton>
    //           </Grid>
    //         </Hidden>
    //         <Hidden smDown>
    //           <Grid item xs={8} sm={4}>
    //             <Typography
    //               variant="h6"
    //               component="div"
    //               sx={{ textAlign: "center" }}
    //             >
    //               Mobile Number
    //             </Typography>
    //           </Grid>
    //         </Hidden>
    //         <Grid item xs={8} sm={4}>
    //           <Typography
    //             variant="h6"
    //             component="div"
    //             sx={{ textAlign: "center" }}
    //           >
    //             Call
    //           </Typography>
    //         </Grid>
    //         <Hidden smDown>
    //           <Grid item xs={8} sm={4}>
    //             <Typography
    //               variant="h6"
    //               component="div"
    //               sx={{ textAlign: "center" }}
    //             >
    //               Locate
    //             </Typography>
    //           </Grid>
    //         </Hidden>
    //         <Grid item xs={2} sm={4} />
    //       </Grid>
    //     </Toolbar>
    //     <Hidden smDown>
    //       <Toolbar>
    //         <Hidden xsDown={!isDrawerOpen}>
    //           <Grid container justifyContent="center">
    //             {drawerList?.map((item, index) => {
    //               return (
    //                 <Grid item sm={2} key={index}>
    //                   <Typography
    //                     variant="h6"
    //                     component="div"
    //                     sx={{ textAlign: "center" }}
    //                   >
    //                     {item}
    //                   </Typography>
    //                 </Grid>
    //               );
    //             })}
    //           </Grid>
    //         </Hidden>
    //         <Grid container justifyContent="center">
    //           <Hidden xsDown={!isDrawerOpen}>
    //             {appbarNames?.map((item, index) => {
    //               return (
    //                 <Grid item sm={2} key={index}>
    //                   <Typography
    //                     variant="h6"
    //                     component="div"
    //                     sx={{ textAlign: "center" }}
    //                   >
    //                     {item}
    //                   </Typography>
    //                 </Grid>
    //               );
    //             })}
    //           </Hidden>
    //         </Grid>
    //       </Toolbar>
    //     </Hidden>
    //   </AppBar>
    //   <Drawer
    //     anchor="left"
    //     open={isDrawerOpen}
    //     onClose={toggleDrawer(false)}
    //     PaperProps={{ sx: { width: 200 } }}
    //     style={{ textAlign: "center" }}
    //   >
    //     {drawerContent}
    //   </Drawer>
    // </Box>
    <>
    HELLLLOO
    </>
  );
}

const componentConfig = {
  component: Home,
  path: "/home",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;