import React, { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../layouts/dashboard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TreeView from "@mui/lab/TreeView";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import TreeItem from "@mui/lab/TreeItem";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link as RouterLink } from "react-router-dom";
import Button from "@mui/material/Button";
// import { getGeneratedAssetsById } from "../../../../redux/assets/thunk";
import moment from "moment";
import Divider from "@mui/material/Divider";
import "./ViewAssets.css";
import { Chip, Link } from "@mui/material";
// import { BASE_URL } from "../../../../constants";
import Loader from "../../components/Loader";
// import { decryption, encryption } from "../../../../utils/encodeString";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { decryption, encryption } from "../../utils/encodeString";
import localStorage from "../../service/localStorage";
import { getEmployeeAssetsFromApp } from "../../redux/assets/thunk";
import { BASE_URL } from "../../constants";
// import { updateEmployeeProfile } from "../../../../redux/employee/employeeThunk";
// import { getEditVisible } from "../../../../utils/userPermission";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function ViewAssets() {
  const dispatch = useDispatch();
  // const userId = decryption(localStorage.getItem("userID"));
  const userId = 127;
  // console.log("USERID", userId);
  const [value, setValue] = React.useState(0);
  const [assets, setAssets] = React.useState([]);
  const [currentAsset, setCurrentAsset] = React.useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await dispatch(getEmployeeAssetsFromApp(Number(userId)));
        if (data?.payload?.status === 200) {
          // console.log("DTATATTA", data?.payload?.data);
          const assets = data?.payload?.data?.asset;
          const generatedItems = assets?.map((asset) => {
            // console.log("asset", assets);
            let modifiedArray = asset?.generatedAsset.generatedAssetItems;
            const arrayUniqueByKey = [
              ...new Map(
                modifiedArray.map((item) => [item["assetItemGroupId"], item])
              ).values(),
            ];
            // console.log("MODIFIEDARRAY", arrayUniqueByKey);
            let newGeneratedAssetItems = {};
            arrayUniqueByKey.map((p) => {
              let newObj = [];
              modifiedArray.map((c) => {
                if (c.assetItemGroupId === p.assetItemGroupId) {
                  newObj.push(c);
                }
              });

              newGeneratedAssetItems[`${p?.item?.name}`] = newObj;
            });

            return {
              ...asset,
              shownewGeneratedAssetItems: newGeneratedAssetItems,
            };
          });

          await setAssets(generatedItems);
          await setCurrentAsset(generatedItems[0]);
          // console.log("RESULT___________01", generatedItems);
        } else {
          // console.log("DATA", data);
        }
      } catch (error) {
        console.log("Error occurred:", error);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setCurrentAsset(assets[newValue]);
  };
  const {
    data,
    loading,
    sortBy,
    orderBy,
    totalRecords,
    limit,
    currentPage,
    totalPages,
    status,
    error,
  } = useSelector((state) => state.assetForApp);

  const getAssetImage = (assetName) => {
    let asset = assetName.toLowerCase();
    if (asset === "ram") {
      return "/assets/images/icon-ram.svg";
    } else if (asset === "monitor") {
      return "/assets/images/icon-monitor.svg";
    } else if (asset === "storage disk") {
      return "/assets/images/icon-storageDisk.svg";
    } else if (asset === "headphone") {
      return "/assets/images/icon-headphone.svg";
    } else {
      return "/assets/images/icon-motherboard.svg";
    }
  };

  const fileInput = useRef(null);
  // console.log(data, "DATA");
  // console.log(assets, "ASSETS");
  // console.log("currentAsset",currentAsset)

  return (
    <div className="view_employee view_asset">
      <Container maxWidth="xl" sx={{ background: "#C8E5F1" }}>
        {/* <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      mb={2}
      sx={{
        position: "sticky",
        top: "64px",
        backdropFilter: "blur(6px)",
        backgroundColor: "rgba(255, 255, 255, 0.72)",
        padding: "10px 0",
        zIndex: 1,
      }}
    >
      <Typography variant="h4" gutterBottom>
        Asset Info
      </Typography>
          */}
        <Stack direction="row" justifyContent="flex-end" mb={2}>
          <Button
            variant="contained"
            component={RouterLink}
            to="/dashboard"
            startIcon={<ArrowBackIcon />}
            style={{ marginLeft: "10px" }}
          >
            Back To List
          </Button>
        </Stack>
        {loading ? (
          <Loader />
        ):
        <Stack direction="row" spacing={2.5}>
          <Stack sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", typography: "body1" }}>
              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <TabList
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    {assets?.map((asset, index) => (
                      <Tab
                        label={asset?.generatedAsset?.assetMaster?.name}
                        value={index}
                      />
                    ))}
                  </TabList>
                </Box>
                {assets?.map((asset, index) => (
                  <TabPanel value={index}>
                    <Stack
                      className="title"
                      direction="row"
                      spacing={1.5}
                      mb={1}
                    ></Stack>
                    <Stack className="white-area" mb={2.5}>
                      <Grid
                        container
                        spacing={2.5}
                        p={3}
                        className="configurations"
                        // columns={{ xs: 4, sm: 8, md: 12 }}
                        // xs={12}
                      >
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems[
                            "Processor"
                          ] && (
                            <>
                              {" "}
                              <Grid item xs={12} sm={6} md={6} lg={6}  className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-processor.svg"
                                    alt="processor-icon"
                                    width="19px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    OS & Processor
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "Processor"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {op[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems[
                            "Processor"
                          ] && (
                            <>
                              <Grid item xs={12} sm={6} md={6} lg={6} className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-motherboard.svg"
                                    alt="icon-motherboard"
                                    width="16px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    Motherboard
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {/* {data["Motherboard"].map((mb, index) =>
                      Object.keys(mb).map((assetName, index) => ( */}
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "Motherboard"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {assetName} */}
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {mb[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems[
                            "Storage Disk"
                          ] && (
                            <>
                              <Grid item xs={12} sm={6} md={6} lg={6} className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-storageDisk.svg"
                                    alt="icon-storageDisk"
                                    width="16px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    Storage Disk
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {/* {data["Motherboard"].map((mb, index) =>
                      Object.keys(mb).map((assetName, index) => ( */}
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "Storage Disk"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {assetName} */}
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {mb[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems["RAM"] && (
                            <>
                              <Grid item xs={12} sm={6} md={6} lg={6} className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-ram.svg"
                                    alt="icon-ram"
                                    width="16px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    Ram
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {/* {data["Motherboard"].map((mb, index) =>
                      Object.keys(mb).map((assetName, index) => ( */}
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "RAM"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {assetName} */}
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {mb[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems[
                            "Keyboard"
                          ] && (
                            <>
                              <Grid item xs={12} sm={6} md={6} lg={6} className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-keyboard.svg"
                                    alt="icon-motherboard"
                                    width="16px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    Keyboard
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {/* {data["Motherboard"].map((mb, index) =>
                      Object.keys(mb).map((assetName, index) => ( */}
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "Keyboard"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {assetName} */}
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {mb[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems["Mouse"] && (
                            <>
                              <Grid item xs={12} sm={6} md={6} lg={6} className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-mouse.svg"
                                    alt="icon-motherboard"
                                    width="16px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    Mouse
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {/* {data["Motherboard"].map((mb, index) =>
                      Object.keys(mb).map((assetName, index) => ( */}
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "Mouse"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {assetName} */}
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {mb[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems[
                            "Monitor"
                          ] && (
                            <>
                              <Grid item xs={12} sm={6} md={6} lg={6} className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-monitor.svg"
                                    alt="icon-monitor"
                                    width="16px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    Monitor
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {/* {data["Motherboard"].map((mb, index) =>
                      Object.keys(mb).map((assetName, index) => ( */}
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "Monitor"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {assetName} */}
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {mb[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                        {currentAsset &&
                          currentAsset?.shownewGeneratedAssetItems &&
                          currentAsset?.shownewGeneratedAssetItems[
                            "Headphone"
                          ] && (
                            <>
                              <Grid item xs={12} sm={6} md={6} lg={6} className="configuration-box">
                                <Stack
                                  className="title"
                                  direction="row"
                                  spacing={1.5}
                                  mb={1}
                                >
                                  <img
                                    src="/assets/images/icon-headphone.svg"
                                    alt="icon-headphone"
                                    width="16px"
                                  />
                                  <Typography
                                    color="#000"
                                    sx={{ fontSize: 14, fontWeight: 500 }}
                                  >
                                    Headphone
                                  </Typography>
                                </Stack>
                                <Stack className="grey-box" py={2} px={2.5}>
                                  {/* {data["Motherboard"].map((mb, index) =>
                      Object.keys(mb).map((assetName, index) => ( */}
                                  {currentAsset?.shownewGeneratedAssetItems[
                                    "Headphone"
                                  ].map((item, idx) => (
                                    <Grid container spacing={1.25}>
                                      <Grid item xs={4}>
                                        <Typography
                                          color="#808080"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {assetName} */}
                                          {item?.itemAttribute?.name}
                                        </Typography>
                                      </Grid>
                                      <Grid item xs={8}>
                                        <Typography
                                          color="#000"
                                          sx={{ fontSize: 12, fontWeight: 500 }}
                                        >
                                          {/* {mb[assetName]} */}
                                          {item?.itemAttributeValue?.value}
                                        </Typography>
                                      </Grid>
                                    </Grid>
                                  ))}
                                </Stack>
                              </Grid>
                            </>
                          )}
                      </Grid>
                    </Stack>
                  </TabPanel>
                ))}
              </TabContext>
            </Box>
          </Stack>
        </Stack>
        }
      </Container>
    </div>
  );
}

const componentConfig = {
  component: ViewAssets,
  path: "/assets",
  public: false,
  layout: DashboardLayout,
  sidebar: true,
  role: ["admin"],
};
export default componentConfig;
