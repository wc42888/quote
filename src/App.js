import React from 'react';
import styled from 'styled-components';
import { Title, Field } from './components';
import { LIGHT_BLUE, LIGHT_GREY } from './typography';

function App() {
  return (
    <Container>
      <Title title="Quick Quote" />
      <Line />
      <Content>
        <Section>
          <Field label="First Name" />
          <Field label="Last Name" />
        </Section>
      </Content>
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

const Line = styled.div`
  margin-top: 10px;
  border-top: 2px solid ${LIGHT_BLUE};
`;

const Content = styled.div`
  flex: 1;
  height: 100%;
  border: 1pt solid ${LIGHT_GREY};
  margin: 20px 0px;
  border-radius: 5px;
  padding: 20px 0px;
`;

const Section = styled.div`
  display: flex;
  flex: 1;
`;

export default App;
