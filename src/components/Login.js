import React, { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword, updateProfile
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL } from "../utils/constants";


const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          }).then(() => {
            const {uid, email, displayName} = auth.currentUser; 
            dispatch(addUser({uid: uid, email: email, displayName: displayName}));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
          
           
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } 
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          setErrorMessage(errorCode + " " + errorMessage);
        });
    }
  };

  const toggleSignup = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          alt="logo"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute p-12 w-3/12 m-36 mx-auto right-0 left-0 rounded-md bg-black bg-opacity-70"
      >
        <h1 className="text-3xl font-bold text-white my-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Enter your name"
            className="text-white my-2 p-4 w-full rounded-md border bg-gray-600 bg-opacity-20"
          />
        )}  
        <input
          ref={email}
          type="text"
          placeholder="Email or Mobile Number"
          className="text-white my-2 p-4 w-full rounded-md border bg-gray-600 bg-opacity-20"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="text-white my-2 p-4 w-full rounded-md border bg-gray-600 bg-opacity-20"
        />
        <p className="text-red-500 text-lg font-bold py-2">{errorMessage}</p>
        <button
          className="my-4 p-4 bg-red-600 text-white rounded-lg w-full"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="py-4 px-2 text-white cursor-pointer"
          onClick={toggleSignup}
        >
          {isSignIn
            ? "New to Netflix? Sign Up"
            : "Already have an account? Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
