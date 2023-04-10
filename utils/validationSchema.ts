import * as Yup from 'yup';

const isRequiredMessage = 'Este campo es obligatorio';
const missingNumbers = 'Faltan números!';
const maxNumbers = 'Máximo 10 números';

export const formSchema = Yup.object().shape({
  country: Yup.string().required(isRequiredMessage),
  gender: Yup.string().required(isRequiredMessage),
  firstName: Yup.string().min(3, 'muy corto!').required(isRequiredMessage),
  lastName: Yup.string().required(isRequiredMessage),
  dateOfBirth: Yup.date().required(isRequiredMessage),
  documentType: Yup.string().required(isRequiredMessage),
  documentNumber: Yup.number().min(8, missingNumbers).max(10, maxNumbers),

  email: Yup.string().email().required(isRequiredMessage),
  password: Yup.string()
    .min(4, 'muy corta!')
    .max(10, 'muy larga')
    .required(isRequiredMessage),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref('password')],
    'No coinciden las contraseñas'
  ),
  tel: Yup.number().min(10, missingNumbers),
  cel: Yup.number().min(10, missingNumbers),
  adress: Yup.string().required(isRequiredMessage),
  zipCode: Yup.number().required(),
});
