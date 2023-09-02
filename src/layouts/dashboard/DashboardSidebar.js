import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

import Scrollbar from '../../components/Scrollbar';
import NavSection from '../../components/NavSection';
import { MHidden } from '../../components/@material-extend';

import sidebarConfig from './SidebarConfig';
import Logo from '../../components/Logo';
import packageJson from '../../../package.json';

const DRAWER_WIDTH = 280;

const RootStyle = styled('div')(({ theme }) => ({
	[theme.breakpoints.up('lg')]: {
		flexShrink: 0,
		width: DRAWER_WIDTH,
	},
}));

DashboardSidebar.propTypes = {
	isOpenSidebar: PropTypes.bool,
	onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
	const { pathname } = useLocation();

	useEffect(() => {
		// if (isOpenSidebar) {
		// 	onCloseSidebar();
		// }
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	const renderContent = (
		<Scrollbar
			sx={{
				height: '100%',
				'& .simplebar-content': {
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				},
			}}
		>
			<Logo />
			<NavSection navConfig={sidebarConfig} pb={5} />
			<Stack className="version-section">v{packageJson.version}</Stack>
		</Scrollbar>
	);

	return (
		<RootStyle>
			<MHidden width="lgUp">
				<Drawer
					open={isOpenSidebar}
					variant="persistent"
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							bgcolor: 'background.default',
						},
					}}
				>
					<div className="sidebar-close-button">
						<IconButton onClick={onCloseSidebar}>
							<ArrowBackIosIcon />
						</IconButton>
					</div>
					{renderContent}
				</Drawer>
			</MHidden>
			<MHidden width="lgDown">
				<Drawer
					open //={isOpenSidebar}
					variant="persistent"
					PaperProps={{
						sx: {
							width: DRAWER_WIDTH,
							bgcolor: 'background.default',
						},
					}}
				>
					{renderContent}
				</Drawer>
			</MHidden>
		</RootStyle>
	);
}
