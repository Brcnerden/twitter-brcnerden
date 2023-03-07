// Kullanıcı oluşturmak için bir mail adresi inputu, bir şifre inputu,
//bir şifre tekrar inputu ve submit butonu olacak,
//services / auth.js içinden createUser servisi çağırılacak.\\

import { useState } from "react";
import { FormUser } from "./components/FormUser";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import { FIREBASE_APP } from "../src/api/firebase-config";

const auth = getAuth(FIREBASE_APP);

function App() {
  const [isSubmitted, setSubmmited] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmmited(true);
    console.log("submit", values);

    const createUser = async (email, password) =>
      await createUserWithEmailAndPassword(auth, email, password).catch(
        (error) => {
          console.log(error);
        }
      );

    console.log(createUser.user);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <FormUser
          type="text"
          value={values.name}
          onChange={onChange}
          placeholder="name"
          name="name"
          errorText="İsim giriniz"
          error={values.name === "" && isSubmitted}
          required
        />
        <FormUser
          value={values.email}
          onChange={onChange}
          placeholder="email"
          name="email"
          errorText={
            values.email === " " ? "Email giriniz" : "email adresi hatalı"
          }
          error={values.email === "" || (!(<validateEmail />) && isSubmitted)}
          required
        />
        <FormUser
          value={values.password}
          onChange={onChange}
          placeholder="password"
          type="password"
          name="password"
          errorText="Şifre giriniz"
          error={values.password === "" && isSubmitted}
          required
        />
        <FormUser
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
