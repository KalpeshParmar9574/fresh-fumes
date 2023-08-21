// material
import { styled } from "@mui/material/styles";
import Container from "@mui/material/Container";
import LogoOnlyLayout from ".././layouts/LogoOnlyLayout";

import { LoginForm } from "../components/authentication/login";

const ContentStyle = styled("div")(({ theme }) => ({
	maxWidth: 480,
	margin: "auto",
	display: "flex",
	minHeight: "100vh",
	flexDirection: "column",
	justifyContent: "center",
	padding: theme.spacing(12, 0),
}));

function Login() {
	return (
		<Container maxWidth="sm">
			<ContentStyle>
				<LoginForm />
			</ContentStyle>
		</Container>
	);
}

const componentConfig = {
	component: Login,
	path: "/login",
	public: true,
	role: [],
	layout: LogoOnlyLayout,
	group: null,
	sidebar: false,
};

export default componentConfig;
