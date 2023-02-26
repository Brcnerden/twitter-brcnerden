// Kullanıcı oluşturmak için bir mail adresi inputu, bir şifre inputu,
//bir şifre tekrar inputu ve submit butonu olacak,
//services / auth.js içinden createUser servisi çağırılacak.\\

import { useState, useEffect } from "react";
import { FormUser } from "./api/components/FormUser";
import "./index.css";

function App() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const inputs = [
    {
      id: "1",
      name: "UserName",
      type: "text",
      error: "lütfen isim giriniz",
      placeholder: "UserName",
      required: true,
    },
    {
      id: "2",
      name: "email",
      type: "email",
      error: "lütfen email giriniz",
      placeholder: "email",
      required: true,
    },
    {
      id: "3",
      name: "Password",
      type: "password",
      error: "lütfen password giriniz",
      placeholder: "Password",
      required: true,
    },
    {
      id: "4",
      name: "Password2",
      type: "password",
      error: "lütfen password2 giriniz",
      placeholder: "Password again",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    fetch(`./services/auth.js`).then((response) => console.log(response));
  }, []);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormUser
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
