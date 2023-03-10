// Kullanıcı oluşturmak için bir mail adresi inputu, bir şifre inputu,
//bir şifre tekrar inputu ve submit butonu olacak,
//services / auth.js içinden createUser servisi çağırılacak.\\

import { useEffect, useState } from "react";
import FormInput from "./components/FormInput";
import { createAuth, isUserSingIn } from "./services/auth";
import validateEmail from "./utils/emailCheck";
import { createUser } from "./services/user";

function App() {
  const [isSubmitted, setSubmmited] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  useEffect(() => {
    isUserSingIn((user) => {
      console.log("user", user);
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmmited(true);

    createAuth(values.email, values.password)
      .then((userCredential) => {
        console.log(userCredential);
        if (userCredential.user.uid) {
          createUser(userCredential.user.uid, {
            name: "",
            surName: "",
            email: userCredential.user.email,
            nickName: "",
            desc: "",
            joinDate: "",
            followers: [],
            following: [],
            tweets: [],
          })
            .then((data) => console.log("data", data))

            .catch((error) => console.log("error", error));
        }

        console.log(userCredential.user.uid);
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(error);
      });
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          value={values.name}
          onChange={onChange}
          placeholder="name"
          name="name"
          errorText="İsim giriniz"
          error={values.name === "" && isSubmitted}
          required
        />
        <FormInput
          value={values.email}
          onChange={onChange}
          placeholder="email"
          name="email"
          errorText={values.email === "" ? "Email giriniz" : "email hatalı"}
          error={
            (values.email === "" || !validateEmail(values.email)) && isSubmitted
          }
          required
        />
        <FormInput
          value={values.password}
          onChange={onChange}
          placeholder="password"
          type="password"
          name="password"
          errorText="Şifre giriniz"
          error={values.password === "" && isSubmitted}
          required
        />
        <FormInput
          value={values.password2}
          onChange={onChange}
          placeholder="password again"
          type="password"
          name="password2"
          errorText={
            values.password2 === ""
              ? "Şifre-tekrar giriniz"
              : "Şifreler uyuşmuyor"
          }
          error={
            (values.password2 === "" || values.password !== values.password2) &&
            isSubmitted
          }
          required
        />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
