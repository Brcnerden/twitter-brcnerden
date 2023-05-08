import React from "react";
import * as S from "./TrendyBox.styled";

export const TrendyBox = () => {
  return (
    <S.Contanier>
      <div>
        <p>Trending in Germany</p>
        <div>Revolution</div>
        <p>50.4K Tweets</p>
      </div>
      <div>
        <span>...</span>
      </div>
    </S.Contanier>
  );
};
