import React from 'react';
import Input from './Input';
import Label from './Label';
import Required from './Required';
import Container from './FieldContainer';

const Field = ({ required, label, ...inputProps }) => {
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
    </Container>
  );
};

export default Field;
