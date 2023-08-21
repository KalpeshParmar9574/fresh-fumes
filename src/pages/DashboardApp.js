import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import DashboardLayout from "../layouts/dashboard";
import InterviewList from "./InterviewList";
import NewsFeed from "./NewsFeed";
import Calendar from "./Calendar";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedIn";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStats";
import PersonRoundedIcon from "@mui/icons-material/Person";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import PolicyRoundedIcon from "@mui/icons-material/PolicyRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import {
  getDashboard,
  getNotification,
  getLincenceNotification,
} from "../redux/dashboard/dashboardThunk";

import {
  Employees,
  EmployeeJoining,
  EmployeeExiting,
  Leads,
} from "../components/_dashboard/app";
import Loader from "../components/Loader";
import { currentMonth } from "../utils/currentMonth";
import LocalStorage from "../service/localStorage";
import "./Dashboard.css";
import { encryption } from "../utils/encodeString";
import { getViewVisible, getEditVisible } from "../utils/userPermission";
import { getUserPermissionByRoll } from "../redux/userPermission/userPermissionthunk";
import { Box } from "@mui/system";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Paper,
  Stack,
  styled,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { isMobile } from "react-device-detect";
import Feed from "./Feed";

const Item = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DashboardApp() {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const userName = useSelector((state) => state.auth.fullName);
  // const data = useSelector((state) => state.dashboard.data);
  // const loading = useSelector((state) => state.dashboard.loading);
  // const error = useSelector((state) => state.dashboard.error);
  // const notification = useSelector((state) => state.dashboard.notification);
  // const lincenceNotification = useSelector((state) => state.dashboard.lincenceNotification);

  /* const Permission = useSelector((state) => {
		console.log(state.auth.userPermissions);
	}); */

  // (function () {
  // 	if (window.localStorage) {
  // 		if (
  // 			!localStorage.getItem("sidebarSet") &&
  // 			localStorage.getItem("userPermissions")
  // 		) {
  // 			localStorage["sidebarSet"] = true;
  // 			window.location.reload();
  // 		}
  // 	}
  // })();

  // useEffect(() => {
  // 	dispatch(getDashboard({ date: currentMonth() }));
  // 	dispatch(getNotification({}));
  // 	if(getViewVisible('vmMaster')){
  // 	dispatch(getLincenceNotification({}));
  // 	}
  // }, []);

  // if (loading) {
  // 	return <Loader />;
  // }

  //   const newNotification = (notification)=>{
  // 	const newArray = notification.reduce((acc, obj) => {
  // 		const hrIndex = acc.findIndex((item) => item.hrName === obj.hrName);
  // 		const employee = { id: obj.id, candidateName: obj.candidateName };
  // 		if (hrIndex !== -1) {
  // 		  acc[hrIndex].employe.push(employee);
  // 		} else {
  // 		  acc.push({ hrName: obj.hrName, employe: [employee] });
  // 		}
  // 		return acc;
  // 	  }, []);
  // 	  return newArray;
  //   }

  let menuLink = [
    {
      title: "Investment Declaration Form",
      imagesrc: "/assets/images/InvenstmentForm.png",
      bgColor: "#FBF3EA",
      Icon: <AssignmentRoundedIcon sx={{ color: "#E3B375" }} />,
      nevigateLink: "/investmentdeclaration",
    },
    {
      title: "Submit Evaluation",
      imagesrc: "/assets/images/submitEvaluation.png",
      bgColor: "#EEFBEA",
      Icon: <AssignmentTurnedInRoundedIcon sx={{ color: "#91E374" }} />,
      nevigateLink: "/evaluation",
    },
    {
      title: "Raise A Query",
      imagesrc: "/assets/images/InvenstmentForm.png",
      bgColor: "#EAF1FB",
      Icon: <QueryStatsRoundedIcon sx={{ color: "#78A3E4" }} />,
      nevigateLink: "/raiseQuery",
    },
    {
      title: "Profile",
      imagesrc: "/assets/images/InvenstmentForm.png",
      bgColor: "#FBEAF9",
      Icon: <PersonRoundedIcon sx={{ color: "#E374D8" }} />,
      nevigateLink: "/profile",
    },
    {
      title: "Assets",
      imagesrc: "/assets/images/InvenstmentForm.png",
      bgColor: "#F5F3F0",
      Icon: <CurrencyRupeeRoundedIcon sx={{ color: "#AE9E86" }} />,
      nevigateLink: "/assets",
    },
    {
      title: "Documents",
      imagesrc: "/assets/images/InvenstmentForm.png",
      bgColor: "#EAF8FB",
      Icon: <FolderRoundedIcon sx={{ color: "#74CFE3" }} />,
      nevigateLink: "/documents",
    },
    {
      title: "Policy",
      imagesrc: "/assets/images/InvenstmentForm.png",
      bgColor: "#FBEAEA",
      Icon: <PolicyRoundedIcon sx={{color:"#E37474"}} />,
      nevigateLink: "/policy",
    },
  ];
  return (
    // <div className="view_employee view_asset employee">
    <Container maxWidth="xl">
      <div
        className="container-fluid"
        style={{ marginTop: "20px" }}
      
      >
       <Grid container spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }} >
            <Grid
              item
              xs={4}
              sm={8}
              md={3}
              style={isMobile ? {paddingLeft:'10px',paddingTop:'10px'}:{}}>
              
        <Card>
          {menuLink.map((data, index) => (
            <div key={index} style={{ display: "flex", alignItems: "center" }}>
              <Link
                to={data.nevigateLink}
                underline="none"
                style={{textDecoration:'none',margin:"10px 20px",color:'black',fontWeight:'600'}}
                className="menu-link"
                
              >
                <IconButton>{data.Icon}</IconButton>
                <span className="menu-link-span">{data.title}</span>
              </Link>
            </div>
          ))}
        </Card>
            </Grid>
            <Grid item xs={4} sm={8} md={9} >
          <Feed/>
          <Feed/>
          <Feed/>
          </Grid>
        </Grid>
      </div>

      {/* <div
        style={
          isMobile
            ? { width: "100%" }
            : {
                width: "100%",
                margin: "auto",
                display: "flex",
              }
        }
      >
        <div
          style={
            isMobile
              ? { width: "100%" }
              : { width: "24%",marginLeft : 'auto',marginRight : 'auto' }
          }
        >
          <ProfileCard />
        </div>
        <div style={isMobile ? {width: "100%"} : { width: "72%" ,marginLeft : 'auto',marginRight : 'auto'}}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {MenuLink.map((data, index) => (
              <Grid
                item
                xs={4}
                sm={4}
                md={4}
                key={index}
                sx={{cursor: "pointer"}}
                onClick={() => navigate(`${data.nevigateLink}`)}
              > */}
      {/* <Item> */}
      {/* <Card> */}
      {/* <CardHeader
                    avatar={
                      <Avatar
                        sx={{
                          bgcolor: data.bgColor,
                          width: "50px",
                          height: "50px",
                        }}
                        aria-label="recipe"
                      >
                        {data.Icon}
                      </Avatar>
                    }
                    sx={{ padding: "10px 10px 10px 10px" }} */}
      {/* // action={
                    //   <IconButton aria-label="settings">
                    //     <MoreVertIcon />
                    //   </IconButton>
                    // }
                    // title="Shrimp and Chorizo Paella"
                    // subheader="September 14, 2016" */}
      {/* /> */}

      {/* <CardContent sx={{ padding: "10px 10px 10px 10px" }}>
                    <Typography variant="body2" color="text.dark">
                      {data.title}
                    </Typography>
                  </CardContent>
                  <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> */}
      {/* </Card> */}
      {/* {
            MenuLink.map(data => (
                <Grid item
                      key={`GridItem-${data.id}`} xs={12} sm={6} md={4} lg={2} xl={1}
                >
                    <Box
                        display="flex"
                        flexDirection="column"
                        style={{height: '100%', backgroundColor: 'purple'}}
                    >
                        <Card>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        // title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {data}
        </Typography>
      </CardContent>
       <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions> 
    </Card>
                    </Box>
                </Grid>
            ))
        } */}
      {/* </Item> */}
      {/* </Grid>
            ))}
          </Grid>
        </div>
      </div> */}
    </Container>
    // </div>
  );
}

const componentConfig = {
  component: DashboardApp,
  path: "/dashboard",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: null,
  sidebar: true,
};

export default componentConfig;
