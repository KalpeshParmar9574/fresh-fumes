import PropTypes from "prop-types";
import Icon from "@mui/material/Icon";
import MenuIcon from "@mui/icons-material/Menu";

import { alpha, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";

import { MHidden } from "../../components/@material-extend";

import AccountPopover from "./AccountPopover";
import NotificationsPopover from "./NotificationsPopover";

const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 60;

const RootStyle = styled(AppBar)(({ theme }) => ({
	boxShadow:
		" 0 0 2px 0 rgba(145 158 171 0.24), 0 16px 32px -4px rgba(145 158 171 0.24)",
	backdropFilter: "blur(6px)",
	WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
	backgroundColor: alpha(theme.palette.background.default, 0.72),
	[theme.breakpoints.up("lg")]: {
		width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
	},
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
	minHeight: APPBAR_MOBILE,
	[theme.breakpoints.up("lg")]: {
		minHeight: APPBAR_DESKTOP,
		padding: theme.spacing(0, 5),
	},
}));

DashboardNavbar.propTypes = {
	onOpenSidebar: PropTypes.func,
};




export default function DashboardNavbar({ onOpenSidebar, logOut }) {
	return (
		<RootStyle>
			<ToolbarStyle>
				<MHidden width="lgUp">
					<IconButton
						onClick={onOpenSidebar}
						sx={{ mr: 1, color: "text.primary" }}
					>
						<Icon icon={<MenuIcon />} />
					</IconButton>
				</MHidden>

				<Box sx={{ flexGrow: 1 }} />

				<Stack
					direction="row"
					alignItems="center"
					spacing={{ xs: 0.5, sm: 1.5 }}
				>
					{/* <LanguagePopover /> */}
					{/* <NotificationsPopover /> */}
					<AccountPopover logOut={logOut} />
				</Stack>
			</ToolbarStyle>
		</RootStyle>
	);
}
