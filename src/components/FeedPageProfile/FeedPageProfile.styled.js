import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const Profile = styled.div`
  height: 57px;
  display: flex;
  align-items: center;
  border-left: 1px solid black;
  border-right: 1px solid black;

  > div {
    font-weight: 700;
    font-size: 18px;
    line-height: 27px;
    color: ${COLORS.black.$500};
  }
  div > span {
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${COLORS.black.$500};
    opacity: 0.6;
  }
`;

const Arrow = styled.span`
  margin-right: 40px;
`;

export { Contanier, Profile, Arrow };
