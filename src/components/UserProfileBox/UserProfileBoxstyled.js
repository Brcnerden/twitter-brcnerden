import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ProfileFoto = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  ${({ editPicture }) =>
    editPicture &&
    css`
      width: 185px;
      height: 185px;
    `}
  > img {
    max-width: 100%;
    object-fit: contain;
    border-radius: 50%;
    border: 2px solid gray;
  }
  @media screen and (max-width: 992px) {
    margin-right: 54px;
  }
`;

const ProfileInformation = styled.div`
  display: flex;

  align-items: center;
  > div > span {
    display: block;
    margin-right: 20px;
  }
`;

const TextInformation = styled.div`
  @media screen and (max-width: 992px) {
    display: none;
  }
`;

export { ProfileFoto, ProfileInformation, TextInformation };
