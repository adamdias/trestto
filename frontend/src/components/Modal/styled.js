import styled from 'styled-components';
import { breakpoint } from '~/styles/media';

export const Modal = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1000;
  padding-top: 8rem;
  top: 0;
  right: 0;
  background-color: #170c3ae6;
  overflow-y: auto;
  ${({ open }) => (open ? 'display: block;' : 'display: none;')};

  ${breakpoint.lessThan('tablet')`
    padding-top: 3rem;
  `}

  ${breakpoint.lessThan('phone')`
    padding-top: 0rem;
  `}
`;
