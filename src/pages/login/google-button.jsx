import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const GoogleButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then(() => {
        toast.success("Oturum Açıldı");
        navigate("/feed");
      })
      .catch((err) => toast.err("HATA!: " + err.code));
  };

  return (
    <button
      onClick={handleClick}
      className="bg-white flex items-center py-2 px-10 rounded-full gap-3 transition hover:bg-gray-300 text-black whitespace-nowrap"
    >
      <img className="h-[20px]" src="g-logo.png" alt="" />
      Google ile Giriş Yap
    </button>
  );
};

export default GoogleButton;
