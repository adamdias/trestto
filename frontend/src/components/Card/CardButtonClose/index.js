import React from 'react';
import { FaTimes } from 'react-icons/fa';
import * as S from './styled';

export default function CardButtonClose({ ...props }) {
  return (
    <S.CardButtonClose {...props}>
      <FaTimes color="red" size={20} />
    </S.CardButtonClose>
  );
}
