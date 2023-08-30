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
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import LoadingButton from "@mui/lab/LoadingButton";
import { useFormik } from "formik";
import {
	getAreaData,
	getStateData,
	getPostalCode,
	getCityData,
} from "../../utils/getLocationData";
import collegeSchema from "../../validations/collegeSchema";

import { getCollege, insertCollege } from "../../redux/college/collegeThunk";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const AddCollegeModal = NiceModal.create(({ name }) => {
	const modal = useModal();
	const dispatch = useDispatch();

	const [states, setStates] = useState([]);
	const [cities, setCities] = useState([]);
	const [areas, setArea] = useState([]);

	const initialValues = {
		collegeName: name || "",
		streetLine1: "",
		streetLine2: "",
		area: "",
		city: "",
		state: "Gujarat",
		zipcode: "",
		website: "",
		contact: [
			{
				name: "",
				email: "",
				contactNumber: "",
			},
		],
	};

	const formik = useFormik({
		initialValues,
		validationSchema: collegeSchema,
		onSubmit: async (values) => {
			try {
				const response = await dispatch(insertCollege(values)).unwrap();

				if (response.status === 200) {
					dispatch(getCollege());
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

	const handleState = async (event, newValue) => {
		const state = newValue;
		formik.setFieldValue("zipcode", "");
		formik.setFieldValue("area", "");
		formik.setFieldValue("city", "");
		formik.setFieldValue("state", state);
		setCities(await getCityData(state));
	};

	const handleArea = async (event, newValue) => {
		const city = newValue;
		formik.setFieldValue("area", "");
		formik.setFieldValue("zipcode", "");
		formik.setFieldValue("city", city);
		setArea(await getAreaData(city));
	};

	const handleZipCode = async (event, newValue) => {
		try {
			const area = newValue;
			const postalCode = await getPostalCode({
				city: formik.values.city,
				area,
			});
			formik.setFieldValue("area", area);
			formik.setFieldValue("zipcode", postalCode);
		} catch (error) {}
	};

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
				<DialogTitle>Add a college</DialogTitle>
				<DialogContent>
					<Grid container spacing={1}>
						<Grid item xs={4} mt={3}>
							<TextField
								fullWidth
								label="College Name"
								name="collegeName"
								value={formik.values.collegeName}
								onChange={formik.handleChange}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 256 }}
								error={Boolean(
									formik.touched.collegeName && formik.errors.collegeName,
								)}
								helperText={
									formik.touched.collegeName && formik.errors.collegeName
								}
							/>
						</Grid>
						<Grid item xs={4} mt={3}>
							<TextField
								label="Street Line 1"
								name="streetLine1"
								value={formik.values.streetLine1}
								onChange={formik.handleChange}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 256 }}
								error={Boolean(
									formik.touched.streetLine1 && formik.errors.streetLine1,
								)}
								helperText={
									formik.touched.streetLine1 && formik.errors.streetLine1
								}
								fullWidth
							/>
						</Grid>
						<Grid item xs={4} mt={3}>
							<TextField
								label="Street Line 2"
								name="streetLine2"
								value={formik.values.streetLine2}
								onChange={formik.handleChange}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 256 }}
								error={Boolean(
									formik.touched.streetLine2 && formik.errors.streetLine2,
								)}
								helperText={
									formik.touched.streetLine2 && formik.errors.streetLine2
								}
								fullWidth
							/>
						</Grid>
						<Grid item xs={4} mt={3}>
							{/*<InputLabel id="demo-simple-select-label" size="small">
											State
										</InputLabel>
										<Select
											id="demo-simple-select"
											name="state"
											value={values.state}
											label="State"
											size="small"
											fullWidth
											onChange={handleState}
											error={Boolean(touched.state && errors.state)}
										>
											{states.map((state, key) => (
												<MenuItem key={key} value={state}>
													{state}
												</MenuItem>
											))}
										</Select>*/}
							<Autocomplete
								labelId="demo-simple-select-helper-label"
								id="demo-simple-select-helper"
								label="state"
								size="small"
								name="state"
								options={states || []}
								renderInput={(params) => (
									<TextField
										{...params}
										label="state"
										error={formik.touched.state && Boolean(formik.errors.state)}
										helperText={formik.touched.state && formik.errors.state}
									/>
								)}
								value={formik.values.state}
								onChange={handleState}
							/>
						</Grid>
						<Grid item xs={4} mt={3}>
							{/*<InputLabel id="demo-simple-select-label" size="small">
											City
										</InputLabel>
										<Select
											disabled={!values.state}
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											name="city"
											value={values.city}
											label="City"
											size="small"
											fullWidth
											onChange={handleArea}
											error={Boolean(touched.city && errors.city)}
										>
											{cities.map((city, key) => (
												<MenuItem key={key} value={city}>
													{city}
												</MenuItem>
											))}
										</Select>*/}
							<Autocomplete
								labelId="demo-simple-select-helper-label"
								id="demo-simple-select-helper"
								label="city"
								size="small"
								name="city"
								disabled={!formik.values.state}
								options={cities || []}
								renderInput={(params) => (
									<TextField
										{...params}
										label="City"
										error={formik.touched.city && Boolean(formik.errors.city)}
										helperText={formik.touched.city && formik.errors.city}
									/>
								)}
								value={formik.values.city}
								onChange={handleArea}
							/>
						</Grid>
						<Grid item xs={4} my={3}>
							{/*<InputLabel id="demo-simple-select-label" size="small">
											Area
										</InputLabel>
										<Select
											disabled={!values.city}
											labelId="demo-simple-select-label"
											id="demo-simple-select"
											name="area"
											value={values.area}
											label="Area"
											size="small"
											fullWidth
											onChange={handleZipCode}
											error={Boolean(touched.area && errors.area)}
										>
											{areas.map((area, key) => (
												<MenuItem key={key} value={area}>
													{area}
												</MenuItem>
											))}
											</Select>*/}
							<Autocomplete
								labelId="demo-simple-select-helper-label"
								id="demo-simple-select-helper"
								label="area"
								size="small"
								name="Area"
								disabled={!formik.values.city}
								options={areas || []}
								renderInput={(params) => (
									<TextField
										{...params}
										label="Area"
										error={formik.touched.area && Boolean(formik.errors.area)}
										helperText={formik.touched.area && formik.errors.area}
									/>
								)}
								value={formik.values.area}
								onChange={handleZipCode}
							/>

							{/* <TextField
											label="Area"
											name="area"
											value={values.area}
											onChange={handleArea}
											variant="outlined"
											size="small"
											error={Boolean(touched.area && errors.area)}
											helperText={touched.area && errors.area}
											fullWidth
										/> */}
						</Grid>
						<Grid item xs={4} mb={3}>
							<TextField
								label="Zip Code"
								name="zipcode"
								value={formik.values.zipcode}
								onChange={formik.handleChange}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 8 }}
								error={Boolean(formik.touched.zipcode && formik.errors.zipcode)}
								helperText={formik.touched.zipcode && formik.errors.zipcode}
								fullWidth
							/>
						</Grid>
						<Grid item xs={4} mb={3}>
							<TextField
								label="Website"
								name="website"
								value={formik.values.website}
								onChange={formik.handleChange}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 256 }}
								error={Boolean(formik.touched.website && formik.errors.website)}
								helperText={formik.touched.website && formik.errors.website}
								fullWidth
							/>
						</Grid>
					</Grid>
				</DialogContent>
				<DialogTitle>Add Contact</DialogTitle>
				<DialogContent>
					<Grid container spacing={1}>
						<Grid item xs={4} my={3}>
							<TextField
								fullWidth
								label="Enter Contact Person"
								onChange={formik.handleChange}
								{...formik.getFieldProps(`contact[0].name`)}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 64 }}
								error={Boolean(
									formik.touched?.contact &&
										formik.touched?.contact[0] &&
										formik.touched?.contact[0]?.name &&
										formik.errors?.contact &&
										formik.errors?.contact[0] &&
										formik.errors?.contact[0]?.name,
								)}
								helperText={
									formik.touched?.contact &&
									formik.touched?.contact[0] &&
									formik.touched?.contact[0]?.name &&
									formik.errors?.contact &&
									formik.errors?.contact[0] &&
									formik.errors?.contact[0]?.name
								}
							/>
						</Grid>
						<Grid item xs={4} my={3}>
							<TextField
								label="Email"
								onChange={formik.handleChange}
								{...formik.getFieldProps(`contact[0].email`)}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 512 }}
								error={Boolean(
									formik.touched?.contact &&
										formik.touched?.contact[0] &&
										formik.touched?.contact[0]?.email &&
										formik.errors?.contact &&
										formik.errors?.contact[0] &&
										formik.errors?.contact[0]?.email,
								)}
								helperText={
									formik.touched?.contact &&
									formik.touched?.contact[0] &&
									formik.touched?.contact[0]?.email &&
									formik.errors?.contact &&
									formik.errors?.contact[0] &&
									formik.errors?.contact[0]?.email
								}
								fullWidth
							/>
						</Grid>
						<Grid item xs={3} my={3}>
							<TextField
								label="Number"
								onChange={formik.handleChange}
								{...formik.getFieldProps(`contact[0].contactNumber`)}
								variant="outlined"
								size="small"
								inputProps={{ maxLength: 10 }}
								error={Boolean(
									formik.touched?.contact &&
										formik.touched?.contact[0] &&
										formik.touched?.contact[0]?.contactNumber &&
										formik.errors?.contact &&
										formik.errors?.contact[0] &&
										formik.errors?.contact[0]?.contactNumber,
								)}
								helperText={
									formik.touched?.contact &&
									formik.touched?.contact[0] &&
									formik.touched?.contact[0]?.contactNumber &&
									formik.errors?.contact &&
									formik.errors?.contact[0] &&
									formik.errors?.contact[0]?.contactNumber
								}
								fullWidth
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

export default AddCollegeModal;
