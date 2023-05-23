import React from "react";
import Arrow from "../../../../components/Icon/svg/Arrow";
import * as S from "./ProfileHeader.styled";

const ProfileHeader = () => {
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

export { ProfileHeader };
