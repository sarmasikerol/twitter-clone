import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../firebase";

const Protected = () => {
  // kullanıcının sayfayı görme yetkisi var mı state i
  const [isAuth, setIsAuth] = useState();


  // kullanıcının oturum verilerini al
  useEffect(() => {
    // onAuthStateChanged: kullanıcı oturumu izler
    onAuthStateChanged(auth, (user) => {
      setIsAuth(user ? true : false);
    });
  }, []);

  // eğer kullanıcının oturumu kapalıysa logine yönlendir
  const navigate = useNavigate();
  if (isAuth === false) {
    return <Navigate to="/" />;
  }
  return (
    // parent route içersinde alt route elementini renderla
    <Outlet />
  );
};

export default Protected;
