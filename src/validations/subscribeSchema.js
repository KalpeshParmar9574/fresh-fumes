import * as Yup from "yup";

const subscribeSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
});

export default subscribeSchema;
