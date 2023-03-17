import { Formik } from "formik";
import React from "react";
import { TextInput } from "../../components/Form/TextInput/TextInput";
import * as S from "./CreateUserPage.styles";
import * as Yup from "yup";

const CreateUserPage = () => {
  return (
    <S.Contanier>
      <S.Form>
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
          onSubmit={(values) => {
            // same shape as initial values
            console.log(values);
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
              <TextInput type="password" name="password" />
              <TextInput type="password" name="password2" />
              <button type="submit">Submit</button>
            </form>
          )}
        </Formik>
      </S.Form>
    </S.Contanier>
  );
};

export { CreateUserPage };
