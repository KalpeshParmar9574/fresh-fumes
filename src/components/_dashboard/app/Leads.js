// material
import { alpha, styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
// utils
import { fShortenNumber } from "../../../utils/formatNumber";
import PersonIcon from "@mui/icons-material/Person";
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

export default function Leads({ number }) {
	return (
		<RootStyle sx={{ height: "100%" }}>
			<div className="white-card">
				<IconWrapperStyle sx={{ minWidth: "64px" }} className="leads_img">
					<img src="/assets/images/leads.svg" />
				</IconWrapperStyle>
				<Stack direction="column">
					<Typography variant="h3">{number}</Typography>
					<Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
						Leads
					</Typography>
				</Stack>
			</div>
			<div>
				<img src="/assets/images/roundright.svg" />
			</div>
		</RootStyle>
	);
}
