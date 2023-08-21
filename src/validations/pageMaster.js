import * as Yup from "yup";

const pageMaster = Yup.object().shape({
  title: Yup.string()
    .required("Title is required")
    .max(112, "Length of character must be less than 112")
    .nullable(),
  content: Yup.string().required("Content is required").nullable(),
  metaTitle: Yup.string()
    .required("Meta title is required")
    .max(112, "Length of character must be less than 112")
    .nullable(),
  metaKeyword: Yup.string()
    .required("Meta keyword is required")
    .max(112, "Length of character must be less than 112")
    .nullable(),
  metaDescription: Yup.string()
    .required("Meta description is required")
    .max(512, "Length of character must be less than 512")
    .nullable(),
  accessKey: Yup.string()
    .required("Access key is required")
    .max(122, "Length of character must be less than 512")
    .nullable(),
  status: Yup.string().required("Status is required").nullable(),
});

export default pageMaster;
