import styled from 'styled-components';
import { NORMAL_SIZE, LIGHT_GREY } from '../typography';
import { SMALL_SCREEN_SIZE } from '../constants';

export default styled.select`
  border: none;
  border: 1px solid ${LIGHT_GREY};
  border-radius: 5px;
  padding: 5px;
  font-size: ${NORMAL_SIZE};
  height: 3em;
  line-height: 3em;

  @media (max-width: ${SMALL_SCREEN_SIZE}) {
    flex: 1;
  }
`;
