import React, { useContext, useState } from "react";
import Banner from "../../theme/image/Banner.jpg";
import * as S from "./FeedPagePhoto.styled";
import ProfileFoto from "../../theme/image/ProfileFoto.jpg";
import { UserAuthContext } from "../../contextPage/UserContext";
import { UpdatePage } from "../UpdatePage";

export const FeedPagePhoto = () => {
  const [visible, setVisible] = useState(false);

  const update = () => {
    setVisible(!visible);
  };

  const { user } = useContext(UserAuthContext);

  return (
    <div>
      <S.Banner>
        <img src={Banner} alt="banner"></img>
      </S.Banner>
      <S.Button>
        <S.ProfileFoto>
          <img src={ProfileFoto} alt="Foto"></img>
          <div>{user.name}</div>
          <div>{user.email}</div>
          <S.Description>
            {user.discription}
            <span> @{user.nickname}</span>
          </S.Description>
        </S.ProfileFoto>
        <button onClick={update}>Edit profile</button>

        <div>{visible ? <UpdatePage /> : " "}</div>
      </S.Button>
    </div>
  );
};
