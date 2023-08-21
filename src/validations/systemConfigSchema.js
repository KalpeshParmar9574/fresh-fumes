import * as Yup from "yup";


const systemConfigSchema =  (moduleName) => {
  return(
  Yup.object().shape({
  clientEmail: Yup.string()
    .required("Email is required")
    .email("Invalid email")
    .max(512, "Email is too long"),
  clientId: Yup.string().required("Client Id is required"),
  clientSecretId: Yup.string().required("Client SecretId is required"),
  refreshToken: Yup.string().required("RefreshToken is required"),
  redirectUrl: Yup.string()
    .required("Redirect Url is required")
    .url("Invalid URL")
    .max(1024, "RedirectUrl is too long"),
    ...( moduleName === "drives" ? {
        adharFolderKey: Yup.string().required("Adhar FolderKey is required"),
        checklistFolderKey: Yup.string().required("Checklist FolderKey is required"),
        panFolderKey: Yup.string().required("PAN FolderKey is required"),
        employeeResumesFolderKey: Yup.string().required("EmployeeResumes FolderKey is required"),
        candidateResumesFolderKey: Yup.string().required("CandidateResumes FolderKey is required"),
        internResumesFolderKey:Yup.string().required("InternResumes FolderKey is required"),
        projectDefinationFolderKey: Yup.string().required("ProjectDefination FolderKey is required")
    } : {})
})
)
};


export default systemConfigSchema;