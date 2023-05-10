import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  margin-top: 15px;
  > div > p {
    font-weight: 400;
    font-size: 12px;
    line-height: 21px;
    color: ${COLORS.black.$300};
    opacity: 0.6px;
    margin-top: 2px;
  }
  > div {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
    margin-top: 2px;
  }
`;

export { Contanier };
