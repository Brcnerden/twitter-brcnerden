import { Formik } from "formik";
import { TextInput } from "../../components/Form/TextInput/TextInput";
import * as S from "./CreateUserPage.styles";
import * as Yup from "yup";
import Icon from "../../components/Icon/Icon";
import { createAuth } from "../../services/auth";
import { useState } from "react";

const CreateUserPage = () => {
  const [error, setError] = useState("");

  return (
    <S.Contanier>
      <S.Wrapper>
        <S.Icons>
          <Icon.CloseButton />
          <Icon.Logo />
        </S.Icons>
        <S.Form>
          <S.Title>Entrar no Twitter</S.Title>
          <Formik
            initialValues={{ name: "", email: "", password: "", password2: "" }}
            validationSchema={Yup.object({
              name: Yup.string().required("please enter name"),
              email: Yup.string()
                .email("wrong email")
                .required("please enter email"),
              password: Yup.string().required("Please enter password"),
              password2: Yup.string().required("Please password again "),
            })}
            onSubmit={(values, { resetForm }) => {
              resetForm({ values: "" });
              createAuth(values.email, values.password)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;

                  console.log("user", user);
                })
                .catch((error) => {
                  setError(error.code);
                });
            }}
          >
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>
                <TextInput type="name" name="name" placeholder="name" />
                <TextInput
                  type="email"
                  name="email"
                  placeholder="please enter your Email"
                />
                <TextInput
                  type="password"
                  name="password"
                  placeholder="password"
                />
                <TextInput
                  type="password"
                  name="password2"
                  placeholder="password again"
                />
                <button type="submit">Submit</button>
                <S.ErrorMsj>{error}</S.ErrorMsj>
              </form>
            )}
          </Formik>
        </S.Form>
      </S.Wrapper>
    </S.Contanier>
  );
};

export { CreateUserPage };
