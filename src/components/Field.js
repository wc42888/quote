import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import { RED } from '../typography';

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

const Container = styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Required = styled.span`
  color: ${RED};
`;

export default Field;
