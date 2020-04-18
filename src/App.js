import React from 'react';
import styled from 'styled-components';
import { Title, Field, SelectField } from './components';
import { LIGHT_BLUE, LIGHT_GREY } from './typography';
import { currencies } from './constants';

function App() {
  return (
    <Container>
      <Title title="Quick Quote" />
      <Line />
      <Content>
        <Section>
          <Field type="text" label="First Name" required />
          <Field type="text" label="Last Name" required />
        </Section>
        <Section>
          <Field type="email" label="Email" required />
        </Section>
        <Section>
          <SelectField label="From Curreny" options={currencies} required />
          <SelectField label="To Curreny" options={currencies} required />
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
