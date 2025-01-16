import { arrayRemove, arrayUnion, doc, updateDoc } from "firebase/firestore";
import React from "react";
import {
  FaRegComments,
  FaRetweet,
  FaRegHeart,
  FaShareNodes,
} from "react-icons/fa6";
import { auth, db } from "../../firebase";
import { FaHeart } from "react-icons/fa";

const Buttons = ({ tweet }) => {
  // oturumu açık olan kullanıcı bu tweet i likeladı mı?
  const isLiked = tweet?.likes?.includes(auth.currentUser.uid);

  const toggleLike = async () => {
    // güncellenecek dökümanın referansını al
    const tweetRef = doc(db, "tweets", tweet.id);

    // user id'sini likes dizisine ekle
    await updateDoc(tweetRef, {
      likes: isLiked
        ? arrayRemove(auth.currentUser.uid)
        : arrayUnion(auth.currentUser.uid),
    });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/40">
        <FaRegComments />
      </div>

      <div className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/40">
        <FaRetweet />
      </div>

      <div
        onClick={toggleLike}
        className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/30 flex items-center gap-2"
      >
        {isLiked ? <FaHeart className="text-red-500" /> : <FaRegHeart />}
        {tweet?.likes?.length}
      </div>

      <div className="p-3 rounded-full cursor-pointer transition hover:bg-blue-400/40">
        <FaShareNodes />
      </div>
    </div>
  );
};

export default Buttons;
