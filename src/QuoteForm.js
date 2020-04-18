import React from 'react';
import styled from 'styled-components';
import {
  Field,
  SelectField,
  FieldContainer,
  MobileField,
  Button,
} from './components';
import { currencies } from './constants';
import { LIGHT_GREY } from './typography';
import { SMALL_SCREEN_SIZE } from './constants';

const QuoteForm = ({
  handleSubmit,
  values,
  errors,
  touched,
  handleBlur,
  handleChange,
  isSubmitting,
}) => (
  <Form onSubmit={handleSubmit}>
    <Section>
      <Field
        id="firstName"
        name="firstName"
        type="text"
        label="First Name"
        value={values.firstName}
        onChange={handleChange}
        error={errors.firstName}
        touched={touched.firstName}
        onBlur={handleBlur}
        required
      />
      <Field
        id="lastName"
        name="lastName"
        type="text"
        label="Last Name"
        value={values.lastName}
        onChange={handleChange}
        error={errors.lastName}
        touched={touched.lastName}
        onBlur={handleBlur}
        required
      />
    </Section>
    <Section>
      <Field
        id="email"
        name="email"
        type="email"
        label="Email"
        required
        value={values.email}
        onChange={handleChange}
        touched={touched.email}
        onBlur={handleBlur}
        error={errors.email}
      />
    </Section>
    <Section>
      <MobileField label="Telephone/Mobile" />
    </Section>
    <Section>
      <SelectField
        id="fromCurrency"
        name="fromCurrency"
        label="From Curreny"
        options={currencies}
        onChange={handleChange}
        value={values.fromCurrency}
        required
      />
      <SelectField
        id="toCurrency"
        name="toCurrency"
        label="To Curreny"
        options={currencies}
        onChange={handleChange}
        value={values.toCurrency}
        error={errors.toCurrency}
        required
      />
    </Section>
    <Section>
      <Field
        id="amount"
        name="amount"
        type="number"
        label="Amount"
        required
        onChange={handleChange}
        value={values.amount}
        error={errors.amount}
        onBlur={handleBlur}
        touched={touched.amount}
      />
      <FieldContainer />
    </Section>
    <Button type="submit" isSubmitting={isSubmitting}>
      GET QOUTE
    </Button>
  </Form>
);

const Form = styled.form`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  border: 1pt solid ${LIGHT_GREY};
  margin: 20px 0px;
  border-radius: 5px;
  padding: 20px 0px;
  min-height: 600px;
`;

const Section = styled.div`
  display: flex;
  flex: 1;

  @media (max-width: ${SMALL_SCREEN_SIZE}) {
    flex-direction: column;
  }
`;

export default QuoteForm;
