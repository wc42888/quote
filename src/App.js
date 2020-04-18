import React, { useState } from 'react';
import { useFormik } from 'formik';
import styled from 'styled-components';
import { Title } from './components';
import { LIGHT_BLUE, LIGHT_GREY } from './typography';
import QuoteForm from './QuoteForm';
import Result from './Result';
import { initialValues, validate } from './utilis';

function App() {
  const {
    values,
    handleChange,
    errors,
    touched,
    handleBlur,
    handleSubmit,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues,
    validate,
    onSubmit: async (values, { setSubmitting }) => {
      const { fromCurrency, toCurrency, amount } = values;
      const response = await fetch(
        `https://api.ofx.com/PublicSite.ApiService/OFX/spotrate/Individual/${fromCurrency}/${toCurrency}/${amount}?format=json`,
      );
      const result = await response.json();
      setRate(result.CustomerRate);
      setSubmitting(false);
    },
  });

  const [rate, setRate] = useState(null);

  const clearRate = () => setRate(null);

  return (
    <Container>
      <Title title="Quick Quote" />
      <Line />
      {rate ? (
        <Result
          clearRate={clearRate}
          resetForm={resetForm}
          rate={rate}
          values={values}
        />
      ) : (
        <QuoteForm
          handleSubmit={handleSubmit}
          values={values}
          errors={errors}
          touched={touched}
          handleBlur={handleBlur}
          handleChange={handleChange}
          isSubmitting={isSubmitting}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  margin: 10px;
`;

const Line = styled.div`
  margin-top: 10px;
  border-top: 2px solid ${LIGHT_BLUE};
`;

export default App;
