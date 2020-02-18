import React from 'react';
import { FaEdit } from 'react-icons/fa';
import * as S from './styled';

export default function CardButtonEdit({ ...props }) {
  return (
    <S.CardButtonEdit {...props}>
      <FaEdit color="#365df0" size={20} />
    </S.CardButtonEdit>
  );
}
