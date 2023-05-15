import React from "react";
import Arrow from "../Icon/svg/Arrow";
import * as S from "./FeedPageProfile.styled";

export const FeedPageProfile = () => {
  return (
    <S.Contanier>
      <S.Profile>
        <S.Arrow>
          <Arrow />
        </S.Arrow>
        <div>
          <div>Bobur</div>
          <span>1,070 Tweets</span>
        </div>
      </S.Profile>
    </S.Contanier>
  );
};
