import PropTypes from 'prop-types';
// material
import { visuallyHidden } from '@mui/utils';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableSortLabel from '@mui/material/TableSortLabel';

// ----------------------------------------------------------------------

UserListHead.propTypes = {
	order: PropTypes.oneOf(['asc', 'desc']),
	orderBy: PropTypes.string,
	rowCount: PropTypes.number,
	headLabel: PropTypes.array,
	numSelected: PropTypes.number,
	onRequestSort: PropTypes.func,
	onSelectAllClick: PropTypes.func,
};

export default function UserListHead({
	order,
	orderBy,
	rowCount,
	headLabel,
	numSelected,
	onRequestSort,
	onSelectAllClick,
}) {
	const createSortHandler = (property) => (event) => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<TableCell padding="checkbox">
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
					/>
				</TableCell>
				{headLabel.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.alignRight ? 'right' : 'left'}
						sortDirection={orderBy === headCell.id ? order : false}
					>
						<TableSortLabel
							hideSortIcon
							active={orderBy === headCell.id}
							direction={orderBy === headCell.id ? order : 'asc'}
							onClick={createSortHandler(headCell.id)}
						>
							{headCell.label}
							{orderBy === headCell.id ? (
								<Box sx={{ ...visuallyHidden }}>
									{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
								</Box>
							) : null}
						</TableSortLabel>
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}
