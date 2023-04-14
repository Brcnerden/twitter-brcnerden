import React from "react";
import { userSingOut } from "../../services/auth";
import { UserAuthContext } from "../../ContextPage/UserContext";
import { useContext } from "react";
import { Layout } from "../../components/Layout/Layout";
import { Sidebar } from "../../components/SideBar/Sidebar";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { FeedPage } from "../../components/FeedPage/FeedPage";

export const HomePage = () => {
  const { setUser } = useContext(UserAuthContext);

  const handleLogOut = () => {
    userSingOut()
      .then(() => {
        setUser(null); // eger kullanıcı başarı ile çıkış yaptıysa user 'ın boş kalır
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <>
      <Layout>
        <Sidebar />
        <FeedPage />
        <TimeLine />
      </Layout>
      <button onClick={handleLogOut}>çıkış yap </button>
    </>
  );
};
