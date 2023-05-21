import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  max-width: 650px;
  width: 100%;
  height: 600px;
  position: fixed;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  z-index: 1;
  background-color: ${COLORS.white.$500};
  border-radius: 20px;
`;

const Logo = styled.div`
  text-align: center;
  padding-top: 10px;
`;

const Picture = styled.div`
  width: 185px;
  height: 185px;
`;

export { Contanier, Logo, Picture };
