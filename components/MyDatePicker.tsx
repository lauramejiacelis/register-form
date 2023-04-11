import React from 'react';
import { useField, useFormikContext } from 'formik';
import DatePicker from 'react-datepicker';
import styles from '../styles/Home.module.css';

// export const DatePickerField = ({ name = '' }: any) => {
//   const [field, meta, helpers] = useField(name);

//   const { value } = meta;
//   const { setValue } = helpers;

//   return (
//     <DatePicker
//       {...field}
//       selected={value}
//       onChange={(date) => setValue(date)}
//     />
//   );
// };

const DatePickerField = ({ field, form, ...props }: any) => (
  // OR const { setFieldValue } = form;
  // OR const { value, name } = field;
  <div>
    <DatePicker
      dateFormat="dd/MM/yyyy"
      {...field}
      selected={field.value}
      onChange={(val) => form.setFieldValue(field.name, val)}
      className={styles.formInput}
    />
  </div>
);

export default DatePickerField;
