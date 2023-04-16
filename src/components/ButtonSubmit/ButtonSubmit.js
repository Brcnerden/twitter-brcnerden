import * as S from "./ButtonSubmit.styled";

export const ButtonSubmit = ({ label, color, ...rest }) => {
  return (
    <S.SubmitButton {...rest} color={color}>
      {label}
    </S.SubmitButton>
  );
};
