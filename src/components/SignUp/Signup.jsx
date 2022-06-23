import React from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import './SignUp.css';

export const Signup = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 10 characters or less')
        .required('Required'),
      email: Yup.string().email('Invalid email').required('required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
    onReset: (values) => {
      values.email = '';
      values.firstName = '';
      values.email = '';
    },
  });

  console.log(formik.touched);

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <div className="input-container">
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <p>{formik.errors.firstName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <p>{formik.errors.lastName}</p>
        ) : null}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}
      </div>
      <button type="submit">Submit</button>
      <button type="reset">Reset</button>
    </form>
  );
};
