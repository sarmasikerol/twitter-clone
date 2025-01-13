import React from "react";
import Modal from ".";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../firebase";
import { toast } from "react-toastify";

const MailModal = ({ isOpen, close }) => {
  const handleSubmit = (e) => {
    // form gönderilince kullanıcının eposta adresinde şifre sıfırlama bağlantısı gönder
    e.preventDefault();

    const email = e.target[0].value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Mailinize bağlantı gönderildi. Lütfen kontrol edin");

        close();
      })
      .catch((err) => {
        console.log(err);
        toast.warning("Üzgünüz bir sorun oluştu");
      });
  };

  return (
    <Modal isOpen={isOpen} close={close}>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <h1 className="text-3xl">Şifreni mi unuttun?</h1>

        <p className="text-gray-400">
          Email adresine bir şifre sıfırlama bağlatısı göndericez
        </p>

        <input type="text" className="mt-5" />

        <button
          type="submit"
          className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-8"
        >
          Mail Gönder
        </button>

        <button
          type="button"
          className="bg-white hover:bg-gray-300 transition text-black rounded-full mt-8"
          onClick={close}
        >
          İptal
        </button>
      </form>
    </Modal>
  );
};

export default MailModal;
