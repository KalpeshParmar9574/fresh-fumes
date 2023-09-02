import * as Yup from "yup";

const employeeFormSchema=(isProbation)=>{
  
  if(!isProbation){
    return Yup.object().shape({
  question: Yup.array().of(
    Yup.object().shape({
      answers: Yup.array().of(
        Yup.object().shape({
          // answer: Yup.mixed().required('Answer is required').test('not-zero', 'Answer is required', value => value != 0)
          // .required(),
          answer: Yup.mixed()
  .nullable()
  .required('Answer is required')
  .test('not-zero', 'Answer is required', value => value !== 0)
        })
      ),
    })
  ),
});
  }else{
return Yup.object().shape({
  question: Yup.array().of(
    Yup.object().shape({
      answers: Yup.array().of(
        Yup.object().shape({
          // answer: Yup.mixed().required('Answer is required').test('not-zero', 'Answer is required', value => value != 0)
          // .required(),
          answer: Yup.mixed()
  .nullable()
  .required('Answer is required')
  .test('not-zero', 'Answer is required', value => value !== 0)
        })
      ),
    })
  ),
  comments:Yup.string().required("Comments is required"),
  trainingDevelopement:Yup.string().required("Training and/or Development Needs  is required"),
  actionsAgreed:Yup.string().required("Actions Agreed is required"),
  agreed: Yup.boolean().oneOf([true], "required").required("required"),

});
  }
}

// answer: Yup.mixed().required('Answer is required').mixed()
//           .test('not-zero', 'You cannot write 0', function (value) {
//             if (this.options.context.type === 'text') {
//               // Validation for text input
//               return typeof value === 'string' && value.trim().length > 0;
//             } else if (this.options.context.type === 'rating') {
//               // Validation for rating input
//               return value !== 0;
//             }
//             return true; // Default validation
//           }),

export default employeeFormSchema