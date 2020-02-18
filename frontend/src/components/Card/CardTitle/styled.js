import styled from 'styled-components';

export const CardTitle = styled.p`
  font-size: 2.2rem;
  font-weight: bold;

  ${({ mb }) => mb && `margin-bottom: ${mb}rem;`}
`;
