import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";

import { employeeReducer } from "./employee/employeeSlice";

import { evaluationReducer } from "./evaluation/evaluationSlice";
import{raiseTicketsReducer} from "./raiseTicket/raiseTicketSlice"
import {raiseTicketCategoriesReducer} from "./raiseTicketCategories/raiseTicketCategoriesSlice"
import { assetForAppReducer } from "./assets/assetForApp";
import { policyReducer } from "./policy/policySlice";
const combinedReducer = combineReducers({
		evaluation:evaluationReducer,
		raiseTicket : raiseTicketsReducer,
		raiseTicketCategories : raiseTicketCategoriesReducer,
		assetForApp:assetForAppReducer,
		policy:policyReducer,
		// auth: authReducer,
		// bloodGroup: bloodGroupReducer,
		// activity: activityReducer,
		// course: courseReducer,
		// department: departmentReducer,
		// designation: designationReducer,
		// education: educationReducer,
		// externalDesignation: externalDesignationReducer,
		// checkList: checkListReducer,
		// interview: interviewReducer,
		// interviewType: interviewTypeReducer,
		// skill: skillReducer,
		// technology: technologyReducer,
		// jobChange: jobChangeReducer,
		// holiday: holidayReducer,
		// specialday: specialdayReducer,
		// company: companyReducer,
		// jobDes: jobDesReducer,
		// jobCan: jobCanReducer,
		// college: collegeReducer,
		// project: projectReducer,
		// candidate: candidateReducer,
		   employee: employeeReducer,
		// exEmployee: exEmployeeReducer,
		// exEmployeeCount: exEmployeeCountReducer,
		// vendor: vendorReducer,
		// user: userReducer,
		// userRoles: userRolesReducer,
		// pageMaster: pageMasterReducer,
		// cmsVariable: cmsVariableReducer,
		// emailTemplate: emailTemplateReducer,
		// emailInbox : emailInboxReducer,
		// scheduleInterview: scheduleInterviewReducer,
		// dashboard: dashboardReducer,
		// inventory: itemMasterReducer,
		// assets: assetReducer,
		// jobVacancy: jobVacancyReducer,
		// dashboardInterviewList: dashboardInterviewListReducer,
		// manufacturer: manufacturerReducer,
		// drives: drivesReducer,
		// address: addressReducer,
		// student: studentReducer,
		// hscCourse: hscCourseReducer,
		// interviewList: InterviewListReducer,
		// calendar: calendarReducer,
		// candidateCount: candidateCountReducer,
		// assetCount: assetCountReducer,
		// employeeCount: employeeCountReducer,
		// joiningEmployee: joiningEmployeeReducer,
		// joiningEmployeeCount: joiningEmployeeCountReducer,
		// getInterviewConut: InterviewCountReducer,
		// intern: internReducer,
		// candidateState: candidateStateReducer,
		// internCount: internCountReducer,
		// companyCount: companyCountReducer,
		// getCollegeCount: collegeCountReducer,
		// userPermission: userPermisssionReducer,
		// getAsset: itAssetReducer,
		// ItemAssetMapping: itemAssetMappingReducer,
		// updateDashboardInterviewStatus: updateDashboardInterviewStatusReducer,
		// changeRequest: changeRequestReducer,
		// totalStudentsByDrive: studentByDriveCountReducer,
		// internEvaluation: internEvaluationReducer,
		// userCount: userCountReducer,
		// assetsLicence: assestLicenceReducer,
		// assetVM: assetVMReducer,
		// emailTemplateDynamic: emailTemplateDynamicReducer,
		// changeRequestCount: changeRequestCountReducer,
		// jobDescCount: jobDescCountReducer,
		// projectCount: projectCountReducer,
		// manufacturerCount: manufacturerCountReducer,
		// driveCount: driveCountReducer,
		// addressCount: addressCountReducer,
		// salarySlip: salarySlipReducer,
		// workFlow: workFlowReducer,
		// workflowCount: workFlowCountReducer,
		// questions: questionsReducer,
		// onboardingCandidate: onboardingCandidateReducer,
		// onboardingCandidateCount: onboardedCandidateCountReducer,
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
