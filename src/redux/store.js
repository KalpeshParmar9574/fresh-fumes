import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { evaluationReducer } from "./evaluation/evaluationSlice";
const combinedReducer = combineReducers({
		evaluation:evaluationReducer,
});

const rootReducer = (state, action) => {
	if (action.type === "auth/logOutUser") {
		state = undefined;
	}
	return combinedReducer(state, action);
};

export const store = configureStore({
	reducer: rootReducer,
});
