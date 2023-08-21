import { useState } from "react";
import PropTypes from "prop-types";
import {
	NavLink as RouterLink,
	matchPath,
	useLocation,
} from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Collapse from "@mui/material/Collapse";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemButton from "@mui/material/ListItemButton";

// ----------------------------------------------------------------------

const ListItemStyle = styled((props) => (
	<ListItemButton disableGutters {...props} />
))(({ theme }) => ({
	...theme.typography.body2,
	height: 48,
	position: "relative",
	textTransform: "capitalize",
	paddingLeft: theme.spacing(3),
	paddingRight: theme.spacing(2.5),
	color: theme.palette.text.secondary,
	"&:before": {
		top: 0,
		right: 0,
		width: 3,
		bottom: 0,
		content: "''",
		display: "none",
		position: "absolute",
		borderTopLeftRadius: 4,
		borderBottomLeftRadius: 4,
		backgroundColor: theme.palette.primary.main,
	},
}));

const ListItemIconStyle = styled(ListItemIcon)({
	width: 33,
	height: 33,
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
	item: PropTypes.object,
	active: PropTypes.func,
};

function NavItem({ item, active }) {
	const theme = useTheme();
	let isActiveRoot = active(item.path);
	const { title, path, icon, info, children, cypress, visible } = item;
	const [open, setOpen] = useState(isActiveRoot);
	const [openSub, setOpenSub] = useState(isActiveRoot);
	if (!visible) return null;

	const handleOpen = () => {
		setOpen((prev) => !prev);
	};

	const handleOpenSub = () => {
		setOpenSub((prev) => !prev);
	};

	const activeRootStyle = {
		color: "primary.main",
		fontWeight: "fontWeightMedium",
		bgcolor: alpha(
			theme.palette.primary.main,
			theme.palette.action.selectedOpacity,
		),
		"&:before": { display: "block" },
	};

	const activeSubStyle = {
		color: "text.primary",
		fontWeight: "fontWeightMedium",
	};

	if (children) {
		return (
			<>
				<ListItemStyle
					onClick={handleOpen}
					sx={{
						...(isActiveRoot && activeRootStyle),
					}}
					data-cy={`sidebar-menu-${cypress}`}
					/* key={title} */
				>
					<ListItemIconStyle>{icon && icon}</ListItemIconStyle>
					<ListItemText disableTypography primary={title} />
					{info && info}
					<ListItemIcon sx={{ margin: "0px" }}>
						{open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
					</ListItemIcon>
				</ListItemStyle>

				<Collapse in={open} timeout="auto" unmountOnExit>
					<List component="div" disablePadding>
						{children.map((item, idx) => {
							const { title, path, subCypress, subChildren, visible } = item;
							const isActiveSub = active(path);
							if (!visible) return null;

							if (subChildren && subChildren.length) {
								return (
									<>
										<ListItemStyle
											onClick={handleOpenSub}
											sx={{
												...(isActiveRoot && activeRootStyle),
											}}
											data-cy={`sidebar-menu-${cypress}`}
											className="submenu-right"
											/* key={title} */
										>
											<ListItemIconStyle>
												<Box
													component="span"
													sx={{
														width: 4,
														height: 4,
														display: "flex",
														borderRadius: "50%",
														alignItems: "center",
														justifyContent: "center",
														bgcolor: "text.disabled",
														transition: (theme) =>
															theme.transitions.create("transform"),
														...(isActiveSub && {}),
													}}
												/>
											</ListItemIconStyle>
											<ListItemText disableTypography primary={title} />
											{info && info}
											<ListItemIcon sx={{ margin: "0px" }}>
												{openSub ? <ExpandMoreIcon /> : <ChevronRightIcon />}
											</ListItemIcon>
										</ListItemStyle>
										<Collapse in={openSub} timeout="auto" unmountOnExit>
											{subChildren.map((subItem, idx) => {
												const { title, path, subChildCypress, visible } =
													subItem;
												if (!visible) return null;
												const isActiveSub = active(path);
												return (
													<ListItemStyle
														className="submenu-right"
														style={{ marginLeft: "20px" }}
														/* key={title} */
														to={path}
														component={RouterLink}
														sx={{
															...(isActiveSub && activeSubStyle),
														}}
														data-cy={`sidebar-submenu-${subCypress}-${subChildCypress}`}
													>
														<ListItemIconStyle>
															<Box
																component="span"
																sx={{
																	width: 4,
																	height: 4,
																	display: "flex",
																	borderRadius: "50%",
																	alignItems: "center",
																	justifyContent: "center",
																	bgcolor: "text.disabled",
																	transition: (theme) =>
																		theme.transitions.create("transform"),
																	...(isActiveSub && {
																		transform: "scale(2)",
																		bgcolor: "primary.main",
																	}),
																}}
															/>
															{/* icon goes here */}
														</ListItemIconStyle>
														<ListItemText disableTypography primary={title} />
													</ListItemStyle>
												);
											})}
										</Collapse>
									</>
								);
							} else {
								return (
									<ListItemStyle
										/* key={title} */
										to={path}
										component={RouterLink}
										sx={{
											...(isActiveSub && activeSubStyle),
										}}
										data-cy={`sidebar-submenu-${cypress}-${subCypress}`}
									>
										<ListItemIconStyle>
											<Box
												component="span"
												sx={{
													width: 4,
													height: 4,
													display: "flex",
													borderRadius: "50%",
													alignItems: "center",
													justifyContent: "center",
													bgcolor: "text.disabled",
													transition: (theme) =>
														theme.transitions.create("transform"),
													...(isActiveSub && {
														transform: "scale(2)",
														bgcolor: "primary.main",
													}),
												}}
											/>
											{/* icon goes here */}
										</ListItemIconStyle>
										<ListItemText disableTypography primary={title} />
										{/* <ListItemIcon sx={{ margin: "0px" }}>
                      {open ? <ExpandMoreIcon /> : <ChevronRightIcon />}
                    </ListItemIcon> */}
									</ListItemStyle>
								);
							}
						})}
					</List>
				</Collapse>
			</>
		);
	}

	return (
		<ListItemStyle
			component={RouterLink}
			to={path}
			sx={{
				...(isActiveRoot && activeRootStyle),
			}}
			/* key={title} */
			data-cy={`sidebar-menu-${cypress}`}
		>
			<ListItemIconStyle>{icon && icon}</ListItemIconStyle>
			<ListItemText disableTypography primary={title} />
			{info && info}
		</ListItemStyle>
	);
}

NavSection.propTypes = {
	navConfig: PropTypes.array,
};

export default function NavSection({ navConfig, ...other }) {
	const { pathname } = useLocation();
	const match = (path) =>
		path ? !!matchPath({ path, end: false }, pathname) : false;

	return (
		<Box {...other}>
			<List disablePadding>
				{navConfig.map((item, idx) => (
					<NavItem key={item.title} item={item} active={match} />
				))}
			</List>
		</Box>
	);
}
