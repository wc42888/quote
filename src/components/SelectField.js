import React from 'react';
import Select from './Select';
import Label from './Label';
import Required from './Required';
import Container from './FieldContainer';

const SelectField = ({ label, required, options }) => {
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
      <Select>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.option}
          </option>
        ))}
      </Select>
    </Container>
  );
};

export default SelectField;
