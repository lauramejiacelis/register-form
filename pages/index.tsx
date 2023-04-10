import Head from 'next/head';
import { Formik, Form, Field, ErrorMessage, useField } from 'formik';
import { formSchema } from '@component/utils/validationSchema';
import { Countries, Genders, DocumentTypes } from '@component/utils/constants';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import styles from '../styles/Home.module.css';
import { VscCalendar } from 'react-icons/vsc';

interface FormValues {
  country: string;
  gender: string;
  firstName: string;
  lastName: string;
  documentType: string;
  documentNumber: string;
  email: string;
  password: string;
  confirmPassword: string | null;
  tel: number;
  cel: number;
  address: string;
  zipCode: number;
}

const Home = () => {
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

  const initialValues: FormValues = {
    country: '',
    gender: '',
    firstName: '',
    lastName: '',
    documentType: '',
    documentNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
    tel: 0,
    cel: 0,
    address: '',
    zipCode: 0,
  };

  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };

  return (
    <>
      <Head>
        <title>Register Form</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.mainContainer}>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={formSchema}
        >
          {(formik) => (
            <Form>
              <div className={styles.formContainer}>
                <h1>Register Form</h1>
                <div className={styles.inputBox}>
                  <label htmlFor="country">Country</label>
                  <Field
                    className="formInput"
                    name="country"
                    as="select"
                    label="country"
                    type="text"
                    error={formik.errors.country}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    {Countries.map((country, index) => (
                      <option key={index} value={country.toLowerCase()}>
                        {country}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="country" component="span" />
                </div>
                <div className={styles.inputBox}>
                  <label htmlFor="gender">Gender</label>
                  <Field
                    className="formInput"
                    name="gender"
                    as="select"
                    label="gender"
                    type="text"
                    error={formik.errors.gender}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    {Genders.map((gender, index) => (
                      <option key={index} value={gender.toLowerCase()}>
                        {gender}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="gender" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="firstName">First Name: </label>
                  <Field
                    className="formInput"
                    name="firstName"
                    as="input"
                    type="text"
                    error={formik.errors.firstName}
                  />
                  <ErrorMessage name="firstName" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="lastName">Last Name: </label>
                  <Field
                    className="formInput"
                    name="lastName"
                    as="input"
                    type="text"
                    error={formik.errors.lastName}
                  />
                  <ErrorMessage name="lastName" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="documentType">Document Type</label>
                  <Field
                    className="formInput"
                    name="documentType"
                    as="select"
                    type="text"
                    error={formik.errors.documentType}
                  >
                    <option value="" selected disabled hidden>
                      Select
                    </option>
                    {DocumentTypes.map((documentType, index) => (
                      <option key={index} value={documentType.toLowerCase()}>
                        {documentType}
                      </option>
                    ))}
                  </Field>
                  <ErrorMessage name="documentType" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="documentNumber">Document Number: </label>
                  <Field
                    className="formInput"
                    name="documentNumber"
                    as="input"
                    error={formik.errors.documentNumber}
                    type="text"
                  />
                  <ErrorMessage name="documentNumber" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="email">Email</label>
                  <Field
                    className="formInput"
                    name="email"
                    as="input"
                    type="email"
                    error={formik.errors.email}
                  />
                  <ErrorMessage name="email" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="password">Password</label>
                  <Field
                    className="formInput"
                    name="password"
                    as="input"
                    type="password"
                    error={formik.errors.password}
                  />
                  <ErrorMessage name="password" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="password">Confirm Password</label>
                  <Field
                    className="formInput"
                    name="confirmPassword"
                    as="input"
                    type="password"
                    error={formik.errors.confirmPassword}
                  />
                  <ErrorMessage name="confirmPassword" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="tel">Tel: </label>
                  <Field
                    className="formInput"
                    name="tel"
                    as="input"
                    error={formik.errors.tel}
                  />
                  <ErrorMessage name="tel" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="cel">Cel: </label>
                  <Field
                    className="formInput"
                    name="cel"
                    as="input"
                    error={formik.errors.cel}
                  />
                  <ErrorMessage name="cel" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="address">Address: </label>
                  <Field
                    className="formInput"
                    name="address"
                    as="input"
                    error={formik.errors.address}
                  />
                  <ErrorMessage name="address" component="span" />
                </div>

                <div className={styles.inputBox}>
                  <label htmlFor="zipCode">Zip Code: </label>
                  <Field
                    className="formInput"
                    name="zipCode"
                    as="input"
                    error={formik.errors.zipCode}
                  />
                  <ErrorMessage name="zipCode" component="span" />
                </div>

                <button
                  className={styles.btnGrad}
                  type="submit"
                  disabled={!formik.isValid || !formik.dirty}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Home;
