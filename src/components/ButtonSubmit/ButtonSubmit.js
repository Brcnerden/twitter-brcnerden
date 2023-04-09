import React, { Children } from "react";
import * as S from "../ButtonSubmit/ButtonSubmit.styled";

export const ButtonSubmit = ({ label, typeColor, ...props }) => {
  return <S.SubmitButton typeColor={typeColor}>{label}</S.SubmitButton>;
};
