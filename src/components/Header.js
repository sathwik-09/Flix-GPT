import React, { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants";
import { profile_avatar } from "../utils/constants";
import { toggleGptSearch } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store)=>store.gpt.showGptSearch)
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
        // eslint-disable-next-line
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

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  }
  
  const handleLanguageChange = (e) => {
    
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen flex flex-col md:flex-row justify-between">
      <img
        className="w-48 mx-auto md:mx-0"
        src={LOGO_URL}
        alt="logo"
      />
      { user &&
      <div className="flex p-2">
      {showGptSearch && <select className="p-3 m-2 my-3 bg-gray-800 opacity-90 text-white" onChange={handleLanguageChange} >
        {SUPPORTED_LANGUAGES.map(lang=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
      </select>}
      <button className="text-white bg-purple-600 py-2 px-3 mx-1 my-3 rounded-md" onClick={handleGptSearchClick}>{showGptSearch ? "Home" : "GPT Search"}</button>
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
