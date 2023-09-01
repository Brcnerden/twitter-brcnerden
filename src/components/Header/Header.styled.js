import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.header`
  height: 57px;
  border-left: 1px solid ${COLORS.gray.$100};
  border-right: 1px solid ${COLORS.gray.$100};
  display: flex;
  text-align: center;
`;

const MenuButton = styled.button`
  border-style: none;
  width: 50px;
  height: 50px;
  margin: 10px 153px;
display: none;
  > img {
    object-fit: cover;
    width: 100%;
  }
  @media screen and (min-width: 444px) {
    display: none;
  }
`;

export { Contanier, MenuButton };
