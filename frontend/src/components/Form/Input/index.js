import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Input({ error, ...props }) {
  return <S.Input error={error} {...props} />;
}

Input.propTypes = {
  error: PropTypes.bool,
};

Input.defaultProps = {
  error: true,
};
