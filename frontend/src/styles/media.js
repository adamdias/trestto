import { generateMedia } from 'styled-media-query';

export const breakpoint = generateMedia({
  desktop: '75em',
  tablet: '56.25em',
  phone: '37.5em',
});
