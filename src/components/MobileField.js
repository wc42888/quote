import React from 'react';
import styled from 'styled-components';
import Container from './FieldContainer';
import Input from './Input';
import Required from './Required';
import Label from './Label';
import Select from './Select';
import { teleCode } from '../constants';

const MobileInput = ({ required, label, ...inputProps }) => {
  const renderRequired = () => (required ? <Required>*</Required> : null);

  const renderLabel = () => (
    <Label>
      {label}
      {renderRequired()}
    </Label>
  );

  const renderSelect = () => (
    <StyledSelect>
      {teleCode.map((code) => (
        <option key={code} value={code}>
          {code}
        </option>
      ))}
    </StyledSelect>
  );

  return (
    <Container>
      {renderLabel()}
      <InputSection>
        {renderSelect()}
        <Input {...inputProps} />
      </InputSection>
    </Container>
  );
};

const InputSection = styled.div`
  display: flex;
`;

const StyledSelect = styled(Select)`
  width: 100px;
`;

export default MobileInput;
