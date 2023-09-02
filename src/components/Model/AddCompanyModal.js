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

import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import { getCityData, getStateData } from "../../utils/getLocationData";
import {
	addCompanyFromCandidate,
	getCompany,
} from "../../redux/company/companyThunk";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const AddCompanyModal = NiceModal.create(({ name }) => {
	const modal = useModal();
	const dispatch = useDispatch();

	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);

	const initialValues = {
		name: name || "",
		state: "Gujarat",
		city: "",
	};

	const formik = useFormik({
		initialValues,
		onSubmit: async (values) => {
			try {
				const response = await dispatch(
					addCompanyFromCandidate(values),
				).unwrap();

				if (response.status === 200) {
					dispatch(getCompany());
					modal.resolve({ ...response.data });
					return modal.hide();
				}
			} catch (error) {
				toast.error(error.message);
			}
		},
	});

	useEffect(() => {
		const fetchStatesData = async () => {
			try {
				const response = await getStateData();
				setStates(response);
			} catch (error) {
				setStates([]);
			}
		};
		fetchStatesData();
	}, []);

	useEffect(() => {
		const fetchCityData = async () => {
			try {
				const response = await getCityData(formik.values.state);
				setCities(response);
			} catch (error) {
				setCities([]);
			}
		};

		fetchCityData();
	}, [formik.values.state]);

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
				<DialogTitle>Add a company</DialogTitle>
				<DialogContent>
					<Grid container spacing={1}>
						<Grid item xs={12}>
							<TextField
								fullWidth
								autoFocus
								id="name"
								margin="dense"
								size="small"
								{...formik.getFieldProps("name")}
								label="Name"
								variant="outlined"
							/>
						</Grid>
						<Grid item xs={12}>
							<FormControl size="small" fullWidth>
								<InputLabel id="demo-simple-select-helper-label">
									State
								</InputLabel>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									label="State"
									defaultValue=""
									{...formik.getFieldProps("state")}
									value={formik.values.state}
								>
									{states &&
										states.map((state) => (
											<MenuItem key={state} value={state}>
												{state}
											</MenuItem>
										))}
								</Select>
							</FormControl>
						</Grid>
						<Grid item xs={12}>
							<FormControl size="small" fullWidth>
								<InputLabel id="demo-simple-select-helper-label">
									City
								</InputLabel>
								<Select
									labelId="demo-simple-select-helper-label"
									id="demo-simple-select-helper"
									label="city"
									defaultValue=""
									size="small"
									{...formik.getFieldProps("city")}
								>
									{cities &&
										cities.map((city) => (
											<MenuItem key={city} value={city}>
												{city}
											</MenuItem>
										))}
								</Select>
							</FormControl>
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

export default AddCompanyModal;
