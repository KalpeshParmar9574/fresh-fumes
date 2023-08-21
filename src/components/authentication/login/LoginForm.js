import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useFormik, Form, FormikProvider } from "formik";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import LoginSchema from "../../../validations/loginSchema";
// material
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import LoadingButton from "@mui/lab/LoadingButton";

// import { authenticateUser } from "../../../redux/auth/authSlice";
import { toast } from "react-toastify";

export default function LoginForm() {
	const navigate = useNavigate();
	const [showPassword, setShowPassword] = useState(false);
	const dispatch = useDispatch();

	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginSchema,
		onSubmit: async (values) => {
			try {
			//    await dispatch(authenticateUser(values)).unwrap();
			   return navigate("/dashboard", { replace: true });
			} catch (error) {
				if(error.status !== 400){
					 toast.error(error?.message);
				}
			}
		},
	});

	const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

	const handleShowPassword = () => {
		setShowPassword((show) => !show);
	};

	return (
		<FormikProvider value={formik}>
			<Card>
				<Container>
					<Box
						component="img"
						src="/assets/images/cc-logo.png"
						sx={{ margin: "0rem auto" }}
					/>
					<Form autoComplete="off" noValidate onSubmit={handleSubmit}>
						<Stack spacing={3}>
							<TextField
								fullWidth
								autoComplete="username"
								type="text"
								label="Username"
								{...getFieldProps("email")}
								error={Boolean(touched.email && errors.email)}
								helperText={touched.email && errors.email}
								inputProps={{ "data-cy": "txt-email-login" }}
								FormHelperTextProps={{ "data-cy": "txt-email-err-login" }}
							/>

							<TextField
								fullWidth
								autoComplete="current-password"
								type={showPassword ? "text" : "password"}
								label="Password"
								inputProps={{ "data-cy": "txt-password-login" }}
								FormHelperTextProps={{ "data-cy": "txt-password-err-login" }}
								{...getFieldProps("password")}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<IconButton onClick={handleShowPassword} edge="end">
												{showPassword ? (
													<VisibilityOffIcon />
												) : (
													<VisibilityIcon />
												)}
											</IconButton>
										</InputAdornment>
									),
								}}
								error={Boolean(touched.password && errors.password)}
								helperText={touched.password && errors.password}
							/>
						</Stack>

						<Stack
							direction="row"
							alignItems="center"
							justifyContent="space-between"
							sx={{ my: 2 }}
						>
							{/* <FormControlLabel
		control={
			<Checkbox {...getFieldProps('remember')} checked={values.remember} />
		}
		label="Remember me"
	/>

	<Link component={RouterLink} variant="subtitle2" to="#">
		Forgot password?
	</Link> */}
						</Stack>

						<LoadingButton
							fullWidth
							size="large"
							type="submit"
							variant="contained"
							loading={isSubmitting}
							sx={{ mb: 3 }}
							data-cy="btn-submit-login"
						>
							Login
						</LoadingButton>
					</Form>
				</Container>
			</Card>
		</FormikProvider>
	);
}
