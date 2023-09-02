import { useRef, useState } from "react";
import { useSelector } from "react-redux";

import { alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";

import MenuPopover from "../../components/MenuPopover";

// import account from "../../_mocks_/account";

const MENU_OPTIONS = [
	{
		label: "Home",
		icon: <HomeIcon />,
		linkTo: "/",
	},
	{
		label: "Profile",
		icon: <PersonIcon />,
		linkTo: "#",
	},
	{
		label: "Settings",
		icon: <SettingsIcon />,
		linkTo: "#",
	},
];

export default function AccountPopover({ logOut }) {
	const anchorRef = useRef(null);
	const [open, setOpen] = useState(false);

	// const fullName = useSelector((state) => state.auth.fullName);
	// const employeeId = useSelector((state) => state.auth.employeeId);

	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<>
			<IconButton
				ref={anchorRef}
				onClick={handleOpen}
				data-cy="btn-button-navbar"
				sx={{
					padding: 0,
					width: 44,
					height: 44,
					...(open && {
						"&:before": {
							zIndex: 1,
							content: "''",
							width: "100%",
							height: "100%",
							borderRadius: "50%",
							position: "absolute",
							bgcolor: (theme) => alpha(theme.palette.grey[900], 0.72),
						},
					}),
				}}
			>
				<Avatar alt= "Akash" src = "" />
			</IconButton>

			<MenuPopover
				open={open}
				onClose={handleClose}
				anchorEl={anchorRef.current}
				sx={{ width: 220 }}
			>
				<Box sx={{ my: 1.5, px: 2.5 }}>
					<Typography variant="subtitle1" noWrap>
					  Akash
					</Typography>
					<Typography variant="body2" sx={{ color: "text.secondary" }} noWrap>
						ccc007
					</Typography>
				</Box>

				<Divider sx={{ my: 1 }} />

				{/* {MENU_OPTIONS.map((option) => (
					<MenuItem
						key={option.label}
						to={option.linkTo}
						component={RouterLink}
						onClick={handleClose}
						sx={{ typography: 'body2', py: 1, px: 2.5 }}
					>
						<Box
							component={Icon}
							icon={option.icon}
							sx={{
								mr: 2,
								width: 24,
								height: 24,
							}}
						/>

						{option.label}
					</MenuItem>
				))} */}

				<Box sx={{ p: 2, pt: 1.5 }}>
					<Button
						onClick={logOut}
						fullWidth
						color="inherit"
						variant="outlined"
						data-cy="btn-button-logout"
					>
						Logout
					</Button>
				</Box>
			</MenuPopover>
		</>
	);
}
