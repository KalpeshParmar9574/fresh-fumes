import { useNavigate, useParams } from "react-router-dom";
import { decryption } from "../../utils/encodeString";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { isMobile } from "react-device-detect";
import { ViewSubmittedEvaluationById } from "../../redux/evaluation/evaluationThunk";
import DashboardLayout from "../../layouts/dashboard";
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import {
  currentEvaluationMonthFormat,
  getMonthDates,
  monthYearStringFormat,
  pastMonthStringFormat,
} from "../../utils/dateFormat";
import Loader from "../../components/Loader";
import { ShowDivider } from "./ShowDivider";

function ViewEvaluation() {
  const navigate = useNavigate();
  const loading = useSelector((state) => state.evaluation.loading);
  const evaluation = useSelector((state) => state.evaluation);
  const [sectionAverage, setSectionAverage] = useState([]);
  const [totalAverage, setTotalAverage] = useState(0);
  // console.log("EVALUATION___",evaluation)
  let { id } = useParams();
  let submitId = decryption(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ViewSubmittedEvaluationById({ submitevalutionid: submitId }))
      .unwrap()
      .catch((err) => {
        // navigate("/candidate");
      });
  }, []);
  // console.log("___EVALUATION___", evaluation);
  useEffect(() => {
    let averageRatingArray =
      evaluation?.viewSubmittedEvaluationData?.submitEvalutionDetail;
    let rating = 0;
    let totalRating = 0;
    let minusAverage = 0;
    let TextField = 0;
    if (!averageRatingArray?.[0]?.averageRating) {
      averageRatingArray = averageRatingArray?.map((section) => ({
        ...section,
        averageRating: 0,
        textField: 0,
      }));
    }

    // console.log("____AVERAGE____RATING____",averageRatingArray)

    averageRatingArray?.map((item) => {
      item?.questions?.map((ans) => {
        if (ans?.question?.answerType == "Rating") {
          rating += parseInt(ans?.answer);
          // console.log("RATING",rating)
        } else {
          TextField += 1;
        }
        //   console.log("ANSWER____",ans?.answer)
        //   rating+=parseInt(ans?.answer)
        // console.log("RATING",rating)
      });
      item.averageRating = rating / (item?.questions?.length - TextField);
      item.textField = TextField;
      rating = 0;
      TextField = 0;
    });
    setSectionAverage(averageRatingArray);
    averageRatingArray?.map((item) => {
      if (item?.questions?.length == item?.textField) {
        item.avarageRating = 0;
        minusAverage += 1;
      } else {
        if (item?.questions?.length == 0) {
          minusAverage += 1;
          // totalRating+=0
        } else {
          totalRating += item?.averageRating;
        }
      }
    });
    totalRating = totalRating / (averageRatingArray?.length - minusAverage);
    setTotalAverage(totalRating);
  }, [evaluation?.viewSubmittedEvaluationData]);

  const handleaverageRatingShow = (section) => {
    // debugger;
    // console.log("SECTION________",sectionAverage)
    for (let i = 0; i < sectionAverage?.length; i++) {
      if (sectionAverage[i]?.sectionName == section?.sectionName) {
        if (sectionAverage[i]?.textField == section?.questions?.length) {
          // console.log("SECTION________",section,sectionAverage,true)
          return false;
        } else {
          return true;
        }
      }
    }
  };

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Typography variant="h4" gutterBottom>
          View Evaluation Form
        </Typography>
        <Stack direction="row" alignItems="center">
          {/* <LoadingButton
							loading={isSubmitting}
							variant="contained"
							type="submit"
							sx={{ marginRight: "15px" }}
						>
							Save
						</LoadingButton> */}
          <Button
            // onClick={() => navigate("/evaluation")}
            onClick={() => navigate(-1)}
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Stack>
      </Stack>
      {loading ? <Loader />
      : (
        <Card sx={{ padding: "10px", marginLeft: "10px", marginRight: "10px" }}>
          <Box sx={{ marginTop: "10px" }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sx={{ marginBottom: "5px" }}>
                <Typography variant="body1" sx={{ marginLeft: "10px",fontSize:'18px' }}>
                  {evaluation?.viewSubmittedEvaluationData?.submittedByEmployee
                    ?.firstName &&
                  evaluation?.viewSubmittedEvaluationData?.submittedByEmployee
                    ?.lastName
                    ? <>
                    <strong>By:- </strong>
                     {" "+evaluation?.viewSubmittedEvaluationData
                        ?.submittedByEmployee?.firstName +
                      " " +
                      evaluation?.viewSubmittedEvaluationData
                        ?.submittedByEmployee?.lastName
                     }</>: ""}
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: "10px",fontSize:'18px' }}>
                  {evaluation?.viewSubmittedEvaluationData?.submittedForEmployee
                    ?.firstName &&
                  evaluation?.viewSubmittedEvaluationData?.submittedForEmployee
                    ?.lastName
                    ? <>
                    <strong>For:- </strong>
                      {" "+evaluation?.viewSubmittedEvaluationData
                        ?.submittedForEmployee?.firstName +
                      " " +
                      evaluation?.viewSubmittedEvaluationData
                        ?.submittedForEmployee?.lastName}
                    </>: ""}
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: "10px",fontSize:'18px' }}>
                  {getMonthDates(
                      evaluation?.viewSubmittedEvaluationData?.startMonth,
                      evaluation?.viewSubmittedEvaluationData?.startYear
                    )?.startDate ? <>
                    <strong>Evaluation Period From :-</strong>
                    {" "+getMonthDates(
                      evaluation?.viewSubmittedEvaluationData?.startMonth,
                      evaluation?.viewSubmittedEvaluationData?.startYear
                    )?.startDate} </>: ""}
                </Typography>
                <Typography variant="body1" sx={{ marginLeft: "10px",fontSize:'18px' }}>
                  {getMonthDates(
                      evaluation?.viewSubmittedEvaluationData?.endMonth,
                      evaluation?.viewSubmittedEvaluationData?.endYear
                    )?.endDate ? <>
                    <strong>Evaluation Period To:- </strong>
                    {" "+getMonthDates(
                      evaluation?.viewSubmittedEvaluationData?.endMonth,
                      evaluation?.viewSubmittedEvaluationData?.endYear
                    )?.endDate} </>: ""}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginLeft: "10px", marginTop: "15px",fontSize:'18px' }}
                >
                  {totalAverage > 0
                    ? <>
                    <strong>Total Average Rating:- </strong>{" "+totalAverage.toFixed(2) || 0.0}
                    </>: ""}
                </Typography>
              </Grid>
            </Grid>
            {evaluation?.viewSubmittedEvaluationData?.submitEvalutionDetail?.map(
              (section, index) =>
                section?.questions?.length > 0 ? (
                  <React.Fragment key={index}>
                    {ShowDivider(
                      evaluation?.viewSubmittedEvaluationData
                        ?.submitEvalutionDetail,
                      index
                    ) && (
                      <Divider
                        sx={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                    )}
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        marginTop: "5px",
                        marginBottom: "10px",
                        paddingLeft: "0px",
                        marginLeft: "-14px",
                      }}
                    >
                      <Grid
                        item
                        xs={4}
                        sm={8}
                        md={12}
                        sx={
                          isMobile
                            ? {
                                display: "flex",
                                marginTop: "auto",
                                marginBottom: "auto",
                                textAlign: "center",
                              }
                            : {
                                display: "flex",
                                marginTop: "auto",
                                marginBottom: "auto",
                                textAlign: "left",
                              }
                        }
                      >
                        <Typography
                          variant="h6"
                          sx={
                            isMobile
                              ? {
                                  marginRight: "10px",
                                  textAlign: "center",
                                }
                              : { marginRight: "10px", textAlign: "left" }
                          }
                        >
                          Section:- {section?.sectionName}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={
                            isMobile
                              ? {
                                marginLeft:'10px',marginTop:'auto',marginBottom:'auto',textAlign: "center",
                                }
                              : { marginLeft:'10px',marginTop:'auto',marginBottom:'auto',textAlign: "left" }
                          }
                        >
                          {handleaverageRatingShow(section)
                            ? "Average Rating:- " +
                              (sectionAverage?.[index]?.averageRating?.toFixed(
                                2
                              ) || 0.0)
                            : ""}
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={4}
                        sm={8}
                        md={12}
                        sx={{ marginTop: "auto", marginBottom: "auto" }}
                      >
                        {section?.questions?.map((question, index1) => (
                          <Grid
                            container
                            spacing={{ xs: 2, md: 3 }}
                            columns={{ xs: 4, sm: 8, md: 12 }}
                            key={index1}
                            sx={{ marginTop: "10px", marginBottom: "10px" }}
                          >
                            <Grid item xs={4} sm={4} md={6}>
                              <Typography
                                variant="body1"
                                sx={{
                                  marginLeft: "10px",
                                  marginTop: "auto",
                                  marginBottom: "auto",
                                }}
                              >
                                {index1 + 1}. {question?.question?.title}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={4}
                              sm={4}
                              md={6}
                              sx={
                                isMobile
                                  ? { textAlign: "center" }
                                  : { marginTop: "auto", marginBottom: "auto" }
                              }
                            >
                              {question?.question?.answerType == "Rating" && (
                                <Rating
                                  name="read-only"
                                  value={question?.answer}
                                  style={
                                    isMobile
                                      ? { textAlign: "center" }
                                      : {
                                          marginTop: "auto",
                                          marginBottom: "auto",
                                        }
                                  }
                                  readOnly
                                />
                              )}
                              {question?.question?.answerType == "Text" && (
                                <Typography
                                  variant="body1"
                                  sx={
                                    isMobile
                                      ? { textAlign: "center" }
                                      : {
                                          marginLeft: "10px",
                                          marginTop: "auto",
                                          marginBottom: "auto",
                                        }
                                  }
                                >
                                  Answer:- {question?.answer}
                                </Typography>
                              )}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ) : (
                  ""
                )
            )}
            {evaluation?.viewSubmittedEvaluationData?.isProbationEvaluation ? (
              <Grid
                container
                spacing={3}
                style={{ paddingLeft: "20px", paddingRight: "20px" }}
              >
                <Grid item xs={12}>
                  <Divider sx={{ marginBottom: "5px", marginTop: "5px" }} />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                    {evaluation?.viewSubmittedEvaluationData?.comments
                      ? "Commented:- " +
                        evaluation?.viewSubmittedEvaluationData?.comments
                      : ""}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                    {evaluation?.viewSubmittedEvaluationData
                      ?.trainingDevelopement
                      ? "Training and/or Development Needs:- " +
                        evaluation?.viewSubmittedEvaluationData
                          ?.trainingDevelopement
                      : ""}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "10px", marginTop: "10px" }}
                  >
                    {evaluation?.viewSubmittedEvaluationData?.actionsAgreedTo
                      ? "Actions Agreed:- " +
                        evaluation?.viewSubmittedEvaluationData?.actionsAgreedTo
                      : ""}
                  </Typography>
                </Grid>
              </Grid>
            ) : (
              ""
            )}
          </Box>
        </Card>
      )}
    </Container>
  );
}

const componentConfig = {
  component: ViewEvaluation,
  path: "/viewevaluation/:id",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: "evaluation",
  sidebar: true,
};

export default componentConfig;
