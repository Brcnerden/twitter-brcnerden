import React, { useState } from "react";
import { Header } from "../Header/Header";
import { Menu } from "../Menu";
import { SideBar } from "../SideBar";
import * as S from "./Layout.styled";

export const Layout = ({ title, menuOpen, children }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const handleChange = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <S.Contanier>
      <Menu handleChange={handleChange} menuOpen={menuIsOpen} />
      <Header handleChange={handleChange} />

      <S.Main>
        <S.Content>
          {title && <h1>{title}</h1>}
          <S.Children>{children}</S.Children>
        </S.Content>
        <SideBar />
      </S.Main>
    </S.Contanier>
  );
};
