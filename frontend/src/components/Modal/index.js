import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Modal({ open, ...props }) {
  return <S.Modal open={open} {...props} />;
}

Modal.propTypes = {
  open: PropTypes.bool,
};

Modal.defaultProps = {
  open: false,
};
