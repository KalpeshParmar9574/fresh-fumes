import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import TablePagination from "@mui/material/TablePagination";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import "./pagination.css";

function TablePaginationActions(props) {
	const theme = useTheme();
	const { count, page, rowsPerPage, onPageChange } = props;

	const handleChange = (event, value) => {
		onPageChange(event, value - 1);
	};

	return (
		<Pagination
			defaultPage={0}
			siblingCount={2}
			page={page + 1}
			showFirstButton={true}
			showLastButton={true}
			boundaryCount={2}
			onChange={handleChange}
			count={Math.ceil(count / rowsPerPage)}
		/>
	);
}

TablePaginationActions.propTypes = {
	count: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
	page: PropTypes.number.isRequired,
	rowsPerPage: PropTypes.number.isRequired,
};

const CustomPagination = (props) => {
	return (
		<TablePagination
			className="pagination-blk"
			component="div"
			count={props.totalCount}
			page={props.page}
			onPageChange={props.handleChangePage}
			ActionsComponent={TablePaginationActions}
			rowsPerPageOptions={props.rowsPerPageOptions}
			onRowsPerPageChange={props.handleRowsPerPageChange}
			rowsPerPage={props.limit}
			labelDisplayedRows={({ page }) => {
				return (
					<>
						{/* <Typography variant={"caption"} sx={{ pr: 2 }}>
							{props.filter
								? `Total Filtered Records: ${props.totalCount}`
								: ""}
						</Typography>

						<Typography variant={"caption"} sx={{ pr: 1 }}> */}
						{props.totalPage === 0
							? `Page: ${page} of ${props.totalPage}`
							: `Page: ${page + 1} of ${props.totalPage}`}
						{/* </Typography> */}
					</>
				);

				/* return props.totalPage === 0 ? (
					
				) : props.filter ? (
					<>
						<Typography variant={"caption"} sx={{ pr: 1 }}>
							Total Records: {props.totalCount}
						</Typography>

						<Typography variant={"caption"} sx={{ pr: 1 }}>
							Page: {page + 1} of {props.totalPage}
						</Typography>
					</>
				) : (
					<Typography variant={"caption"}>
						Page: {page + 1} of {props.totalPage}
					</Typography>
				); */
			}}
		/>
	);
};

export default CustomPagination;
