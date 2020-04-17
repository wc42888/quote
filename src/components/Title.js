import React from 'react';
import styled from 'styled-components';
import { LARGE_SIZE } from '../typography';

const Title = ({ title }) => <StyledTitle>{title}</StyledTitle>;

const StyledTitle = styled.div`
  font-size: ${LARGE_SIZE};
`;

export default Title;
