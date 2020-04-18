const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.amount) {
    errors.amount = 'Required';
  } else if (isNaN(values.amount)) {
    errors.amount = 'Invalid amount';
  }

  if (values.fromCurrency === values.toCurrency) {
    errors.toCurrency = 'To Currency is the same as From Currency';
  }

  return errors;
};

export default validate;
