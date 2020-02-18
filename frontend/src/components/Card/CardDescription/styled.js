import styled from 'styled-components';

export const CardDescription = styled.p`
  letter-spacing: 0.36px;

  ${({ fontSize }) => `font-size: ${fontSize}rem;`}
  ${({ color }) => `color: ${color};`}
  ${({ mb }) => mb && `margin-bottom: ${mb}rem;`}
`;
