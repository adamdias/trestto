import styled from 'styled-components';

export const GroupCheckBox = styled.div`
  display: flex;
  align-items: flex-start;

  label {
    display: block;
    font-size: 1.6rem;
    margin-bottom: 1rem;

    &:not(:last-of-type) {
      margin-right: 2.5rem;
    }
  }

  span {
    font-weight: bold;
    font-size: 1.4rem;
    margin-left: 1rem;
  }
`;
