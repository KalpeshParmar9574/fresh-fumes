import React from "react";
import {
  Card,
  CardContent,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { useNavigate } from "react-router-dom";
import { encryption } from "../../utils/encodeString";

export default function EvaluationCard({ evaluationData }) {
  const navigate = useNavigate();
// console.log("EVALUATION_DATA___",evaluationData)
  const handleOpenForm = (data ,employeeId, evalutionId, status,designationId) => {
    if (status !='submitted') {
      navigate(`/evaluation/${encryption(data?.id)}&&&&${encryption(evalutionId)}`);
    }
  };
// console.log("EE_____________AA______________01",evaluationData)
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      
      {evaluationData?.length > 0 ? evaluationData?.map((data, index) => (
        <React.Fragment key={index}>
            <Grid
              item
              xs={4}
              sm={4}
              md={4}
              disabled={data?.status=='submitted' ? true : false}
              onClick={() =>
                handleOpenForm(data, data?.id ,data?.evaluationId, data?.status,data?.workDetails?.designationId)
              }
              sx={
                data?.status=='submitted'
                  ? { opacity: "0.7" }
                  : { cursor: "pointer" }
              }
            >
              
              <Card>
              {data?.status=='submitted' && (
         <div
         style={{
          position: "absolute",
          top: "-25px",
          left: "-6px",
          width: "113px",
          height: "51px",
          marginTop: "auto",
          marginBottom: "auto",
          padding: "26px 15px 7px 15px",
          backgroundColor: "#43B25C",
          color: "white",
          zIndex: "1",
          borderRadius: "inherit",
          textAlign: "center"
         }}
       >
         Submitted
       </div>
      )}
                <CardContent>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "auto" }}>
                      <Typography gutterBottom variant="h6" component="div">
                        {data?.submittedForEmployee?.firstName && data?.submittedForEmployee?.lastName ? (data?.submittedForEmployee?.firstName + " " + data?.submittedForEmployee?.lastName) : ""}
                      </Typography>
                    </div>
                    <div style={{ marginLeft: "auto" }}>
                      <Typography gutterBottom variant="body1" component="div">
                      {(data?.startMonth && data?.startYear && data?.endMonth && data?.endYear) ? (data?.startMonth+", "+data?.startYear +
                " to " +
                data?.endMonth+", "+data?.endYear) : "" }
                      </Typography>
                    </div>
                  </div>
                  <div style={{ display: "flex" }}>
                    <div style={{ marginRight: "auto" }}>
                      <Typography gutterBottom variant="body1" component="div">
                        {data?.evalution?.title ? data?.evalution?.title : ""}
                      </Typography>
                    </div>
                    {data?.status == 'submitted' && (
                      <div style={{ marginLeft: "auto" }}>
                        <IconButton
                          style={{ padding: "5px" }}
                          onClick={() =>
                            navigate(
                              `/viewevaluation/${encryption(data?.id)}`
                            )
                          }
                        >
                          <VisibilityIcon />
                        </IconButton>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Grid>
       
        </React.Fragment>
      )) : 
      <Grid item xs={4} sm={8} md={12} style={{textAlign:'center'}}>
      <Typography gutterBottom variant="h6" component="div" >
      No Record(s) Found
    </Typography>
    </Grid>
      }
    </Grid>
  );
}
