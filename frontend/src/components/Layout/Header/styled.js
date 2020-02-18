import styled from 'styled-components';
import { breakpoint } from '~/styles/media';

export const Menu = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-bottom: 1px solid #dedce1;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;

  ${breakpoint.lessThan('phone')`
    height: 8rem;
  `}
`;

export const SpacingHeader = styled.div`
  margin-top: 10rem;
  display: block;

  ${breakpoint.lessThan('phone')`
    margin-top: 8rem;
  `}
`;

export const BoxButtonAdd = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 3.5rem;
  border-left: 1px solid #dedce1;
  background-color: #0dcb7d;
  font-size: 3rem;
  letter-spacing: 0.4px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #10b26c;
  }
`;

export const BoxLogo = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 3.5rem;
  border-right: 1px solid #dedce1;
`;

export const Logo = styled.img`
  width: 3rem;
  height: 3.6rem;

  ${breakpoint.lessThan('phone')`
    width: 2.6rem;
    height: 3.2rem;
  `}
`;

export const BoxPageTitle = styled.div`
  text-align: center;
  width: 100%;
`;

export const PageTitle = styled.h1`
  font-size: 2.6rem;
  padding: 2rem;

  ${breakpoint.lessThan('phone')`
    font-size: 2rem;
  `}
`;
