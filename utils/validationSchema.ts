import * as Yup from 'yup';

const isRequiredMessage = 'This field is required';
const mustBeNumber = 'Can only be a number';
const tenDigits = 'Needs to be exactly 10 digits';
const tooShort = 'Too Short';

export const formSchema = Yup.object().shape({
  country: Yup.string().required(isRequiredMessage),
  gender: Yup.string().required(isRequiredMessage),
  firstName: Yup.string().required(isRequiredMessage).min(3, tooShort),
  lastName: Yup.string().required(isRequiredMessage).min(3, tooShort),
  dateOfBirth: Yup.date()
    .required(isRequiredMessage)
    .max(new Date(Date.now() - 567648000000), 'You must be at least 18 years'),
  documentType: Yup.string().required(isRequiredMessage),
  documentNumber: Yup.string()
    .min(8, 'Must be at least 8 characters')
    .required(isRequiredMessage),
  documentImage: Yup.string().required(isRequiredMessage),
  email: Yup.string().email().required(isRequiredMessage),
  password: Yup.string()
    .min(6, 'too short!')
    .max(10, 'too long')
    .required(isRequiredMessage),
  confirmPassword: Yup.string()
    .required(isRequiredMessage)
    .oneOf([Yup.ref('password')], 'passwords do not match!'),
  tel: Yup.number()
    .required(isRequiredMessage)
    .typeError(mustBeNumber)
    .test('len', tenDigits, (val) => val.toString().length === 10),
  cel: Yup.number()
    .required(isRequiredMessage)
    .typeError(mustBeNumber)
    .test('len', tenDigits, (val) => val.toString().length === 10),
  address: Yup.string().required(isRequiredMessage),
  zipCode: Yup.number()
    .required(isRequiredMessage)
    .typeError('Zip code can only be a number')
    .test(
      'len',
      'Must be exactly 5 characters',
      (val) => val.toString().length === 5
    ),
});
