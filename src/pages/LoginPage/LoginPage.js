import { Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import { signInUser } from "../../services/auth";
import { TextInput } from "../../components/Form/TextInput/TextInput";

import * as L from "./LoginPage.styles";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/routes";
import { getErrorMessages } from "../../utils/getErrorMessages";
import { GuestLayuot } from "../../components/GuestLayuot/GuestLayuot";
import { ButtonSubmit } from "../../components/ButtonSubmit";

export const LoginPage = () => {
  const [error, setError] = useState();

  return (
    <GuestLayuot>
      <Formik
        initialValues={{ password: "", email: "" }}
        validationSchema={Yup.object({
          password: Yup.string().required("Please enter password"),
          email: Yup.string()
            .email("wrong email")
            .required("please enter email"),
        })}
        onSubmit={(values) => {
          console.log("values", values);

          signInUser(values.email, values.password) // email password sıralamasına dikkat etmelisin
            .then((userCredential) => {
              console.log("user login success");
              const user = userCredential.user;
              console.log("user", user);
              if (userCredential.user.uid) {
              }
              // ...
            })
            .catch((error) => {
              setError(getErrorMessages(error.code));
            });
        }}
      >
        {(formikProps) => (
          <form onSubmit={formikProps.handleSubmit}>
            <TextInput name="email" type="email" placeholder="email " />
            <TextInput
              type="password"
              name="password"
              placeholder="please enter your password"
            />

            <ButtonSubmit type="submit" typeColor="typeColor" label="Login" />

            <L.ErrorButton>{error}</L.ErrorButton>
          </form>
        )}
      </Formik>
      <ButtonSubmit typeColor="typeColor" label="Forget Password" />
      <L.ForgetPassword>
        <p>Don't have an account </p>
        <Link to={ROUTES.createUser}>Sing Up</Link>
      </L.ForgetPassword>
    </GuestLayuot>
  );
};
