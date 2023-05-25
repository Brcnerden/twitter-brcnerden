import React, { useContext } from 'react';
import { Layout } from '../../components/Layout';
import { UserAuthContext } from '../../context/UserContext';
import { userSingOut } from '../../services/auth';

export const HomePage = () => {
  const { setUser } = useContext(UserAuthContext);

  const handleLogOut = () => {
    userSingOut()
      .then(() => {
        setUser(null); // eger kullanıcı başarı ile çıkış yaptıysa user 'ın boş kalır
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  return (
    <>
      <Layout>home</Layout>
      <button onClick={handleLogOut}>Çıkış yap</button>
    </>
  );
};
