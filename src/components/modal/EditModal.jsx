import React from "react";
import Modal from ".";

const EditModal = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl">Şifreni mi unuttun?</h1>

        <p className="text-gray-400">
          Email adresine bir şifre sıfırlama bağlatısı göndericez
        </p>

        <input type="text" className="mt-5" />

        <button type="submit" className="bg-white text-black rounded-full mt-8">
          Mail Gönder
        </button>

        <button type="button" onClick={close}>
          İptal
        </button>
      </div>
    </Modal>
  );
};

export default EditModal;
