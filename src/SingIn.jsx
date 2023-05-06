import React from "react";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
//Toast Messages
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function SingIn() {
  //get user Inputs
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, Password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        toast.success(" Complete", {
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
        toast.warn(`${errorMessage}`, {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        // ..
      });
  };
  return (
    <>
      <h1 className="font-bold text-4xl m-4 text-white">Sing In</h1>
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

      <button
        onClick={handleLogin}
        className="w-1/3 py-4 bg-green-600 m-2 font-semibold text-white"
      >
        Singin
      </button>
      {/* Toast Message Container */}
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
