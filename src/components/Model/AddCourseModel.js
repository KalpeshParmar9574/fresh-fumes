import React, { useState, useEffect } from "react";
import NiceModal, { useModal } from "@ebay/nice-modal-react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Grid from "@mui/material/Grid";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import { course } from "../../validations/mastersSchema";
import {
	getCourse,
	updateById,
	deleteById,
	insert,
} from "../../redux/course/courseThunk";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const AddCourseModel = NiceModal.create(({ name }) => {
	const modal = useModal();
	const dispatch = useDispatch();

	const initialValues = {
		title: name || "",
		isActive: false,
	};

	const formik = useFormik({
		initialValues,
		validationSchema: course,
		onSubmit: async (values) => {
			try {
				const response = await dispatch(insert(values)).unwrap();

				if (response.status === 200) {
					dispatch(getCourse());
					modal.resolve({ ...response.data });
					return modal.hide();
				}
			} catch (error) {
				toast.error(error.message);
			}
		},
	});

	return (
		<Dialog
			TransitionComponent={Transition}
			open={modal.visible}
			onClose={() => modal.hide()}
			TransitionProps={{
				onExited: () => modal.remove(),
			}}
			fullWidth
		>
			<form onSubmit={formik.handleSubmit}>
				<DialogTitle>Add a course</DialogTitle>
				<DialogContent>
					<Grid container spacing={1} p={1}>
						<Grid item xs={6}>
							<TextField
								id="outlined-basic"
								label="Enter course title"
								variant="outlined"
								size="small"
								name="title"
								value={formik.values.title}
								onChange={formik.handleChange}
								error={Boolean(formik.touched.title && formik.errors.title)}
								helperText={formik.touched.title && formik.errors.title}
								inputProps={{ maxLength: 64 }}
							/>
						</Grid>
						<Grid item xs={6}>
							<FormControlLabel
								control={
									<Checkbox
										checked={formik.values.isActive}
										name="isActive"
										onChange={formik.handleChange}
									/>
								}
								label="Status"
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogActions>
					<Button
						color="error"
						variant="contained"
						onClick={() => modal.hide()}
					>
						Close
					</Button>
					<LoadingButton
						loading={formik.loading}
						type="submit"
						variant="contained"
					>
						Add
					</LoadingButton>
				</DialogActions>
			</form>
		</Dialog>
	);
});

export default AddCourseModel;
