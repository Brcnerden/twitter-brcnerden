import React from "react";
import Banner from "../../theme/image/Banner.jpg";
import * as S from "./FeedPagePhoto.styled";
import ProfileFoto from "../../theme/image/ProfileFoto.jpg";

export const FeedPagePhoto = () => {
  return (
    <div>
      <S.Banner>
        <img src={Banner} alt="banner"></img>
      </S.Banner>
      <S.ProfileFoto>
        <img src={ProfileFoto} alt="Foto"></img>
      </S.ProfileFoto>
    </div>
  );
};
