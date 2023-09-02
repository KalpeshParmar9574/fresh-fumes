import * as Yup from "yup";

const projectSchema = Yup.object().shape({
  technologyId: Yup.string().required("Technology is required"),
  projectName: Yup.string().
    required("Project name is required")
    .max(256, "Project manager is too long")
    .nullable(),
  description: Yup.string().required("Description is required").nullable(),
  projectManagerId: Yup.string()
    .required("Project manager is required")
    // .max(64, "Project manager is too long")
    // .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
    .nullable(),
  year: Yup.string()
    .required("Year is required")
    .max(4, "Invalid year")
    .matches(/^[0-9\s]+$/, "Only digits are allowed for this field ")
    .nullable(),
});

export default projectSchema;
