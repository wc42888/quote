import React from 'react';
import Select from './Select';
import Label from './Label';
import Required from './Required';
import Container from './FieldContainer';
import Error from './Error';

const SelectField = ({ label, required, error, options, ...selectProps }) => {
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
      <Select {...selectProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.option}
          </option>
        ))}
      </Select>
      <Error>{error}</Error>
    </Container>
  );
};

export default SelectField;
