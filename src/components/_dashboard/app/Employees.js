// material
import { alpha, styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import PersonIcon from "@mui/icons-material/Person";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  boxShadow: "none",
  textAlign: "center",
  padding: theme.spacing(2, 2),
  backgroundColor: theme.lighter,
  cursor: "pointer",
}));

const IconWrapperStyle = styled("div")(({ theme }) => ({
  margin: "0",
  display: "flex",
  alignItems: "center",
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: "center",
}));

// ----------------------------------------------------------------------

export default function Employees({ number, type,title }) {
  const getImageTicket = (state) => {
    switch (state) {
      case "total":
        return "/assets/images/newtotalticket.png";
      case "open":
        return "/assets/images/newopenticket.png";
      case "reopen":
        return "/assets/images/newcloseticket.png";
      case "close":
        return "/assets/images/newreopenticket.png";
      default:
        return "";
    }
  };
  return (
    <RootStyle
      direction="row"
      sx={{
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="white-card">
        <IconWrapperStyle sx={{ minWidth: "64px" }} className="leads_img">
          <img src={getImageTicket(type)} />
        </IconWrapperStyle>
        <Stack direction="column">
          <Typography variant="h3">{fShortenNumber(number)}</Typography>
          <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
           {title}
          </Typography>
        </Stack>
      </div>
      <div>
        <img src="/assets/images/roundright.svg" />
      </div>
    </RootStyle>
  );
}
