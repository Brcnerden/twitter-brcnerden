import React from "react";
import { userSingOut } from "../services/auth";

export const HomePage = () => {
  const handleLogOut = () => {
    userSingOut()
      .then(() => {
        console.log("sucsess");
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <div>HomePage</div>
      <button onClick={handleLogOut}>çıkış yap </button>
    </>
  );
};
