import {
  Autocomplete,
  Button,
  Card,
  Container,
  Grid,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import DashboardLayout from "../../layouts/dashboard";
import { useFormik } from "formik";
import EvaluationCard from "./EvaluationCard";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEvaluation } from "../../redux/evaluation/evaluationThunk";
import {
  lastMonthYearStringFormat,
  pastMonthStringFormat,
} from "../../utils/dateFormat";
import Loader from "../../components/Loader";
import { useNavigate } from "react-router-dom";

function Evaluation() {
  const loading = useSelector((state) => state.evaluation.loading);
  const evaluationData = useSelector(
    (state) => state.evaluation.evaluationData
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();


  useEffect(() => {
    dispatch(getEvaluation({})).unwrap();
  }, []);

  return (
    <Container maxWidth="xl">
      {/* <Card sx={{marginLeft:'10px',marginRight:'10px'}}> */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Typography variant="h4" gutterBottom>
          Evaluation
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
            onClick={() => navigate("/evaluationhistory")}
            variant="contained"
            sx={{ marginRight: "15px" }}
          >
            History
          </Button>
          <Button
            onClick={() => navigate("/dashboard")}
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
        <EvaluationCard evaluationData={evaluationData} />
      )}
    </Container>
  );
}

const componentConfig = {
  component: Evaluation,
  path: "/evaluation",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: "evaluation",
  sidebar: true,
};

export default componentConfig;
