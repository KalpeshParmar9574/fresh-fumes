import * as Yup from "yup";
import { get, isEmpty } from "lodash";
import moment from "moment";

function isPresentValidation(message) {
	return this.test("isPresentValidation", message, function (value) {
		const { path, createError } = this;
		if (value === undefined) {
			return createError({
				path,
				message: message ?? "check this field please",
			});
		}

		return true;
	});
}
function instituteValidation(message) {
	return this.test("instituteValidation", message, function (value) {
		const { path, createError } = this;

		if (!this.parent.instituteId && !this.parent.instituteName) {
			return createError({
				path,
				message: message ?? "check this field please",
			});
		}
		return true;
	});
}

function courseValidation(message) {
	return this.test("courseValidation", message, function (value) {
		const { path, createError } = this;
		if (this.parent.educationTypeId!=='1'&&!this.parent.courseId && !this.parent.courseName) {
			return createError({
				path,
				message: message ?? "check this field please",
			});
		}
		return true;
	});
}

const uniquePropertyTest = function (value, propertyName, message) {
	if (
		this.parent
			.filter((v) => v !== value)
			.some((v) => get(v, propertyName) === get(value, propertyName))
	) {
		throw this.createError({
			path: `${this.path}.${propertyName}`,
			message,
		});
	}

	return true;
};

Yup.addMethod(Yup.object, "uniqueProperty", function (propertyName, message) {
	return this.test("unique", message, function (value) {
		return uniquePropertyTest.call(this, value, propertyName, message);
	});
});

Yup.addMethod(Yup.object, "uniqueProperties", function (propertyNames) {
	return this.test("unique", "", function (value) {
		const errors = propertyNames
			.map(([propertyName, message]) => {
				try {
					return uniquePropertyTest.call(this, value, propertyName, message);
				} catch (error) {
					return error;
				}
			})
			.filter((error) => error instanceof Yup.ValidationError);

		if (!isEmpty(errors)) {
			throw new Yup.ValidationError(errors);
		}

		return true;
	});
});


const perentValidater = function (value, propertyName, message) {
	if (
		this.parent
			.filter((v) => v !== value)
			.some((v) => get(v, propertyName) === get(value, propertyName))
	) {
		throw this.createError({
			path: `${this.path}.${propertyName}`,
			message,
		});
	}

	return true;
};

const today = new Date();
const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth()+1, 1);


const experienceSchema = Yup.object().shape({
	companyId: Yup.string()
	  .required("Company is required.")
	  .max(512, "Company is too long")
	  .typeError("Company is required."),
	designationName: Yup.string()
	  .required("Designation is required.")
	  .typeError("Designation is required."),
	technologies: Yup.array()
	  .min(1, "Technology is required.")
	  .required("Technology is required."),
	reasonForJobChange: Yup.string()
	  .required("Reason for job change is required.")
	  .typeError("Reason for job change is required."),
	from: Yup.date()
	  .max(firstDayOfMonth, "From date can't be future date")
	  .required("From date is required")
	  .typeError("Enter valid date")
	  .nullable(),
	to: Yup.date()
	  .min(Yup.ref("from"), "To date can't be before from date")
	  .required("To date is required")
	  .max(firstDayOfMonth, "To date can't be future date")
	  .typeError("Enter valid date")
	  .nullable(),
  });

Yup.addMethod(Yup.mixed, "isPresentValidation", isPresentValidation);
Yup.addMethod(Yup.mixed, "instituteValidation", instituteValidation);
Yup.addMethod(Yup.mixed, "courseValidation", courseValidation);
// Yup.addMethod(Yup.mixed, 'unique', unique);
const personalSchema = Yup.object().shape({
	firstName: Yup.string()
		.required("First name is required")
		.max(64, "First name is too long")
		.matches(/^[a-zA-Z.\s]+$/, "Only alphabets are allowed for this field ")
		.nullable(),
	lastName: Yup.string()
		.required("Last name is required")
		.max(64, "Last name is too long")
		.matches(/^[a-zA-Z.\s]+$/, "Only alphabets are allowed for this field ")
		.nullable(),
	// dateOfBirth: Yup.date().required('Date of Birth is required').typeError('Invalid Date'),
	// gender: Yup.string().required("Gender is required"),
	// jobId:Yup.number().required('JobId is required').nullable(),
	// maritalStatus: Yup.string().required('Marital Status is required'),
	// referedBy: Yup.string().required('Refered By is required').max(64, 'Refered by is too long'),
	contactNumber: Yup.string()
		.required('Contact number is required')
		.matches(/^[6-9]\d{9}$/, "Contact number is invalid")
		.min(10, "Contact number must be 10 digits")
		.max(10, "Contact number must be 10 digits")
		.nullable(),

	alternateContactNumber: Yup.string()
		.matches(/^[6-9]\d{9}$/, "Alternate contact number is invalid")
		.min(10, "Alternate contact number must be 10 digits")
		.max(10, "Alternate contact number must be 10 digits")
		/* .notOneOf(
			[Yup.ref('contactNumber')],
			'Conatct number and alternate contact number cannot be same',
		) */
		.nullable(),
	email: Yup.string()
		.required("Email is required")
		.email("Invalid email")
		.max(512, "Email is too long"),
	skype: Yup.string().max(512, "Skype is too long").nullable(),
	linkedIn: Yup.string()
		.url("Invalid URL")
		.max(1024, "linkedIn is too long")
		.nullable(),
	github: Yup.string().max(512, "Github is too long").nullable(),
	portfolioWebsite: Yup.string()
		.url("Invalid URL")
		.max(1024, "portfolioWebsite is too long")
		.nullable(),
	// max(512, 'LinkedIn is too long'),

	/* 	totalExperience: Yup.number().required("Total Experince Required").nullable(),
	technologies: Yup.array.when(["totalExperience"], {
		is: (totalExperience) => totalExperience === 0,
		then: Yup.array.of().min(1, "Please Select 1 Technology"),
		otherwise: Yup.string().nullable(),
	}), */

	education: Yup.array().of(
		Yup.object()
			.shape({
				educationTypeId: Yup.string()
					.required("Education type is required.")
					.nullable(),
				courseId: Yup.mixed().courseValidation("Course is required."),
				passingYear: Yup.number()
					.required("Passing year is required")
					.typeError("Passing year can only be number")
					.min(1900, "Passing year is Invalid")
					.max(2100, "Passing year is Invalid")
					.nullable(),
				percentage: Yup.number()
					.min(0, "Percentage is Invalid")
					.max(100, "Percentage is Invalid")
					.typeError("percentage can only be number")
					.nullable(),
				institute: Yup.mixed().instituteValidation("Institute is required."),
			})
			.uniqueProperties([["educationTypeId", "Education must be unique"]]),
	),
	experience:Yup.array()
	.of(experienceSchema)
	.test(
	  "unique-experiences",
	  "An experience for this company and time period already exists.",
	  function (experiences) {
		const companies = {};
		let hasDuplicate = false;
		experiences.forEach((experience) => {
		  const companyId = experience.companyId;
		  const from = experience.from;
		  const to = experience.to;
		  if (!companies[companyId]) {
			companies[companyId] = { from, to };
		  } else {
			if (
			  from >= companies[companyId].from &&
			  from <= companies[companyId].to
			) {
			  hasDuplicate = true;
			}
			if (
			  to >= companies[companyId].from &&
			  to <= companies[companyId].to
			) {
			  hasDuplicate = true;
			}
			if (
			  from <= companies[companyId].from &&
			  to >= companies[companyId].to
			) {
			  hasDuplicate = true;
			}
		  }
		  // Check for overlapping time periods with other companies
		  for (const id in companies) {

			if (id !== companyId) {
			  if (
				from >= companies[id].from &&
				from <= companies[id].to
			  ) {
				hasDuplicate = true;
			  }
			  if (
				to >= companies[id].from &&
				to <= companies[id].to
			  ) {
				hasDuplicate = true;
			  }
			  if (
				from <= companies[id].from &&
				to >= companies[id].to
			  ) {
				hasDuplicate = true;
			  }
			}
		  }
		});
		return !hasDuplicate;
	  }
	),
	course: Yup.array().of(
		Yup.object().shape(
			{
				courseName: Yup.mixed().when(
					["instituteName", "certificateUrl", "technologyId"],
					{
						is: (...fields) => fields.some(Boolean),
						then: Yup.mixed().required("Course is required"),
						otherwise: Yup.mixed().notRequired().nullable(),
					},
				),
				instituteName: Yup.mixed().when(
					["courseName", "certificateUrl", "technologyId"],
					{
						is: (...fields) => fields.some(Boolean),
						then: Yup.mixed().required("Institute Name is required"),
						otherwise: Yup.mixed().notRequired().nullable(),
					},
				),
				// certificateUrl: Yup.mixed().when(
				// 	["instituteName", "courseName", "technologyId"],
				// 	{
				// 		is: (...fields) => fields.some(Boolean),
				// 		then: Yup.mixed()
				// 			.required("Certificate Url is required")
				// 			.nullable(),
				// 		otherwise: Yup.mixed().notRequired().nullable(),
				// 	},
				// ),
				technologyId: Yup.mixed().when(
					["instituteName", "courseName", "certificateUrl"],
					{
						is: (...fields) => fields.some(Boolean),
						then: Yup.mixed().required("Technology is required").nullable(),
						otherwise: Yup.mixed().notRequired().nullable(),
					},
				),
			},
			[
				["courseName", "instituteName"],
				["courseName", "certificateUrl"],
				["courseName", "technologyId"],
				["instituteName", "certificateUrl"],
				["instituteName", "technologyId"],
				["certificateUrl", "technologyId"],
			],
		),
	),
	salary: Yup.object().when("totalExperience", {
		is: (totalExperience) => Number(totalExperience) > 0,
		then: Yup.object().shape({
			currentCtc: Yup.number()
				.required("Current CTC is required")
				.typeError("Value must be a number")
				.min(0, "Current CTC Not Valid")
				.max(10000000, "Current CTC Not Valid")
				.nullable(),
			expectedCtc: Yup.number("Value must be a number")
				.required("Expected CTC is required")
				.typeError("Value must be a number")
				.min(0, "Current CTC Not Valid")
				.max(10000000, "Current CTC Not Valid")
				.nullable(),
			addNoticePeriod: Yup.number("Value must be a number")
				.typeError("Value must be a number")
				.nullable(),
			// status: Yup.string('Value must be a number').required('Status is required'),
			salaryBeforeIncrement: Yup.number("Value must be a number")
				.nullable()
				.typeError("Value must be a number")
				.min(0, "Salary Before Increment Not Valid")
				.max(10000000, "Salary Before Increment Not Valid"),
		}),
		otherwise: Yup.object().shape({
			currentCtc: Yup.number()
				.nullable(),
			expectedCtc: Yup.number()
				.nullable(),
			addNoticePeriod: Yup.number()
				.nullable(),
			// status: Yup.string('Value must be a number').required('Status is required'),
			salaryBeforeIncrement: Yup.number()
				.nullable(),
		}),
	  }),


	activity: Yup.object().shape({
		// approachDate: Yup.date()
			// .required("Approach date is required")
			// .typeError("Approach date is required"),
		approachBy: Yup.string(),
		candidateStatusId: Yup.string().required("Candidate status is required"),
		note: Yup.string()
			.required("Note is required")
			.max(512, "Note is too long")
			.nullable(),
		futureDate: Yup.date()
			.min(new Date(), "Follow up date can't be past date")
			.typeError("Enter valid date")
			.nullable(),
		// appliedDate: Yup.date()
		// 	.required("Applied Date date is required")
		// 	.typeError("Applied Date date is required"),
	}),
});

export function checkPersonalDetails(error) {
	return Boolean(
		error.firstName ||
			error.lastName ||
			error.email ||
			error.dateOfBirth ||
			error.gender ||
			error.maritalStatus ||
			error.referedBy ||
			error.contactNumber ||
			error.email ||
			error.skype ||
			error.alternateContactNumber,
	);
}

export function checkEducationDetails(error) {
	return Boolean(error.education);
}

export function checkExperienceDetails(error) {
	return Boolean(error.experience || error.salary);
}

export function checkActivityDetails(error) {
	return Boolean(error.activity);
}

export default personalSchema;
