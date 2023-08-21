import PropTypes from 'prop-types';
// material
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';

// ----------------------------------------------------------------------

Logo.propTypes = {
	sx: PropTypes.object,
};

export default function Logo({ sx }) {
	const navigate = useNavigate();
	return (
		<Box
			component="img"
			src="/assets/images/cc-logo-3.png"
			sx={{ width: "175px" ,cursor:'pointer',userSelect:'none',userDrag:'none'}}
			onClick={()=>navigate("/dashboard")}
		/>
	);
}
