import PropTypes from 'prop-types';
// material
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

// ----------------------------------------------------------------------

BlogPostsSort.propTypes = {
	options: PropTypes.array,
	onSort: PropTypes.func,
};

export default function BlogPostsSort({ options, onSort }) {
	return (
		<TextField select size="small" value="latest" onChange={onSort}>
			{options.map((option) => (
				<MenuItem key={option.value} value={option.value}>
					{option.label}
				</MenuItem>
			))}
		</TextField>
	);
}