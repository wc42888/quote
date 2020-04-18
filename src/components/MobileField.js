import React from 'react';
import styled from 'styled-components';
import Container from './FieldContainer';
import Input from './Input';
import Required from './Required';
import Label from './Label';
import Select from './Select';
import { teleCode } from '../constants';
import { SMALL_SCREEN_SIZE } from '../constants';

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

  @media (max-width: ${SMALL_SCREEN_SIZE}) {
    flex: 1;
  }
`;

const StyledSelect = styled(Select)`
  max-width: 100px;
`;

export default MobileInput;
