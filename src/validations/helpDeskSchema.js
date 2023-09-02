import * as Yup from "yup";

export const helpDeskSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  defaultAssignee: Yup.string().required("Default Assignee is required"),
  responsiblePerson: Yup.string().required("Responsible Person is required"),
  responseTime: Yup.number()
    .required("Response time is required")
    .typeError("Please enter valid number")
    .max(100, "Response Time should be less than 100 days")
    .nullable(),
  prefix: Yup.string().required("Prefix is required"),
  subCategories: Yup.array().of(
    Yup.object().shape({
      title: Yup.string().required("Title is required"),
    })
  ),
});

export const addHelpDeskTicketSchema = Yup.object().shape({
  // assignedBy: Yup.string().required("Assigned By is required"),
  // assignedTo: Yup.string().required("Assigned To is required"),
  categoryId: Yup.string().required("Category is required"),
  subCategoryId: Yup.string().required("Sub Category is required"),
  // priority: Yup.string().required("Priority is required"),
  description: Yup.string().required("Description is required"),
  subject: Yup.string().required("Subject is required"),
  // reporterPerson: Yup.string().required("Reporter Person is required"),
  attachments: Yup.array().test("fileType", "Only jpg, jpeg and pdf files are allowed", (value) => {
    if (!value || value.length === 0) {
      return true;
    }
    const validFileTypes = ["image/jpeg", "image/jpg", "application/pdf"];
    return value.every((file) => validFileTypes.includes(file.type)) || value.every((file) => validFileTypes.includes(file.extension));
  }),
});  

export  const viewHelpDeskSchema = Yup.object().shape({
  response: Yup.string().required("Response is required"),
  assignedTo: Yup.string().required("Assigned To is required"),
  subject: Yup.string().required("Subject is required"),
  responseAttachments: Yup.array().of(
    Yup.mixed().test(
      "fileType",
      "Only jpg, jpeg and pdf files are allowed",
      (value) => {
        if (value) {
          const fileType = value.type;
          // const supportedExtensions = ['.jpg', '.jpeg', '.pdf'];
          // if(fileType.length>0){
          // const extension =  value?.substring(value?.lastIndexOf('.')).toLowerCase();
          return (
            fileType === "image/jpeg" ||
            fileType === "image/jpg" ||
            fileType === "application/pdf"|| 
            fileType === ".jpeg" ||
            fileType === ".jpg" ||
            fileType === ".pdf" 
          );
          // }
        }
        return true;
      }
    )
  ),
})