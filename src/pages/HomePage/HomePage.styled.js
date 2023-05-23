import styled from "@emotion/styled";
import { css } from "@emotion/react";

const Contanier = styled.div`
  ${({ blurPage }) =>
    blurPage &&
    css`
      opacity: 0.3;
    `}
`;

export { Contanier };
