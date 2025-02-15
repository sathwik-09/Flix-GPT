import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { profile_avatar } from "../utils/constants";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: profile_avatar}))
        navigate("/browse");
        
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // eslint-disable-next-line
    return () => unsubscribe();
  }, [])

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex justify-between">
      <img
        className="w-48 "
        src={LOGO_URL}
        alt="logo"
      />
      { user &&
      <div className="flex p-2">
      <img
            className="w-10 h-10 mr-2 p-1 m-4 rounded-lg"
            src={user?.photoURL}
            alt="Profile"
          />
        
        <button onClick={handleSignOut} className="font-bold text-white">
          Sign Out
        </button>
      </div>
      }
    </div>
  );
};

export default Header;
