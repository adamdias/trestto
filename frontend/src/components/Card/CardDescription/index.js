import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function CardDescription({ mb, fontSize, color, ...props }) {
  return (
    <S.CardDescription fontSize={fontSize} color={color} mb={mb} {...props} />
  );
}

CardDescription.propTypes = {
  mb: PropTypes.number,
  color: PropTypes.string,
  fontSize: PropTypes.number,
};

CardDescription.defaultProps = {
  mb: 2,
  color: '#8f8a9b',
  fontSize: 1.8,
};
