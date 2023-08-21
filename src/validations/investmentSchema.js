import * as Yup from 'yup';

// Define the validation schema
const investmentSchema = (Obj)=>(Yup.object().shape({
  OtherData: Yup.object().shape({
    employeeName: Yup.string().required('Employee name is required'),
    PANNumber: Yup.string()
    .required("Pan card number is required")
    .max(10, "Pan card number must have 10 digits")
    .min(10, "Pan card number must have 10 digits")
    .matches(
      /^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/,
      "Pan card number is not valid"
    )
    .nullable(),
    date: Yup.string().required('Date is required'),
    signature: Yup.string().required('Signature is required'),
    option: Yup.string().required('Option is required'),
    employeePlace: Yup.string().required('Employee place is required'),
  }),
  exportNewData: Yup.object().shape(
    Object.keys(Obj).reduce((schema, key) => {
      schema[key] = Yup.string().required(`required`);
      // schema[key] = Yup.string().required(`${key} is required`);
      return schema;
    }, {})
  ),
}))




    // LIP: Yup.number().min(0).required('Life Insurance Premium is required'),
    // ULIP: Yup.number().min(0).required('Deposit in ULIP is required'),
    // ELSS: Yup.number().min(0).required('Equity Linked Saving Scheme (ELSS) is required'),
    // SCSC: Yup.number().min(0).required('Senior Citizen Savings Scheme / Sukanya Samriddhi Account is required'),
    // CEEP1: Yup.number().min(0).required('Children Education expenditure is required'),
    // TBTB: Yup.number().min(0).required('Infrastructure Bonds / Tax saving bonds is required'),
    // PP80CC: Yup.number().min(0).required('Pension Plans u/s 80CCC is required'),
    // PPFSSC: Yup.number().min(0).required('Public Provident Fund (PPF) is required'),
    // DINSC: Yup.number().min(0).required('Deposit in NSC is required'),
    // NSC: Yup.number().min(0).required('Interest on NSC is required'),
    // NPSH: Yup.number().min(0).required('NPS (New Pension Scheme) is required'),
    // HLPR: Yup.number().min(0).required('Housing Loan Principal Repayment is required'),
    // FDB: Yup.number().min(0).required('Fixed Deposit in Banks is required'),
    // POTD: Yup.number().min(0).required('Post Office Term Deposits is required'),
  // }),
  // DUS80D: Yup.object().shape({
    // MUP250000: Yup.number().min(0).required('Mediclaim (upto Rs. 25000/-) is required'),
    // MFP50000: Yup.number().min(0).required('Mediclaim for parents is required'),
  // }),
  // DUS80EE: Yup.object().shape({
    // IOHL: Yup.number().min(0).required('Interest on Housing Loan is required'),
  // }),
  // otherSources: Yup.object().shape({
    // IOOS: Yup.number().min(0).required('Income of other sources is required'),
  // }),


// const investmentSchema = 

export default investmentSchema;