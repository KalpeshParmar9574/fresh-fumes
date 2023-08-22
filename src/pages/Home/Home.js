import DashboardLayout from "../../layouts/dashboard";
import * as React from "react";
function Home() {

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