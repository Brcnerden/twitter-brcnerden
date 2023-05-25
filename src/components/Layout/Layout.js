import React from 'react';
import { Menu } from '../Menu';
import { SideBar } from '../SideBar';
import * as S from './Layout.styled';

export const Layout = ({ children }) => {
  return (
    <S.Contanier>
      <Menu />
      <S.Main>
        <S.Children>{children}</S.Children>
        <SideBar />
      </S.Main>
    </S.Contanier>
  );
};
