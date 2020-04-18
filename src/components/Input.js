import styled from 'styled-components';
import { NORMAL_SIZE, LIGHT_GREY } from '../typography';

export default styled.input`
  flex: 1;
  border: none;
  border: 1px solid ${LIGHT_GREY};
  border-radius: 5px;
  padding: 5px;
  line-height: 2em;
  font-size: ${NORMAL_SIZE};
`;
