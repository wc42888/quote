import styled from 'styled-components';
import { SMALL_SCREEN_SIZE } from '../constants';

export default styled.div`
  display: flex;
  flex: 1;
  margin: 20px;
  flex-direction: column;

  @media (max-width: ${SMALL_SCREEN_SIZE}) {
    flex-direction: row;
    align-items: center;
  }
`;
