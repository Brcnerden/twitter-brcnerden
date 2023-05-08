import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  display: flex;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  > div > p {
    font-weight: 400;
    font-size: 16px;
    line-height: 21px;
    color: ${COLORS.black.$300};
    opacity: 0.6px;
    margin-top: 2px;
  }
  > div {
    font-size: 20px;
    font-weight: 600;
    line-height: 26px;
  }
`;

export { Contanier };
