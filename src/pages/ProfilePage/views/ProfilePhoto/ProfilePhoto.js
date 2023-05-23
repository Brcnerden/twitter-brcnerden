import React, { useContext, useState } from "react";
import Banner from "../../../../theme/image/Banner.jpg";
import * as S from "./ProfilePhoto.styled";
import ProfileFoto from "../../../../theme/image/ProfileFoto.jpg";
import { UserAuthContext } from "../../../../contextPage/UserContext";
import { UpdatePage } from "../UpdatePage";

const ProfilePhoto = () => {
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
      </S.Button>
      <S.Follower>
        <span>6</span>
        <div>Following</div>
        <span>0</span>
        <div>Followers</div>
      </S.Follower>
      <S.Tweets>
        <span>Tweets</span>
        <span>Tweets & replies</span>
        <span>Media</span>
        <span>Likes</span>
      </S.Tweets>

      <hr></hr>
      <div>{visible ? <UpdatePage /> : " "}</div>
    </div>
  );
};

export { ProfilePhoto };
