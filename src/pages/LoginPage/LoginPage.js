import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import GoogleLogo from "../../components/Icon/svg/GoogleLogo";
import TwitterLogo from "../../components/Icon/svg/Logo";
import { signInUser } from "../../services/auth";

import * as L from "./LoginPage.styles";

export const LoginPage = () => {
  const [error, setError] = useState();

  return (
    <div>
      <L.Container>
        <L.Form>
          <TwitterLogo />
          <h2>Sing In to Twitter</h2>
          <L.SingButton>
            <L.Google>
              <GoogleLogo />
            </L.Google>
            Sing in with Google
          </L.SingButton>
          <L.SingButton>
            <L.Google>
              <GoogleLogo />
              {/* // apple logosunu girmek istediğimde uyarı yazısı verdi ondan
              // ikisini aynı logo girdim. */}
            </L.Google>
            Sing in with Apple
          </L.SingButton>
          <hr></hr>
          <span>Or</span>
          <Formik
            initialValues={{ password: "", name: "" }}
            validationSchema={Yup.object({
              password: Yup.string(),
              name: Yup.string(),
            })}
            onSubmit={(values) => {
              signInUser(values.password, values.name)
                .then((userCredential) => {
                  // Signed in
                  const user = userCredential.user;
                  console.log("user", user);
                  if (userCredential.user.uid) {
                  }
                  // ...
                })
                .catch((error) => {
                  setError(ErrorMessage);

                  console.log(ErrorMessage);
                });
            }}
          >
            {(formikProps) => (
              <form onSubmit={formikProps.handleSubmit}>
                {/* TextInput yazdıgımda hata verdi  */}
                <L.InputPassword
                  type="password"
                  placeholder="name or password"
                />
                <L.LoginButton type="submit">Login</L.LoginButton>
                <span>{error}</span>
              </form>
            )}
          </Formik>
          <L.SingButton>Forget Password</L.SingButton>
          <p>
            Don't have an account<a>Sing Up</a>
          </p>
        </L.Form>
      </L.Container>
    </div>
  );
};
