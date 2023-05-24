import styled from "@emotion/styled";
import { css } from "@emotion/react";

const ProfileFoto = styled.div`
  width: 50px;
  height: 50px;
  margin-right: 10px;

  ${({ editPicture }) =>
    editPicture &&
    css`
      max-width: 200px;
      width: 100%;
      margin: auto;
      height: 185px;
      @media screen and (max-width: 992px) {
        max-width: 150px;
        width: 100%;
        margin-left: 120px;
      }
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
