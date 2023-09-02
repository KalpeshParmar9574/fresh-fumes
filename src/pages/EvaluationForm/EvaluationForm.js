import {
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormHelperText,
  Grid,
  Rating,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { isMobile } from "react-device-detect";
import DashboardLayout from "../../layouts/dashboard";
import { useFormik } from "formik";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {
  getEvaluationById,
  submitEvalutionForm,
} from "../../redux/evaluation/evaluationThunk";
import { decryption } from "../../utils/encodeString";
import {
  currentEvaluationMonthFormat,
  getMonthDates,
  lastMonthYearStringFormat,
  monthYearStringFormat,
  pastMonthStringFormat,
} from "../../utils/dateFormat";
import Loader from "../../components/Loader";
import { useConfirm } from "material-ui-confirm";
import employeeFormSchema from "../../validations/employeeFormSchema";
import "./table.css";
import { ShowDivider } from "./ShowDivider";
import { styled } from "@mui/system";

const StyledCheckbox = styled(Checkbox)`
  .MuiSvgIcon-root {
    fill: ${(props) => (props.error ? "red" : "#fda92d")};
  }
  .Mui-checked {
    color: ${(props) => (props.error ? "red" : "#fda92d")} !important;
  }
  .MuiFormControlLabel-label {
    color: ${(props) => (props.error ? "red" : "#fda92d")};
  }
  .MuiFormControl-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${(props) => (props.error ? "red" : "#fda92d")} !important;
  }
`;

function EvaluationForm() {
  const confirm = useConfirm();
  const [sectionAverage, setSectionAverage] = useState([]);
  const [totalAverage, setTotalAverage] = useState(0.0);
  const evaluation = useSelector((state) => state.evaluation);
  const loading = useSelector((state) => state.evaluation.loading);
  // console.log("EVALUATION_DATA_______REDUX__", evaluation);
  let { id } = useParams();
  let decryptId = id?.split("&&&&");
  let submitId = decryption(decryptId[0]);
  let evalutionId = decryption(decryptId[1]);
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      getEvaluationById({
        submittedEvaluationId: submitId,
        evalutionId: evalutionId,
      })
    )
      .unwrap()
      .then((res) => {
        setFormData(res?.data);
        // console.log("RES",res)
      });
  }, []);
  useEffect(() => {
    formData?.evalutionquestion?.map((section, index) =>
      setFieldValue(`question[${index}]`, {
        sectionName: section?.sectionName,
        avarageRating: 0.0,
        textField: 0,
        answers: [],
      })
    );
    formData?.evalutionquestion?.map((section, index) =>
      section?.questions?.map((question, index1) => {
        if (question?.questionmaster?.answerType == "Text") {
          setFieldValue(`question[${index}].answers[${index1}]`, {
            questionId: question?.questionId,
            answer: "",
            answerType: question?.questionmaster?.answerType,
          });
        } else {
          setFieldValue(`question[${index}].answers[${index1}]`, {
            questionId: question?.questionId,
            answer: 0,
            answerType: question?.questionmaster?.answerType,
          });
        }
      })
    );
  }, [formData]);

  const navigate = useNavigate();
  const {
    values,
    handleChange,
    handleSubmit,
    touched,
    errors,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      question: [],
      comments: "",
      trainingDevelopement: "",
      actionsAgreed: "",
      agreed: "",
    },
    validationSchema: employeeFormSchema(
      formData?.submitEvaluation?.isProbationEvaluation
    ),
    onSubmit: async (values) => {
      let submitObj = {
        submitEvalutionId: submitId,
        question: values?.question,
        trainingDevelopement: values?.trainingDevelopement,
        comments: values?.comments,
        actionsAgreedTo: values?.actionsAgreed,
      };
      await confirm({
        description: `You want to Submit Evaluation?`,
      });
      await dispatch(submitEvalutionForm(submitObj)).unwrap();
      navigate("/evaluation");
    },
  });
  // console.log("_____VALUES____", values);
  useEffect(() => {
    let rating = 0;
    let totalRating = 0;
    let minusAverage = 0;
    let TextField = 0;
    values?.question?.map((item) => {
      item?.answers?.map((ans) => {
        if (ans?.answerType == "Rating") {
          rating += parseInt(ans?.answer);
          // console.log("RATING",rating)
        } else {
          TextField += 1;
        }
      });
      item.avarageRating = rating / (item?.answers?.length - TextField);
      item.textField = TextField;
      // console.log(item.avarageRating,rating/item?.answers?.length)
      rating = 0;
      TextField = 0;
    });
    setSectionAverage(values?.question);
    values?.question?.map((item) => {
      if (item?.answers?.length == item?.textField) {
        item.avarageRating = 0;
        minusAverage += 1;
      } else {
        if (item?.answers?.length == 0) {
          minusAverage += 1;
          // totalRating+=0
        } else {
          totalRating += item?.avarageRating;
        }
      }
    });
    totalRating = totalRating / (values?.question?.length - minusAverage);
    setTotalAverage(totalRating);
  }, [values?.question]);
  // console.log("FORMIK_ERRORS___", errors);

  const handleratingChange = (event, question, index, index1) => {
    // console.log("EVENT",event.target.value)
    setFieldValue(
      `question[${index}].answers[${index1}].answer`,
      event.target.value
    );
    // let rating=0
    sectionAverage[index].answers[index1].answer = event.target.value;
    setSectionAverage(sectionAverage);
  };

  const handleaverageRatingShow = (section) => {
    // debugger;
    // console.log("SECTION________",section,values?.question)
    for (let i = 0; i < values?.question?.length; i++) {
      if (values?.question[i]?.sectionName == section?.sectionName) {
        if (values?.question[i]?.textField == section?.questions?.length) {
          // console.log("SECTION________",section,values?.question,true)
          return false;
        } else {
          return true;
        }
      }
    }
  };
  const handleAgreed = (event) => {
    // console.log("Values", values);
    // console.log("event.target.value", event.target.checked);
    setFieldValue(`agreed`, event.target.checked);
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
          Evaluation Form
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
            onClick={() => navigate("/evaluation")}
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Stack>
      </Stack>
      {loading ? (
        <Loader />
      ) : (
        <Card sx={{ padding: "10px" }}>
          <Box sx={{ marginTop: "10px" }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "10px", fontSize: "18px" }}
                  >
                    {formData?.submitEvaluation?.submittedByEmployee
                      ?.firstName &&
                    formData?.submitEvaluation?.submittedByEmployee
                      ?.lastName ? (
                      <>
                        <strong>By:- </strong>
                        {" " +formData?.submitEvaluation?.submittedByEmployee
                          ?.firstName +
                          " " +
                          formData?.submitEvaluation?.submittedByEmployee
                            ?.lastName}
                      </>
                    ) : (
                      ""
                    )}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ marginLeft: "10px", fontSize: "18px" }}
                  >
                    {formData?.submitEvaluation?.submittedForEmployee
                      ?.firstName &&
                    formData?.submitEvaluation?.submittedForEmployee
                      ?.lastName ? (
                      <>
                        <strong>For:- </strong>
                        {" " +formData?.submitEvaluation?.submittedForEmployee
                          ?.firstName +
                          " " +
                          formData?.submitEvaluation?.submittedForEmployee
                            ?.lastName}
                      </>
                    ) : (
                      ""
                    )}
                  </Typography>
                  <Typography variant="body1" sx={{ marginLeft: "10px",fontSize:'18px' }}>
                    {getMonthDates(
                      formData?.submitEvaluation?.startMonth,
                      formData?.submitEvaluation?.startYear
                    )?.startDate
                      ? 
                      <>
                      <strong>Evaluation Period From :- </strong>
                      {
                        " "+getMonthDates(
                          formData?.submitEvaluation?.startMonth,
                          formData?.submitEvaluation?.startYear
                        )?.startDate
                        }
                        </>: ""}
                  </Typography>
                  <Typography variant="body1" sx={{ marginLeft: "10px",fontSize:'18px' }}>
                    {getMonthDates(
                      formData?.submitEvaluation?.endMonth,
                      formData?.submitEvaluation?.endYear
                    )?.endDate
                      ? <>
                      <strong>Evaluation Period To:-</strong>
                        {" "+getMonthDates(
                          formData?.submitEvaluation?.endMonth,
                          formData?.submitEvaluation?.endYear
                        )?.endDate
                        }</>: ""}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{ marginLeft: "10px", marginTop: "15px" }}
                  >
                    {totalAverage > 0
                      ? <>
                      <strong>Total Average Rating:- </strong>{" "+totalAverage.toFixed(2) ||
                        0.0}
                      </>: ""}
                  </Typography>
                </Grid>
              </Grid>
              {formData?.evalutionquestion?.map((section, index) =>
                section?.questions?.length > 0 ? (
                  <React.Fragment key={index}>
                    {ShowDivider(formData?.evalutionquestion, index) && (
                      <Divider
                        sx={{ marginBottom: "10px", marginTop: "10px" }}
                      />
                    )}
                    <Grid
                      container
                      spacing={{ xs: 2, md: 3 }}
                      columns={{ xs: 4, sm: 8, md: 12 }}
                      style={{
                        marginTop: "10px",
                        marginBottom: "10px",
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
                                  marginLeft: "10px",
                                  marginTop: "auto",
                                  marginBottom: "auto",
                                  textAlign: "center",
                                }
                              : {
                                  marginLeft: "10px",
                                  marginTop: "auto",
                                  marginBottom: "auto",
                                  textAlign: "left",
                                }
                          }
                        >
                          {/* {console.log(handleaverageRatingShow(section))} */}
                          {
                            handleaverageRatingShow(section)
                              ? sectionAverage[index]?.avarageRating > 0
                                ? "Average Rating:- " +
                                  sectionAverage[index]?.avarageRating?.toFixed(
                                    2
                                  )
                                : "Average Rating:- 0.00 "
                              : ""
                            // handleaverageRatingShow(section) ? sectionAverage[index]?.avarageRating>0 ?? "Average Rating:- "+(sectionAverage[index]?.avarageRating).toFixed(2) : ""
                          }
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
                            {/* <Grid item xs={0.5} sx={{marginTop:'auto',marginBottom:'auto'}}>
              {index+1}
                  </Grid> */}
                            <Grid
                              item
                              xs={4}
                              sm={4}
                              md={6}
                              sx={{ marginTop: "auto", marginBottom: "auto" }}
                            >
                              <Typography
                                variant="body1"
                                sx={{ marginLeft: "10px" }}
                              >
                                {index1 + 1}. {question?.questionmaster?.title}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={4}
                              sm={4}
                              md={6}
                              sx={
                                isMobile
                                  ? {
                                      marginTop: "auto",
                                      marginBottom: "auto",
                                      marginLeft: "10px",
                                      marginRight: "10px",
                                    }
                                  : {
                                      marginTop: "auto",
                                      marginBottom: "auto",
                                      marginLeft: "auto",
                                      marginRight: "auto",
                                    }
                              }
                            >
                              {question?.questionmaster?.answerType ===
                                "Text" && (
                                <TextField
                                  fullWidth
                                  label="Answer"
                                  size="small"
                                  name={`question[${index}].answers[${index1}].answer`}
                                  value={
                                    values.question[index]?.answers[index1]
                                      ?.answer
                                  }
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                  error={
                                    touched?.question?.[index]?.answers?.[
                                      index1
                                    ]?.answer &&
                                    Boolean(
                                      errors?.question?.[index]?.answers?.[
                                        index1
                                      ]?.answer
                                    )
                                  }
                                  helperText={
                                    touched?.question?.[index]?.answers?.[
                                      index1
                                    ]?.answer &&
                                    errors?.question?.[index]?.answers?.[index1]
                                      ?.answer
                                  }
                                  InputProps={{
                                    classes: {
                                      input: "custom-input",
                                      placeholder: "custom-placeholder",
                                    },
                                  }}
                                  style={
                                    isMobile
                                      ? {
                                          display: "flex",
                                          justifyContent: "center",
                                          marginLeft: "auto",
                                          marginRight: "auto",
                                          marginBottom: "10px",
                                        }
                                      : {}
                                  }
                                />
                              )}
                              {question?.questionmaster?.answerType ===
                                "Rating" && (
                                <div
                                  style={
                                    isMobile ? { textAlign: "center" } : {}
                                  }
                                >
                                  <Rating
                                    spacing={4}
                                    name={`question[${index}].answers[${index1}].answer`}
                                    value={
                                      values.question[index]?.answers[index1]
                                        ?.answer
                                    }
                                    onChange={(e) =>
                                      handleratingChange(
                                        e,
                                        question,
                                        index,
                                        index1
                                      )
                                    }
                                    onBlur={handleBlur}
                                  />
                                  {touched?.question?.[index]?.answers?.[index1]
                                    ?.answer &&
                                    errors?.question?.[index]?.answers?.[index1]
                                      ?.answer && (
                                      <FormHelperText
                                        error
                                        style={
                                          isMobile
                                            ? { textAlign: "center" }
                                            : {}
                                        }
                                      >
                                        {
                                          errors?.question?.[index]?.answers?.[
                                            index1
                                          ]?.answer
                                        }
                                      </FormHelperText>
                                    )}
                                </div>
                              )}
                            </Grid>
                          </Grid>
                        ))}
                      </Grid>
                    </Grid>
                    {/* <Divider sx={{ marginBottom: "10px", marginTop: "10px" }} /> */}
                  </React.Fragment>
                ) : (
                  ""
                )
              )}
              {formData?.submitEvaluation?.isProbationEvaluation ? (
                <Grid
                  container
                  spacing={3}
                  style={{ paddingLeft: "20px", paddingRight: "20px" }}
                >
                  <Grid item xs={12} sx={{ marginBottom: "10px" }}>
                    <Divider sx={{ marginBottom: "5px", marginTop: "5px" }} />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                    <TextField
                      fullWidth
                      multiline
                      label="Comments"
                      minRows={4}
                      variant="outlined"
                      size="small"
                      name="comments"
                      inputProps={{
                        inputComponent: TextareaAutosize,
                        maxLength: 512,
                        style: {
                          resize: "auto",
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.comments}
                      error={touched?.comments && Boolean(errors?.comments)}
                      helperText={touched?.comments && errors?.comments}
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                    <TextField
                      fullWidth
                      multiline
                      label="Training and/or Development Needs:"
                      minRows={4}
                      variant="outlined"
                      size="small"
                      name="trainingDevelopement"
                      inputProps={{
                        inputComponent: TextareaAutosize,
                        maxLength: 512,
                        style: {
                          resize: "auto",
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.trainingDevelopement}
                      error={
                        touched?.trainingDevelopement &&
                        Boolean(errors?.trainingDevelopement)
                      }
                      helperText={
                        touched?.trainingDevelopement &&
                        errors?.trainingDevelopement
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                    <TextField
                      fullWidth
                      multiline
                      label="Actions Agreed"
                      minRows={4}
                      variant="outlined"
                      size="small"
                      name="actionsAgreed"
                      inputProps={{
                        inputComponent: TextareaAutosize,
                        maxLength: 512,
                        style: {
                          resize: "auto",
                        },
                      }}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.actionsAgreed}
                      error={
                        touched?.actionsAgreed && Boolean(errors?.actionsAgreed)
                      }
                      helperText={
                        touched?.actionsAgreed && errors?.actionsAgreed
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sx={{ marginBottom: "20px" }}>
                    <FormControl error={errors?.agreed}>
                      <FormControlLabel
                        control={
                          <StyledCheckbox
                            name="agreed"
                            onChange={handleAgreed}
                            error={touched?.agreed && errors?.agreed}
                          />
                        }
                        style={
                          touched?.agreed && errors?.agreed
                            ? { color: "red" }
                            : {}
                        }
                        label="I agree with the comments detailed on this form and any timescales or targets have been mutually agreed. *"
                      />
                      {/*                       
                      {(touched?.agreed && errors?.agreed) && (
                        <FormHelperText>{errors?.agreed}</FormHelperText>
                      )} */}
                    </FormControl>
                  </Grid>
                </Grid>
              ) : (
                ""
              )}
              <div
                style={
                  isMobile
                    ? {
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        width: "100%",
                      }
                    : {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "right",
                        width: "100%",
                      }
                }
              >
                <Button
                  variant="outlined"
                  className="upload-btn"
                  style={
                    isMobile
                      ? {
                          marginLeft: "auto",
                          marginRight: "auto",
                          width: "70%",
                        }
                      : { margin: "25px 25px 25px 25px" }
                  }
                  type="submit"
                >
                  Submit
                </Button>
              </div>
            </form>
          </Box>
        </Card>
      )}
    </Container>
  );
}

const componentConfig = {
  component: EvaluationForm,
  path: "/evaluation/:id",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: "evaluation",
  sidebar: true,
};

export default componentConfig;
