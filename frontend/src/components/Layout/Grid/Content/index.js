import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Content({ maxWidth, align, pt, pb, pr, pl, ...props }) {
  return (
    <S.Content maxWidth={maxWidth} pt={pt} pb={pb} pr={pr} pl={pl} {...props} />
  );
}

Content.propTypes = {
  align: PropTypes.string,
  maxWidth: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pr: PropTypes.number,
  pl: PropTypes.number,
};

Content.defaultProps = {
  align: 'center',
  maxWidth: 90,
  pt: 5,
  pb: 5,
  pr: 5,
  pl: 5,
};
