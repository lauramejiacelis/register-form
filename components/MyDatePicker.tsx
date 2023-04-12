import React from 'react';
import DatePicker from 'react-datepicker';
import styles from '../styles/Home.module.css';

const DatePickerField = ({ field, form, ...props }: any) => (
  <div>
    <DatePicker
      dateFormat="dd/MM/yyyy"
      {...field}
      selected={field.value}
      onChange={(val) => form.setFieldValue(field.name, val)}
      className={styles.formInput}
      showYearDropdown
      scrollableYearDropdown
      showDisabledMonthNavigation
    />
  </div>
);

export default DatePickerField;
