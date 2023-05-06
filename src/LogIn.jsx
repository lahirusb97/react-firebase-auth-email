import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";

export default function LogIn() {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const handleLogIn = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...

        toast.success("🦄 Login complete", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.warn(errorMessage, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  const forgotpass = () => {
    const auth = getAuth();
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        toast.success(`Check your email:${email} inbox to reset password`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        setemailError(true);
        toast.error(`This email:${email} is not valid`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <>
      <h1 className="font-bold text-4xl m-4 text-white">Log In</h1>
      <input
        className="p-4 bg-black w-full md:w-1/2 lg:w-1/3 text-white"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-4 bg-black w-full  md:w-1/2 lg:w-1/3 mt-2 text-white"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p
        onClick={forgotpass}
        className="font-bold text-white cursor-pointer m-4"
      >
        Forgot Password ?
      </p>
      <button
        onClick={handleLogIn}
        className="w-1/3 py-4 bg-green-600 m-2 font-semibold text-white"
      >
        Login
      </button>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
