import { Formik } from "formik";
import { TextInput } from "../../components/Form/TextInput/TextInput";
import * as S from "./CreateUserPage.styles";
import * as Yup from "yup";
import { createAuth } from "../../services/auth";
import { useState } from "react";
import { createUser } from "../../services/user";
import { GuestLayuot } from "../../components/GuestLayuot/GuestLayuot";

const CreateUserPage = () => {
  const [error, setError] = useState("");

  return (
    <GuestLayuot>
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
              createUser(user.uid, {
                id: user.uid,
                name: values.name,
                email: values.email,
                likes: [],
                nickname: "",
                discription: "",
                createDate: Date.now(),
              })
                .then(() => {
                  alert("success");
                })
                .catch((e) => {
                  console.log(e);
                });

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
            <TextInput type="password" name="password" placeholder="password" />
            <TextInput
              type="password"
              name="password2"
              placeholder="password again"
            />
            <S.SubmitButton type="submit">Submit</S.SubmitButton>
            <S.ErrorMsj>{error}</S.ErrorMsj>
          </form>
        )}
      </Formik>
    </GuestLayuot>
  );
};

export { CreateUserPage };
