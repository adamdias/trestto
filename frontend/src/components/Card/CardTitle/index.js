import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function CardTitle({ mb, ...props }) {
  return <S.CardTitle mb={mb} {...props} />;
}

CardTitle.propTypes = {
  mb: PropTypes.number,
};

CardTitle.defaultProps = {
  mb: 2,
};
