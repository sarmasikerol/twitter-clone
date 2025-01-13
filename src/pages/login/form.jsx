import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import MailModal from "../../components/modal/MailModal";

const Form = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      // yeni kullanıcı hesabı oluştur
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Hesabınız oluşturuldu");
          navigate("/feed");
        })
        .catch((err) => toast.error(err.code));
    } else {
      // kullanıcı hesabına giriş yap
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          toast.success("Giriş Yapıldı");
          navigate("/feed");
        })
        .catch((err) => toast.error(err.code));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>Email</label>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />

        <label className="mt-5">Şifre</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <p
          onClick={() => setIsOpen(true)}
          className="text-sm text-gray-500 hover:text-gray-400 cursor-pointer mt-2 text-end"
        >
          Şifreni mi unuttun?
        </p>

        <button className="mt-10 bg-white text-black rounded-full p-1 font-bold transition hover:bg-gray-300">
          {isSignUp ? "Kaydol" : "Giriş Yap"}
        </button>
      </form>

      <p className="mt-5">
        <span className="text-gray-500">Hesabınız yoksa</span>
        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className="cursor-pointer ms-2 text-blue-500"
        >
          {isSignUp ? "Giriş Yap" : "Kaydolun"}
        </span>
      </p>

      <MailModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </>
  );
};

export default Form;
