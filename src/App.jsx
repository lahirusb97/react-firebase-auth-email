import { useState } from "react";
import car from "./assets/car.jpg";
import LogIn from "./LogIn";
import SingIn from "./SingIn";
import "./firebaseConfig";
function App() {
  //Radio BTN Setup Login Or SingIn
  const [loginState, setloginState] = useState("login");

  const handleLogIn = (e) => {
    setloginState(e.target.value);
  };
  console.log(loginState);
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img src={car} className="object-cover w-full h-screen absolute -z-10" />
      <div className="w-11/12 h-5/6 bg-gray-900 rounded-3xl  backdrop-filter backdrop-blur-sm bg-opacity-60">
        <div className="flex h-5/6 flex-col justify-center items-center p-4">
          <div className="">
            <input
              type="radio"
              name="login"
              value="Login"
              onChange={handleLogIn}
            />
            <label className="text-white font-bold mx-2 text-lg">Log In</label>
            <input
              type="radio"
              name="login"
              value="SingIn"
              defaultChecked
              onChange={handleLogIn}
            />

            <label className="text-white font-bold mx-2  text-lg">
              Sing In
            </label>
          </div>
          {/* Showing Login or Singin Acording to the state changes */}
          {loginState === "Login" ? <LogIn /> : <SingIn />}
        </div>
      </div>
    </div>
  );
}

export default App;
