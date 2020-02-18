import styled from 'styled-components';
import { breakpoint } from '~/styles/media';

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  ${({ align }) => align && `justify-content: ${align}`};
  ${({ maxWidth }) => maxWidth && `max-width: ${maxWidth}rem; margin: 0 auto;`};
  ${({ pt }) => pt && `padding-top: ${pt}rem`};
  ${({ pb }) => pb && `padding-bottom: ${pb}rem`};
  ${({ pr }) => pr && `padding-right: ${pr}rem`};
  ${({ pl }) => pl && `padding-left: ${pl}rem`};

  ${breakpoint.lessThan('tablet')`
    padding: 3rem 3rem;
  `}

  ${breakpoint.lessThan('phone')`
    padding: 3rem 2rem;
  `}
`;
