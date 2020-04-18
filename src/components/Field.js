import React from 'react';
import Input from './Input';
import Label from './Label';
import Required from './Required';
import Container from './FieldContainer';
import Error from './Error';

const Field = ({ required, label, touched, error, ...inputProps }) => {
  const renderRequired = () => (required ? <Required>*</Required> : null);

  const renderLabel = () => (
    <Label>
      {label}
      {renderRequired()}
    </Label>
  );

  return (
    <Container>
      {renderLabel()}
      <Input {...inputProps} placeholder={label} />
      <Error>{touched && error}</Error>
    </Container>
  );
};

export default Field;
