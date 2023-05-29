import styled from "@emotion/styled";
import { COLORS } from "../../../../theme/colors";

const Contanier = styled.div`
  height: 57px;
  border-left: 1px solid ${COLORS.gray.$100};
  border-right: 1px solid ${COLORS.gray.$100};
`;

const Star = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  font-weight: bold;
  border-bottom: 1px solid ${COLORS.gray.$100};
`;

export { Contanier, Star };
