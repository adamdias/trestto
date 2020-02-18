import styled from 'styled-components';

export const Label = styled.label`
  width: 100%;
  display: block;
  margin-bottom: 2rem;

  p {
    display: flex;
    align-items: center;
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  span {
    ${({ error }) => `color: ${error ? '#f95e5a' : '#8f8a9b'};`}
    font-size: 9px;
    margin-left: 1rem;
  }
`;
