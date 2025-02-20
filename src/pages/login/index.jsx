import React from "react";
import GoogleButton from "./google-button";
import Form from "./form";

const Login = () => {
  return (
    <div className="h-screen bg-[#242424] text-white grid place-items-center">
      <div className="bg-black py-16 px-32 rounded-lg flex flex-col gap-10">
        <div className="flex justify-center">
          <img className="h-[60px]" src="x-logo.webp" alt="" />
        </div>

        <h1 className="text-xl font-bold text-center">Twitter'a giriş yap</h1>

        <GoogleButton />

        <Form />
      </div>
    </div>
  );
};

export default Login;
