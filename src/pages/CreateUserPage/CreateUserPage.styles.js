import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  background-color: ${COLORS.gray.$500};
  width: 100vw;
  height: 100vh;
`;
const Form = styled.div`
  background-color: ${COLORS.white.$500};
  max-width: 663px;
  width: 100%;
  height: 633px;
  margin: 0 auto;
  border-radius: 16px;
  padding-top: 100px;
`;

export { Contanier, Form };
