import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

import Logo from '~/assets/img/logo.png';

export default function Header({
  imgLogo,
  pageTitle,
  btnAdd,
  clickBtnAdd,
  ...props
}) {
  return (
    <>
      <S.Menu {...props}>
        {imgLogo && (
          <S.BoxLogo>
            <S.Logo src={imgLogo} title="Logomarca" alt="[Logomarca]" />
          </S.BoxLogo>
        )}

        {pageTitle && (
          <S.BoxPageTitle>
            <S.PageTitle>{pageTitle}</S.PageTitle>
          </S.BoxPageTitle>
        )}

        {btnAdd && <S.BoxButtonAdd onClick={clickBtnAdd}>+</S.BoxButtonAdd>}
      </S.Menu>

      <S.SpacingHeader />
    </>
  );
}

Header.propTypes = {
  imgLogo: PropTypes.string,
  pageTitle: PropTypes.string,
  btnAdd: PropTypes.bool,
  clickBtnAdd: PropTypes.func,
};

Header.defaultProps = {
  imgLogo: Logo,
  pageTitle: 'TODOLIST',
  btnAdd: true,
};
