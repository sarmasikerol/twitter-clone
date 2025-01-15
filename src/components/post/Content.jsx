import React from "react";

const Content = ({ tweet }) => {
  return (
    <div>
      {tweet.textContent && <p>{tweet.textContent}</p>}

      {tweet.imageContent && (
        <img
          src={tweet.imageContent}
          alt=""
          className="my-2 rounded-lg w-full object-cover max-h-[500px]"
        />
      )}
    </div>
  );
};

export default Content;
