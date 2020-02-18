import styled from 'styled-components';

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1.3rem 2.13rem;
  background-color: #f5f4f6;
  border: 1px solid #ebeaed;
  border-radius: 0.5rem;
  font-size: 1.8rem;
  outline: none;

  &:focus {
    border: 1px solid #dedce1;
    background-color: #ebeaed;
    color: #170c3a;
  }
`;
