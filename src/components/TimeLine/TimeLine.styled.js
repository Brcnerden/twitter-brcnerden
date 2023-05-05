import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const Contanier = styled.div`
  max-width: 572px;
  width: 100%;
  margin: 20px 0 11px 29px;
`;

const SearchLine = styled.div`
  max-width: 373px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: ${COLORS.gray.$300};
  border-radius: 31px;
  > input {
    margin-left: 12px;
    border: none;
    background-color: ${COLORS.gray.$300};
    color: ${COLORS.gray.$600};
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 400;
    font-size: 18px;
  }
`;

const images = styled.div`
  max-width: 373px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 11px;
  img {
    max-width: 123px;
    width: 100%;
  }
`;

export { Contanier, SearchLine, images };
