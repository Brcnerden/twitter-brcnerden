import { useField } from "formik";
import * as S from "./TextInput.styles";

const TextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <S.Contanier>
      {label && <S.Label htmlFor={props.id || props.name}>{label}</S.Label>}
      <S.Input {...field} {...props} />
      {meta.touched && meta.error ? <S.Error>{meta.error}</S.Error> : null}
    </S.Contanier>
  );
};

export { TextInput };
