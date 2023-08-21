import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from "react-redux";
// routes
import Router from "./routes";
// theme
import ThemeConfig from "./theme";
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from "./theme/globalStyles";
// components
import ScrollToTop from "./components/ScrollToTop";
import { BaseOptionChartStyle } from "./components/charts/BaseOptionChart";
//toaster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ConfirmProvider } from "material-ui-confirm";
import CloseIcon from "@mui/icons-material/Close";
import NiceModal from "@ebay/nice-modal-react";
import { toast } from "react-toastify";
import './App.css';
function App() {
  return (
    <ThemeConfig>
			<ScrollToTop />
			<GlobalStyles />
			<BaseOptionChartStyle />
			<ConfirmProvider
				defaultOptions={{
					confirmationButtonProps: {
						variant: "contained",
						color: "error",
					},
					confirmationText: "Yes",
					cancellationText: "Cancel",
					cancellationButtonProps: {
						variant: "contained",
					},
				}}
			>
				<NiceModal.Provider>
					{/* <Router isAuthenticated={isAuthenticated} /> */}
					<Router />
				</NiceModal.Provider>
			</ConfirmProvider>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar
				newestOnTop={false}
				closeOnClick
				theme="colored"
				rtl={false}
				pauseOnFocusLoss={false}
				draggable
				pauseOnHover
				limit={3}
			/>
		</ThemeConfig>
  );
}

export default App;


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register("/service-worker.js");
// navigator.serviceWorker.register('/service-worker.js');

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
