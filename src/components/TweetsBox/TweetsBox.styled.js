import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";
import { css } from "@emotion/react";

const Contanier = styled.div`
  border-bottom: 1px solid ${COLORS.gray.$100};
  margin-top: 22px;
`;

const UserInfo = styled.div`
  display: flex;

  > p {
    font-weight: bold;
    margin-top: 0;
    margin-right: 10px;
    margin-left: -20px;
  }

  > span {
    margin-right: 10px;
    font-weight: lighter;
  }
  > img {
    margin-right: -50px;
  }
`;

const Tweets = styled.div`
  max-width: 479px;
  word-wrap: break-word;
  margin-top: -25px;
  margin-left: 55px;
  font-size: 12px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;

  margin-bottom: 24px;
  > span {
    padding-right: 40px;
  }
`;

const UserFoto = styled.img`
  max-width: 479px;
  width: 100%;
  height: 350px;
  margin-top: 15px;
  border-radius: 20px;
  margin-left: 25px;
  @media screen and (max-width: 444px) {
    max-width: 360px;
    width: 100%;
    margin-left: 7px;
  }

  ${({ defultFoto }) =>
    defultFoto &&
    css`
      display: none;
    `}
`;

export { UserInfo, Tweets, Icon, UserFoto, Contanier };
