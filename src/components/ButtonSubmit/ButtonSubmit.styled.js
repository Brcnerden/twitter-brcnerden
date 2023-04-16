import styled from "@emotion/styled";
import { COLORS } from "../../theme/colors";

const colorTypeComboS = {
  blue: {
    background: COLORS.blue.$500,
    color: COLORS.white.$500,
  },
  black: {
    background: COLORS.black.$500,
    color: COLORS.white.$500,
  },
  transparent: {
    background: COLORS.white.$600,
    color: COLORS.black.$500,
  },
};

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0px;
  border-radius: 30px;
  border: 0;
  font-size: 15px;
  font-weight: 500;
  ${({ color }) => {
    return colorTypeComboS[color] || colorTypeComboS.blue;
  }}
`;

export { SubmitButton };
