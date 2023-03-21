import React from "react";
import GoogleLogo from "../../components/Icon/svg/GoogleLogo";
import TwitterLogo from "../../components/Icon/svg/Logo";

import * as L from "./LoginPage.styles";

export const LoginPage = () => {
  return (
    <div>
      <L.Container>
        <L.Form>
          <TwitterLogo />
          <h2>Sing In to Twitter</h2>
          <L.SingButton>
            <GoogleLogo />
            Sing in with Google
          </L.SingButton>
        </L.Form>
      </L.Container>
    </div>
  );
};
