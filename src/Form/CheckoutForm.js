/* eslint-disable react/prop-types */
import React from 'react';
import {
  Formik, Field, Form, ErrorMessage,
} from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';
import './CheckoutForm.scss';
import { createOrder } from '../Utils/Api';

const CheckoutForm = ({ basket, addOrder }) => {
  const history = useHistory();
  return (
    <Formik
      initialValues={{ firstName: '', lastName: '', email: '' }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string().email('Invalid email address').required('Required'),
      })}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        const response = await createOrder(basket);
        addOrder(response.data);
        history.push('/');
      }}
    >
      <Form className="checkout-form">
        <div>
          <label htmlFor="firstName">First Name:</label>
          <Field name="firstName" id="firstName" type="text" />
          <ErrorMessage name="firstName" />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <Field name="lastName" id="lastName" type="text" />
          <ErrorMessage name="lastName" />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <Field name="email" id="email" type="email" />
          <ErrorMessage name="email" />
        </div>

        <button type="submit" id="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default CheckoutForm;
