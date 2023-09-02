import {
  Badge,
  Button,
  Card,
  Chip,
  Container,
  Grid,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";
import DashboardLayout from "../../layouts/dashboard";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { getSubmittedEvalutionHistory } from "../../redux/evaluation/evaluationThunk";
import CustomPagination from "../../components/Pagination";
import VisibilityIcon from "@mui/icons-material/Visibility";

import {
  setLimit,
  setOrderBy,
  setSortBy,
  setPage,
} from "../../redux/evaluation/evaluationSlice";
import "./table.css";
import invertDirection from "../../utils/invertDirection";
import Scrollbars from "react-custom-scrollbars";
import Loader from "../../components/Loader";
import { encryption } from "../../utils/encodeString";

function EvaluationHistory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const limit = useSelector((state) => state.evaluation.limit);
  const loading = useSelector((state) => state.evaluation.loading);
  let evaluationHistory = useSelector(
    (state) => state.evaluation.evaluationHistory
  );
  const evaluation = useSelector((state) => state.evaluation);
  // console.log("evaluation",evaluation)
  const page = useSelector((state) => state.evaluation.page);
  const totalPage = useSelector((state) => state.evaluation.totalPage);
  const totalCount = useSelector((state) => state.evaluation.totalCount);
  const sortBy = useSelector((state) => state.evaluation.sortBy);
  const orderBy = useSelector((state) => state.evaluation.orderBy);
  let params = location.state;

  // console.log("EVALUATIONHISTORY___",evaluationHistory)
  // useEffect(()=>{
  //   const histroyObj={

  //   }
  //   dispatch(getSubmittedEvalutionHistory(histroyObj)).unwrap()
  // },[])

  useEffect(() => {
    // if (!error) {
    dispatch(
      getSubmittedEvalutionHistory({ limit, orderBy, sortBy, page: page + 1 })
    );
    // }
  }, [dispatch, limit, page, sortBy, orderBy, params]);

  const handleRowsPerPageChange = (event) => {
    dispatch(setPage({ page: 0 }));
    dispatch(setLimit({ limit: parseInt(event.target.value, 10) }));
  };
  // sidebar-part functionality
  const [state, setState] = React.useState({
    right: false,
  });
  const handleChangePage = (event, newPage) => {
    dispatch(setPage({ page: newPage }));
  };

  const handleSorting = (columnName) => {
    dispatch(setSortBy({ sortBy: columnName }));
    dispatch(
      setOrderBy({
        orderBy: invertDirection(sortBy === columnName, orderBy),
      })
    );
  };

  // const handleSorting = (columnName) => {
  //   const sortingObj={
  //     page: 1,
  //     limit: 10,
  //     sortBy: columnName,
  //     orderBy: "ASC",
  //     month: "May",
  //     year: "2023"
  // }
  //   dispatch(getSubmittedEvalutionHistory(sortingObj)).unwrap()
  // };

  return (
    //   <Container maxWidth="xl">

    //   <Stack
    //     direction="row"
    //     alignItems="center"
    //     justifyContent="space-between"
    //     mb={3}
    //   >
    //     <Typography variant="h4" gutterBottom>
    //       Evaluation History
    //     </Typography>
    //     <Stack direction="row" alignItems="center">

    //       <Button
    //         onClick={() => navigate("/evaluation")}
    //         variant="contained"
    //         startIcon={<ArrowBackIcon />}
    //       >
    //         Back
    //       </Button>
    //     </Stack>
    //   </Stack>
    // </Container>
    <Container maxWidth="xl">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        mb={3}
      >
        <Typography variant="h4" gutterBottom>
          Evaluation History
          <Typography variant="body2">
            Total Records : {totalCount}
          </Typography>
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
          {/* <Button
            onClick={() => navigate("/evaluationhistory")}
            variant="contained"
							sx={{ marginRight: "15px" }}
          >
            History
          </Button> */}
          <Button
            onClick={() => navigate("/evaluation")}
            variant="contained"
            startIcon={<ArrowBackIcon />}
          >
            Back
          </Button>
        </Stack>
        {/* <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <span
                className="filter-icon-part"
                onClick={toggleDrawer(anchor, true)}
              >
                <IconButton>
                  <Badge
                    color="error"
                    variant="dot"
                    invisible={filterChips?.length !== 0 ? false : true}
                  >
                    <FilterAltIcon />
                  </Badge>
                </IconButton>
              </span>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
                style={{ zIndex: "1300" }}
              >
                <Box
                  pt={4}
                  px={3}
                  sx={{
                    width:
                      anchor === "top" || anchor === "bottom" ? "auto" : 400,
                  }}
                  role="presentation"
                  // onClick={toggleDrawer(anchor, false)}
                  // onKeyDown={toggleDrawer(anchor, false)}
                >
                  <div className="content-filter-part">
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      mb={3}
                    >
                      <Typography variant="h6">Candidate Filter</Typography>
                      <span>
                        <IconButton onClick={toggleDrawer(anchor, false)}>
                          <CloseIcon />
                        </IconButton>
                      </span>
                    </Stack>
                    <form onSubmit={handleSubmit}>
                      <Grid container spacing={3}>
                        <Grid item xs={12} style={{ marginBottom: "10px" }}>
                          <Autocomplete
                            // multiple
                            size="small"
                            fullWidth
                            // options={activityData.data || []}
                            options={onboardingProcessStatusData || []}
                            // getOptionLabel={(option) => option.value || ""}
                            name="onboardingProcessStatus"
                            onChange={(event, newValue) => {
                              setFieldValue("onboardingProcessStatus", newValue);
                            }}
                            renderInput={(params) => (
                              <TextField {...params} label="Status" />
                            )}
                            value={values.onboardingProcessStatus}
                          />
                        </Grid>
                      </Grid>
                      <Stack direction="row" justifyContent="flex-end" mb={3}>
                        <Button
                          variant="contained"
                          startIcon={<SearchIcon />}
                          type="submit"
                        >
                          Search
                        </Button>
                        <Button
                          variant="contained"
                          type="reset"
                          onClick={handleReset}
                          startIcon={<CachedIcon />}
                          sx={{ marginLeft: "10px" }}
                        >
                          Reset
                        </Button>
                      </Stack>
                    </form>
                  </div>
                </Box>
              </Drawer>
            </React.Fragment>
          ))}
        </Stack> */}
      </Stack>

      {/* <Card>
        <Container style={{ maxWidth: "100%" }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <Grid container xs={12} pt={2} pb={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Search by Name/Email/Phone Number"
                  name="search"
                  inputRef={inputRef}
                  variant="outlined"
                  size="small"
                  onChange={debounceWithSearch}
                />
              </Grid>
            </Grid>
          </form>
        </Container>
      </Card> */}
      {/* <Stack
        style={{ marginBottom: "10px", marginTop: "10px" }}
        direction="row"
        alignItems="start"
      >
        {filterChips?.map((chips, idx) => {
          return (
            <Chip
              label={chips.filter}
              color="primary"
              size="small"
              key={chips.filter}
              style={{ marginRight: "5px" }}
              variant="filled"
              onDelete={() => onDeleteChip(chips, filterChips?.length)}
            />
          );
        })}
      </Stack> */}

      {/* {filterChips?.length !== 0 || isSearching ? (
        <Typography variant="body2" sx={{ mb: 1 }}>
          {totalCount} records found
        </Typography>
      ) : (
        ""
      )}
      {loading ? (
        <Loader />
      ) : ( */}
      <Card>
        <CustomPagination
          totalPage={totalPage}
          totalCount={totalCount}
          limit={limit}
          handleChangePage={handleChangePage}
          page={page}
          rowsPerPageOptions={[10, 20, 40]}
          handleRowsPerPageChange={handleRowsPerPageChange}
          // filter={filterChips?.length !== 0 ? true : false}
        />

        <TableContainer
          component={Paper}
          sx={{ minWidth: "auto", height: "auto" }}
          className="radius-remove"
          style={{ borderRadius: "0" }}
        >
          {/* <Scrollbar> */}
          {/* {console.log("evaluationHistory?.getSubmittedEvalutionHistory?.length == 0",evaluationHistory?.getSubmittedEvalutionHistory?.length)} */}
          
            <Scrollbars style={evaluationHistory?.getSubmittedEvalutionHistory?.length == 0 || evaluationHistory.length == 0 ? { height: 74, width: "100%" } : (evaluationHistory?.getSubmittedEvalutionHistory?.length > 4 ? { height: 400, width: "100%" } : { height: 200, width: "100%" })}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">
                      <TableSortLabel
                        active={sortBy === "id"}
                        direction={sortBy === "id" ? orderBy : "asc"}
                        onClick={() => handleSorting("id")}
                      >
                        Submitted For
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="left">Submitted By</TableCell>
                    <TableCell align="left">Designation</TableCell>
                    <TableCell align="left">
                      <TableSortLabel
                        active={sortBy === "startMonth"}
                        direction={sortBy === "startMonth" ? orderBy : "asc"}
                        onClick={() => handleSorting("startMonth")}
                      >
                       Start Month
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="left">
                      <TableSortLabel
                        active={sortBy === "startYear"}
                        direction={sortBy === "startYear" ? orderBy : "asc"}
                        onClick={() => handleSorting("startYear")}
                      >
                        Start Year
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="left">
                      <TableSortLabel
                        active={sortBy === "endMonth"}
                        direction={sortBy === "endMonth" ? orderBy : "asc"}
                        onClick={() => handleSorting("endMonth")}
                      >
                       End Month
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="left">
                      <TableSortLabel
                        active={sortBy === "endYear"}
                        direction={sortBy === "endYear" ? orderBy : "asc"}
                        onClick={() => handleSorting("endYear")}
                      >
                        End Year
                      </TableSortLabel>
                    </TableCell>
                    <TableCell align="left">
                      Actions
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody sx={{ height: "auto" }}>
                  {loading ? (
                    <TableRow>
                      <TableCell align="center" colSpan={9}>
                        <Loader />
                      </TableCell>
                    </TableRow>
                  ) : Array.isArray(
                      evaluationHistory?.getSubmittedEvalutionHistory
                    ) &&
                    evaluationHistory?.getSubmittedEvalutionHistory?.length ===
                      0 ? (
                    <TableRow>
                      <TableCell align="center" colSpan={3}>
                        No Record(s) Found
                      </TableCell>
                    </TableRow>
                  ) : Array.isArray(
                      evaluationHistory?.getSubmittedEvalutionHistory
                    ) &&
                    evaluationHistory?.getSubmittedEvalutionHistory?.length >
                      0 ? (
                    evaluationHistory?.getSubmittedEvalutionHistory?.map(
                      (candidate, idx) => {
                        return (
                          
                          <TableRow key={candidate?.id}>
                            <TableCell align="center">
                              {(candidate?.submittedForEmployee?.firstName && candidate?.submittedForEmployee?.lastName) ? candidate?.submittedForEmployee?.firstName+" "+candidate?.submittedForEmployee?.lastName : ""}
                            </TableCell>
                            <TableCell align="center">
                              {(candidate?.submittedByEmployee?.firstName && candidate?.submittedByEmployee?.lastName) ? candidate?.submittedByEmployee?.firstName + " "+ candidate?.submittedByEmployee?.lastName : ""}
                            </TableCell>
                            <TableCell align="center">
                              {candidate?.designation?.title || ""}
                            </TableCell>
                            <TableCell align="center">
                              {candidate?.startMonth || ""}
                            </TableCell>
                            <TableCell align="left">
                              {candidate?.startYear || ""}
                            </TableCell>
                            <TableCell align="center">
                              {candidate?.endMonth || ""}
                            </TableCell>
                            <TableCell align="left">
                              {candidate?.endYear || ""}
                            </TableCell>
                            <TableCell align="left">
                          {/* {candidate?.onboardingProcessStatus
                            .toLowerCase()
                            .replace(/\s+/g, "") !== "pending" && (
                              <Stack direction="row"> */}
                              <IconButton
                                style={{ padding: "5px" }}
                                onClick={()=> navigate(
                                  `/viewevaluation/${encryption(candidate?.id)}`
                                )}
                                 >
                                <VisibilityIcon />
                               </IconButton>
                           {/* </Stack>
                           )}  */}
                          </TableCell>
                          </TableRow>
                        );
                      }
                    )
                  ) : (
                    <TableRow>
                      <TableCell colSpan={8} align="left">
                        No Record(s) Found
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </Scrollbars>
          {/* </Scrollbar> */}
        </TableContainer>
      </Card>
      {/* )} */}
    </Container>
  );
}

const componentConfig = {
  component: EvaluationHistory,
  path: "/evaluationhistory",
  public: false,
  layout: DashboardLayout,
  roles: ["admin"],
  group: "evaluation",
  sidebar: true,
};

export default componentConfig;
