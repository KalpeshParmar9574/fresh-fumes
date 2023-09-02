import PropTypes from 'prop-types';
import Icon from '@mui/material/Icon';
import SearchIcon from '@mui/icons-material/Search';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList'; // material
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
	height: 96,
	display: 'flex',
	justifyContent: 'space-between',
	padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
	width: 240,
	transition: theme.transitions.create(['box-shadow', 'width'], {
		easing: theme.transitions.easing.easeInOut,
		duration: theme.transitions.duration.shorter,
	}),
	'&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
	'& fieldset': {
		borderWidth: `1px !important`,
		borderColor: `${theme.palette.grey[500_32]} !important`,
	},
}));

// ----------------------------------------------------------------------

UserListToolbar.propTypes = {
	numSelected: PropTypes.number,
	filterName: PropTypes.string,
	onFilterName: PropTypes.func,
};

export default function UserListToolbar({ numSelected, filterName, onFilterName }) {
	return (
		<RootStyle
			sx={{
				...(numSelected > 0 && {
					color: 'primary.main',
					bgcolor: 'primary.lighter',
				}),
			}}
		>
			{numSelected > 0 ? (
				<Typography component="div" variant="subtitle1">
					{numSelected} selected
				</Typography>
			) : (
				<SearchStyle
					value={filterName}
					onChange={onFilterName}
					placeholder="Search user..."
					startAdornment={
						<InputAdornment position="start">
							<Box
								component={Icon}
								icon={SearchIcon}
								sx={{ color: 'text.disabled' }}
							/>
						</InputAdornment>
					}
				/>
			)}

			{numSelected > 0 ? (
				<Tooltip title="Delete">
					<IconButton>
						<Icon icon={DeleteIcon} />
					</IconButton>
				</Tooltip>
			) : (
				<Tooltip title="Filter list">
					<IconButton>
						<Icon icon={FilterListIcon} />
					</IconButton>
				</Tooltip>
			)}
		</RootStyle>
	);
}
