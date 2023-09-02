import Icon from "@mui/material/Icon";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InboxIcon from '@mui/icons-material/Inbox';
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import PeopleIcon from "@mui/icons-material/People";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import CalculateIcon from '@mui/icons-material/Calculate';
import PersonIcon from "@mui/icons-material/Person";
import PagesIcon from "@mui/icons-material/Pages";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SettingsIcon from "@mui/icons-material/Settings";
import GroupsIcon from '@mui/icons-material/Groups';
import LocalStorage from "../../service/localStorage";
import { decryption } from "../../utils/encodeString";

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon component={name} width={22} height={22} />;
let userPermissions = LocalStorage.getItem("userPermissions");

if (userPermissions != null) {
	userPermissions = JSON.parse(decryption(userPermissions));
} else {
	userPermissions = {};
}

// let up = Object.keys(userPermissions);
const getVisible = (key) => userPermissions?.[key]?.view ?? false;
const sidebarConfig = [
	{
		title: "dashboard",
		path: "/dashboard",
		icon: getIcon(DashboardIcon),
		cypress: "dashboard",
		visible: true,
	},
	{
			title: "Investment Declaration",
			path: '/investmentdeclaration',
			icon: getIcon(PagesIcon),
			cypress: "investmentdeclaration",
			visible: getVisible("page-master") || true,
			// children: [
			// 	{
			// 		title: "Page Master",
			// 		path: "/page-master",
			// 		subCypress: "page-master",
			// 		visible: getVisible("page-master"),
			// 	},
			// ],
		},
	{
			title: "Evaluation",
			// path: '/evaluation',
			icon: getIcon(PagesIcon),
			cypress: "evaluation",
			visible: getVisible("page-master") || true,
			children: [
				{
					title: "Evaluation",
					path: "/evaluation",
					subCypress: "evaluation",
					visible: getVisible("page-master") || true,
				},
				// {
				// 	title: "Evaluation Form",
				// 	path: "/evaluationform",
				// 	subCypress: "evaluationform",
				// 	visible: getVisible("page-master") || true,
				// },
			],
		},
	// {
	// 	title: "Organization",
	// 	// path: '/dashboard/organization',
	// 	icon: getIcon(CorporateFareOutlinedIcon),
	// 	cypress: "organization",
	// 	visible:
	// 		getVisible("employee") ||
	// 		getVisible("holiday") ||
	// 		getVisible("policy") ||
	// 		getVisible("specialDay") ||
	// 		getVisible("dataChangeRequest") ||
	// 		false,
	// 	children: [
	// 		{
	// 			title: "Employee",
	// 			path: "/employee",
	// 			subCypress: "employee",
	// 			visible: getVisible("employee"),
	// 		},
	// 		{
	// 			title: "Change Requests",
	// 			path: "/changeRequest",
	// 			subCypress: "dataChangeRequest",
	// 			visible: getVisible("dataChangeRequest"),
	// 		},
	// 		{
	// 			title: "Holiday",
	// 			path: "/holiday",
	// 			subCypress: "holiday",
	// 			visible: getVisible("holiday"),
	// 		},
	// 		{
	// 			title: "Special day",
	// 			path: "/specialday",
	// 			subCypress: "specialday",
	// 			visible: getVisible("specialDay"),
	// 		},
	// 		{
	// 			title: "Policy",
	// 			path: "/policy",
	// 			subCypress: "policy",
	// 			visible: getVisible("policy"),
	// 		},
	// 		// {
	// 		//   title: "Projects",
	// 		//   path: "/manage-project/add",
	// 		//   subCypress: "projects",
	// 		// },
	// 	],
	// },
	// {
	// 	title: "Recruitment",
	// 	// path: '/dashboard/products',
	// 	icon: getIcon(PeopleIcon),
	// 	cypress: "recruitment",
	// 	visible:
	// 		getVisible("candidates") ||
	// 		getVisible("interview") ||
	// 		getVisible("jobDescription") ||
	// 		getVisible("company") ||
	// 		getVisible("onboardedCandidates") || 
	// 		false,
	// 	children: [
	// 		{
	// 			title: "Inbox",
	// 			path: "/email-inbox",
	// 			// icon: getIcon(InboxIcon),
	// 			subCypress: "inbox",
	// 			visible: getVisible("inbox"),
	// 		},
	// 		{
	// 			title: "Candidates",
	// 			path: "/candidate",
	// 			subCypress: "candidates",
	// 			visible: getVisible("candidates"),
	// 		},
	// 		{
	// 			title: "Interview",
	// 			path: "/interviewlist",
	// 			subCypress: "interview",
	// 			visible: getVisible("interview"),
	// 		},
	// 		{
	// 			title: "Job Description",
	// 			path: "/job-description",
	// 			subCypress: "jobDescription",
	// 			visible: getVisible("jobDescription"),
	// 		},
	// 		{
	// 			title: "Company",
	// 			path: "/company",
	// 			subCypress: "company",
	// 			visible: getVisible("company"),
	// 		},
	// 		{
	// 			title: "Onboarded Candidates",
	// 			path: "/onboardedCandidates",
	// 			// icon: getIcon(GroupsIcon),
	// 			subCypress: "onboardedCandidates",
	// 			visible: getVisible("onboardedCandidates"),
	// 		},
			
	// 		/* {
	// 			title: "Job Vacancy",
	// 			path: "/job-vacancy",
	// 			subCypress: "jobVacancy",
	// 			visible: getVisible("jobVacancy"),
	// 		}, */
	// 	],
	// },
	// {
	// 	title: "TPA",
	// 	// path: '/dashboard/blog',
	// 	icon: getIcon(HomeWorkIcon),
	// 	cypress: "tpa",
	// 	visible:
	// 		getVisible("college") ||
	// 		getVisible("interns") ||
	// 		getVisible("drives") ||
	// 		getVisible("project") ||
	// 		false,
	// 	children: [
	// 		{
	// 			title: "College",
	// 			path: "/college",
	// 			subCypress: "college",
	// 			visible: getVisible("college"),
	// 		},
	// 		{
	// 			title: "Interns",
	// 			path: "/interns",
	// 			subCypress: "interns",
	// 			visible: getVisible("interns"),
	// 		},
	// 		{
	// 			title: "Drives",
	// 			path: "/drives",
	// 			subCypress: "drives",
	// 			visible: getVisible("drives"),
	// 		},
	// 		{
	// 			title: "Project",
	// 			path: "/project",
	// 			subCypress: "project",
	// 			visible: getVisible("project"),
	// 		},
	// 	],
	// },
	// {
	// 	title: "Asset Management",
	// 	icon: getIcon(Inventory2Icon),
	// 	cypress: "assestmanagement",
	// 	visible:
	// 		getVisible("assets") ||
	// 		getVisible("items") ||
	// 		getVisible("itemInventory") ||
	// 		getVisible("vendors") ||
	// 		getVisible("manufacturers") ||
	// 		getVisible("AssetMaster") ||
	// 		getVisible("assetMapping") ||
	// 		getVisible("assetItemMapping") ||
	// 		getVisible("licenceModule")||getVisible("ispMaster") ||
	// 		getVisible("vmMaster") ||getVisible("licenceMaster")||
	// 		false,
	// 	children: [
	// 		{
	// 			title: "Assets",
	// 			path: "/assets",
	// 			subCypress: "assets",
	// 			visible: getVisible("assets"),
	// 		},
	// 		{
	// 			title: "Items",
	// 			path: "/items",
	// 			subCypress: "items",
	// 			visible: getVisible("items"),
	// 		},
	// 		{
	// 			title: "Item Inventory",
	// 			path: "/item-group",
	// 			subCypress: "itemInventory",
	// 			visible: getVisible("itemInventory"),
	// 		},
	// 		{
	// 			title: "Vendors",
	// 			path: "/vendor",
	// 			subCypress: "vendors",
	// 			visible: getVisible("vendors"),
	// 		},
	// 		{
	// 			title: "Manufacturers",
	// 			path: "/manufacturer",
	// 			subCypress: "manufacturers",
	// 			visible: getVisible("manufacturers"),
	// 		},
	// 		{
	// 			title: "Asset Master",
	// 			path: "/asset-master",
	// 			subCypress: "assetMapping",
	// 			visible: getVisible("assetMapping"),
	// 		},
	// 		{
	// 			title: "Asset Item Mapping",
	// 			path: "/item-asset-mapping",
	// 			subCypress: "assetItemMapping",
	// 			visible: getVisible("assetItemMapping"),
	// 		},
	// 		{
	// 			title: "Licence",
	// 			path: "/licence-master",
	// 			subCypress: "licenceMaster",
	// 			visible: getVisible("licenceMaster"),
	// 		},
	// 		{
	// 			title: "VM",
	// 			path: "/vm",
	// 			subCypress: "vmMaster",
	// 			visible: getVisible("vmMaster"),
	// 		},
	// 		{
	// 			title: "ISP",
	// 			path: "/isp",
	// 			subCypress: "isp",
	// 			visible: getVisible("ispMaster"),
	// 			// visible: getVisible("ips"),
	// 		},
	// 		// {
	// 		//   title: "Configurations",
	// 		//   path: "/config",
	// 		//   subCypress: "Configurations",
	// 		// },
	// 	],
	// },
	// {
	// 	title: "CMS",
	// 	// path: '/dashboard/blog',
	// 	icon: getIcon(PagesIcon),
	// 	cypress: "cms",
	// 	visible: getVisible("page-master") || false,
	// 	children: [
	// 		{
	// 			title: "Page Master",
	// 			path: "/page-master",
	// 			subCypress: "page-master",
	// 			visible: getVisible("page-master"),
	// 		},
	// 	],
	// },
	// //uncomment for user-list
	// {
	// 	title: "Settings",
	// 	// path: '/dashboard/blog',
	// 	icon: getIcon(SettingsIcon),
	// 	cypress: "users",
	// 	visible:
	// 		getVisible("master") ||
	// 		getVisible("department") ||
	// 		getVisible("addressMaster") ||
	// 		//getVisible("userList") ||
	// 		getVisible("userRoles") ||
	// 		getVisible("userPermissions") ||
	// 		getVisible("emailTemplate") ||
	// 		getVisible("workFlow") ||
	// 		getVisible("salarySlip") ||
	// 		getVisible("systemConfig") ||
	// 		false,
	// 	children: [
	// 		{
	// 			title: "Master",
	// 			path: "/master",
	// 			subCypress: "master",
	// 			visible: getVisible("master"),
	// 		},
	// 		{
	// 			title: "Department",
	// 			path: "/department",
	// 			subCypress: "department",
	// 			visible: getVisible("department"),
	// 		},
	// 		{
	// 			title: "Address Master",
	// 			path: "/address-master",
	// 			subCypress: "addressMaster",
	// 			visible: getVisible("addressMaster"),
	// 		},
	// 		{
	// 			title: "user",
	// 			path: "/",
	// 			subCypress: "user",
	// 			visible:
	// 				getVisible("userList") ||
	// 				getVisible("userRoles") ||
	// 				getVisible("userPermissions") ||
	// 				false,
	// 			subChildren: [
	// 				{
	// 					title: "System User",
	// 					path: "/user-list",
	// 					subChildCypress: "userList",
	// 					visible: getVisible("userList"),
	// 				},
	// 				{
	// 					title: "Roles",
	// 					path: "/user-roles",
	// 					subChildCypress: "userRoles",
	// 					visible: getVisible("userRoles"),
	// 				},
	// 				{
	// 					title: "User Permissions",
	// 					path: "/user-permissions",
	// 					subChildCypress: "userPermissions",
	// 					visible: getVisible("userPermissions"),
	// 				},
	// 			],
	// 		},
	// 		{
	// 			title: "Email Templates",
	// 			path: "/emailTemplateDynamic",
	// 			subCypress: "emailTemplate",
	// 			visible: getVisible("emailTemplate"),
	// 		},
	// 		{
	// 			title: "Work Flows",
	// 			path: "/workFlow",
	// 			subCypress: "workFlow",
	// 			visible: getVisible("workFlow"),
	// 		},
	// 		{
	// 			title: "Salary Slip",
	// 			path: "/salarySlip",
	// 			subCypress: "salarySlip",
	// 			visible: getVisible("salarySlip"),
	// 		},
	// 		{
	// 			title: "System Config",
	// 			path: "/system-config",
	// 			subCypress: "systemConfig",
	// 		    visible:getVisible("systemConfig"),
				
	// 		}
	// 	],
	// },
	
	// {
	// 	title: "Evaluation",
	// 	// path: '/dashboard/blog',
	// 	icon: getIcon(CalculateIcon),
	// 	cypress: "evaluation",
	// 	visible:
	// 		getVisible("questions") ||
	// 		false,
	// 	children: [
	// 		{
	// 			title: "Questions",
	// 			path: "/questions",
	// 			subCypress: "questions",
	// 			visible: getVisible("questions"),
	// 		},
	// 	],
	// },

	// {
	// 	title: "Onboarded Candidates",
	// 	path: "/onboardedCandidates",
	// 	icon: getIcon(GroupsIcon),
	// 	cypress: "onboardedCandidates",
	// 	visible: true,
	// },
	// {
	// 	title: 'Documents',
	// 	// path: '/dashboard/blog',
	// 	icon: getIcon(FeedIcon),
	// 	children: [
	// 		{
	// 			title: 'List',
	// 			path: '/document-list',
	// 		},
	// 		{
	// 			title: 'Content',
	// 			path: '/content',
	// 		},
	// 		{
	// 			title: 'History',
	// 			path: '/history',
	// 		},
	// 	],
	// },
];

// let tempSidebarConfig = [];
// let sidebarConfig = [];

// console.log("User Permission : ", userPermissions);
// console.log("Sidebar Config :", Config);

// tempSidebarConfig = Config.map((sidebarConfigs) => {
// 	if (sidebarConfigs.children) {
// 		return {
// 			...sidebarConfigs,
// 			children: sidebarConfigs.children.map((childrenSidebarConfig) => {
// 				if (childrenSidebarConfig.subChildren) {
// 					console.log(childrenSidebarConfig.subChildren);
// 				} else {
// 					Object.keys(userPermissions).forEach((key) => {
// 						if (
// 							childrenSidebarConfig.subCypress === key /* &&
// 							userPermissions[key]["view"] === true */
// 						) {
// 							/* console.log(childrenSidebarConfig.subCypress);
// 							console.log(key);
// 							console.log(userPermissions[key]["view"]); */
// 							return childrenSidebarConfig;
// 						}
// 					});
// 				}
// 			}),
// 		};
// 	} else {
// 		return sidebarConfigs;
// 	}
// });

/* tempSidebarConfig = Config.map((sidebarConfigs) => {
	Object.keys(userPermissions).forEach(key => {
		if (sidebarConfigs.children) {
			return {
				...sidebarConfigs,
				children: sidebarConfigs.children.map((childrenSidebarConfig) => {
					if (childrenSidebarConfig.subChildren) {
						return {
							...childrenSidebarConfig,
							subChildren: childrenSidebarConfig.subChildren.map(
								(subChildrenSidebarConfig) => {
									if (
										subChildrenSidebarConfig.subChildCypress == key &&
										userPermissions[key].view == true
									) {
										return subChildrenSidebarConfig;
									}
								},
							),
						};
					} else {
						if (
							childrenSidebarConfig.subCypress === key &&
							userPermissions[key].view == true
						) {
							return childrenSidebarConfig;
						}
					}
				}),
			};
		} else {
			return sidebarConfigs;
		
		}
	}
}); */

/* sidebarConfig = Config.map((sidebarConfigs) =>
	sidebarConfigs.children
		? {
				...sidebarConfigs,
				children: sidebarConfigs.children.map((childrenSidebarConfig) => {
					if (childrenSidebarConfig.subChildren) {
						return {
							...childrenSidebarConfig,
							subChildren: childrenSidebarConfig.subChildren.map(
								(subChildrenSidebarConfig) => {
									for (const [key, value] of Object.entries(userPermissions)) {
										console.log(
											"Sub Children Sidebar Cypress :",
											subChildrenSidebarConfig.subChildCypress,
										);

										console.log("User Permission Module Key :", key);

										console.log(
											"User Permission Module View Permission :",
											value.view,
										);
										if (
											subChildrenSidebarConfig.subChildCypress == key &&
											value.view == true
										) {
											return subChildrenSidebarConfig;
										} else {
											return "";
										}
									}
								},
							),
						};
					} else {
						for (const [key, value] of Object.entries(userPermissions)) {
							console.log(
								"Children Sidebar Cypress :",
								childrenSidebarConfig.subCypress,
							);

							console.log("User Permission Module Key :", key);

							console.log(
								"User Permission Module View Permission :",
								value.view,
							);

							if (
								childrenSidebarConfig.subCypress == key &&
								value.view == true
							) {
								return childrenSidebarConfig;
							} else {
								return "";
							}
						}
					}
				}),
		  }
		: sidebarConfigs,
); */

/* sidebarConfig = Config.map((sidebarConfig) =>
	sidebarConfig.children
		? {
				...sidebarConfig,
				children: sidebarConfig.children.map((childrenSidebarConfig) =>
					childrenSidebarConfig.subChildren
						? {
								...childrenSidebarConfig,
								subChildren: childrenSidebarConfig.subChildren.map(
									(subChildrenSidebarConfig) => {
										for (const [key, value] of Object.entries(
											userPermissions,
										)) {
											if (
												subChildrenSidebarConfig.subChildCypress == key &&
												[key].value.view == true
											) {
												return subChildrenSidebarConfig;
											} else {
												return [];
											}
										}
									},
								),
						  }
						: childrenSidebarConfig,
				),
		  }
		: sidebarConfig,
); */

/* sidebarConfig = Config.map((sidebarConfig) =>
	sidebarConfig.children
		? {...childrenSidebarConfig, sidebarConfig.children = sidebarConfig.children.map(
				(childrenSidebarConfig) =>
					childrenSidebarConfig.subChildren
						? childrenSidebarConfig.subChildren.map(
								(subChildrenSidebarConfig) => {
									console.log(subChildrenSidebarConfig);
									return { ...subChildrenSidebarConfig };
								},
						  )
						: { ...childrenSidebarConfig },
		  )) 
				
			: { ...sidebarConfig },
); */

// for (const [key, value] of Object.entries(userPermissions)) {
// 	Config.map((config) => {
// 		if (config?.children) {
// 			config.children.map((childrenConfig) => {
// 				if (childrenConfig?.subChildren) {
// 					childrenConfig.subChildren.map((subChildrenConfig) => {
// 						if (
// 							subChildrenConfig.subChildCypress == key &&
// 							value.view == true
// 						) {
// 							console.log(subChildrenConfig);

// 							/* return subChildrenConfig; */
// 						}
// 					});
// 				} else {
// 					if (childrenConfig.subCypress == key && value.view == true) {
// 						sidebarConfig.push(childrenConfig);

// 						console.log(childrenConfig);

// 						/* return childrenConfig; */
// 					}
// 				}
// 			});
// 		} else {
// 			if (config.cypress == key && value.view == true) {
// 				/* return config; */

// 				console.log(config);
// 			}
// 		}
// 	});
// }

/* let temppermission = permissionArray.map((permission) =>
	permission.moduleId == permissionModuleId
		? { ...permission, [permissionName]: permissionValue }
		: permission,
); */
// console.log(tempSidebarConfig);

/* sidebarConfig = tempSidebarConfig.filter((tmpSidebarConfig) =>
	tmpSidebarConfig.children
		? tmpSidebarConfig.children.some((children) =>
				children.subChildren
					? children.subChildren.some(
							(subChildren) => subChildren !== undefined,
					  )
					: children !== undefined,
		  )
		: tmpSidebarConfig !== undefined,
); */
/* sidebarConfig = tempSidebarConfig.filter((tmpSidebarConfig) =>
	tmpSidebarConfig.children
		? tmpSidebarConfig.children.some(
				(children) =>  {
					console.log(children);
				},
				/* children.subChildren
					? children.subChildren.some(
							(subChildren) => subChildren !== undefined,
					  )
					: children !== undefined, */
/* 	  )
		: tmpSidebarConfig != undefined,
); */

// sidebarConfig = tempSidebarConfig.map((tmpSidebarConfig) => {
// 	if (tmpSidebarConfig.children) {
// 		tmpSidebarConfig.children.map((tmpChildrenSidebarConfig) => {
// 			/* if (tmpChildrenSidebarConfig?.SubChildren) {
// 				tmpChildrenSidebarConfig?.SubChildren.filter(Boolean);
// 			} else {
// 				return tmpChildrenSidebarConfig.filter(Boolean);
// 			} */
// 		});
// 	} else {
// 		return tempSidebarConfig.filter(Boolean);
// 	}

/* const children = tmpSidebarConfig.children.map(
			(tmpChildrenSidebarConfig) => {
				const SubChildren = tmpChildrenSidebarConfig.SubChildren.filter(
					(tmpSubChildrenSidebarConfig) =>
						tmpSubChildrenSidebarConfig !== undefined,
				);
				if (SubChildren.length) {
					return { ...tmpChildrenSidebarConfig, SubChildren };
				}
			},
		);
		if (children.length) {
			return { ...tmpSidebarConfig, children };
		}
		return null; */
// });

/* if (tmpSidebarConfig.children) {
		
		tempSidebarConfig.children.filter(function (tmpChildrenSidebarConfig) {
			return  tmpChildrenSidebarConfig !== undefined;
		}

	}/* else { */
/* return tmpSidebarConfig !== undefined; */
/* 	} */

export default sidebarConfig;
