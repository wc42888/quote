import React from 'react';
import styled from 'styled-components';
import { Title } from './components';
import { LIGHT_BLUE } from './typography';

function App() {
  return (
    <Container>
      <Title title="Quick Quote" />
      <Line />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  flex-direction: column;
  margin: 10px;
`;

const Line = styled.hr`
  margin: 0;
  border-top: 1pt solid ${LIGHT_BLUE};
`;

export default App;
