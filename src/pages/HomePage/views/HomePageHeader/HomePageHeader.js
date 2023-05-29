import React from "react";
import * as S from "./HomePageHeader.styled";
import Star from "../../../../components/Icon/svg/Star";

const HomePageHeader = () => {
  return (
    <S.Contanier>
      <S.Star>
        <div>Home</div>
        <div>
          <Star />
        </div>
      </S.Star>
    </S.Contanier>
  );
};

export { HomePageHeader };
