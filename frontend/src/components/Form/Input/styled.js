import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  padding: 1.3rem 2.13rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  outline: none;

  ${({ error }) => `border: 1px solid ${error ? '#f95e5a' : '#ebeaed'};`}
  ${({ error }) => error && 'color: #f95e5a;'}
  ${({ error }) => `background-color: ${error ? '#feefee' : '#f5f4f6'};`}

  &:focus {
    ${({ error }) => `border: 1px solid ${error ? '#f95e5a' : '#dedce1'};`}
    ${({ error }) => `background-color: ${error ? '#feefee' : '#ebeaed'};`}
    ${({ error }) => `color: ${error ? '#f95e5a' : '#170c3a'};`}
  }
`;
