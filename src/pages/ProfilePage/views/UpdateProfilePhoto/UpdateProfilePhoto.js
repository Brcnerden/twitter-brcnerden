import React from "react";
import * as S from "./UpdatePage.styled.";
import TwitterLogo from "../../../../components/Icon/svg/Logo";
import { UserProfileBox } from "../UserProfileBox/UserProfileBox";

const UpdateProfilePhoto = ({ editPicture }) => {
  return (
    <S.Body>
      <S.Contanier>
        <S.Logo>
          <TwitterLogo />
        </S.Logo>
        <div>
          <h1>Pick a profile picture</h1>
          <p>Have a favorite selfie ?Upload it now.</p>
        </div>
        <S.Picture>
          <UserProfileBox editPicture />
        </S.Picture>
        <S.ButtonProfile>Skip for now</S.ButtonProfile>
      </S.Contanier>
    </S.Body>
  );
};

export { UpdateProfilePhoto };
