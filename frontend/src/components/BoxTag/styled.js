import styled from 'styled-components';

export const BoxTag = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  flex-wrap: wrap;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.6rem 1.8rem;
    background-color: #e1e7fd;
    border-radius: 0.5rem;
    letter-spacing: 0.36px;
    color: #365df0;
    font-size: 1.4rem;
    font-weight: bold;
    margin-top: 1rem;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }
  }
`;
