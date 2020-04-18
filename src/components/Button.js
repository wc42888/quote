import styled from 'styled-components';
import { BLUE, NORMAL_SIZE } from '../typography';

export default styled.button.attrs(({ isSubmitting }) => ({
  disabled: isSubmitting,
}))`
  background-color: ${({ isSubmitting }) =>
    isSubmitting ? '#cccccc' : `${BLUE}`};
  height: 80px;
  min-height: 40px;
  width: 250px;
  border-radius: 40px;
  font-size: ${NORMAL_SIZE};
  color: white;
  outline: none;
  align-self: center;
`;
