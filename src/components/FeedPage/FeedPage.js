import React from "react";
import * as S from "./FeedPage.styled";
import { FeedPageProfile } from "../FeedPageProfile/FeedPageProfile";
import { FeedPagePhoto } from "../FeedPagePhoto/FeedPagePhoto";

export const FeedPage = () => {
  return (
    <S.Contanier>
      <FeedPageProfile />
      <FeedPagePhoto />
    </S.Contanier>
  );
};
