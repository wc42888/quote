import React from 'react';
import styled from 'styled-components';
import Select from './Select';
import Label from './Label';
import Required from './Required';
import Container from './FieldContainer';

const SelectField = ({ label, required }) => {
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
        <Option>1</Option>
        <Option>2</Option>
      </Select>
    </Container>
  );
};

const Option = styled.option``;

export default SelectField;
