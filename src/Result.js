import React from 'react';
import styled from 'styled-components';
import { Button } from './components';
import {
  ULTRA_LARGE_SIZE,
  EXTRA_LARGE_SIZE,
  GREEN,
  BLUE,
  DARK_GREY,
  LARGE_SIZE,
  LIGHT_GREY,
} from './typography';
import { formatNumber } from './utilis';

const ResultTable = ({ clearRate, resetForm, rate, values }) => {
  const returnToForm = () => {
    resetForm();
    clearRate();
  };

  return (
    <Result>
      <ResultContent>
        <RateSection>
          <ResultTitle>OFX Customer Rate</ResultTitle>
          <RateValue>{rate}</RateValue>
        </RateSection>
        <ResultTitle>From</ResultTitle>
        <ResultValue>
          {values.fromCurrency}{' '}
          <ResultNumber>{formatNumber(values.amount)}</ResultNumber>
        </ResultValue>
        <ResultTitle>To</ResultTitle>
        <ResultValue>
          {values.toCurrency}{' '}
          <ResultNumber>{formatNumber(values.amount * rate)}</ResultNumber>
        </ResultValue>
      </ResultContent>
      <Button onClick={returnToForm}>NEW QOUTE</Button>
    </Result>
  );
};

const Result = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border: 1pt solid ${LIGHT_GREY};
  margin: 20px 0px;
  border-radius: 5px;
  padding: 20px 0px;
  min-height: 600px;
  align-items: center;
`;

const RateSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ResultContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ResultTitle = styled.div`
  font-size: ${LARGE_SIZE};
  text-align: left;
  color: ${DARK_GREY};
`;

const RateValue = styled.div`
  font-size: ${ULTRA_LARGE_SIZE};
  text-align: center;
  color: ${GREEN};
`;

const ResultValue = styled.div`
  font-size: ${EXTRA_LARGE_SIZE};
`;

const ResultNumber = styled.span`
  color: ${BLUE};
`;

export default ResultTable;
