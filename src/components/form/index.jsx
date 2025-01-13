import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { BsCardImage } from "react-icons/bs";
import { db } from "../../firebase";

const Form = ({ user }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const text = e.target[0].value.trim();
    const file = e.target[1].files[0];

    // yazı ve resim içeriği yoksa fn durdur
    if (!text && !file) return toast.warning("Lütfen içerik giriniz");

    //* resmi storage kaydet

    // koleksiyonun referansını al
    const tweetsCol = collection(db, "tweets");

    // koleksiyona yeni tweet belgesi ekle
    await addDoc(tweetsCol, {
      textContent: text,
      imageContent: null,
      isEdited: false,
      likes: [],
      user: {
        id: user.uid,
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
    });
    // formu sıfırla
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="border-b border-zinc-600 p-5 flex gap-3"
    >
      <img
        src={user?.photoURL}
        alt=""
        className="h-[35px] md:h-[45px] rounded-full mt-1"
      />

      <div className="w-full">
        <input
          className="w-full bg-transparent shadow-none mt-0 mb-2 md:text-lg text-gray-300"
          placeholder="Neler Oluyor?"
          type="text"
        />

        <div className="flex justify-between items-center">
          <input id="img" type="file" className="hidden" />

          <label htmlFor="img">
            <BsCardImage />
          </label>

          <button className="bg-blue-600 px-3 py-2 rounded-full min-w-[85px] min-h-[40px] transition hover:bg-blue-800">
            Tweetle
          </button>
        </div>
      </div>
    </form>
  );
};

export default Form;
