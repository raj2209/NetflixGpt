import { useDispatch, useSelector } from "react-redux"
import { useState, useRef, useEffect } from "react";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constants.js"
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import USER_PROFILE from '../assets/netflix-profile-picture.jpg';
import { changeGptSearchComponentVisibility } from "../utils/gptSearchSlice.js";
import { changeLanguage } from "../utils/configSlice.js";
import lang from "../utils/languageConstants.js";


const Header = () => {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gptSearch.showGptSearchComponent)
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const langDropdownRef = useRef(null);
  const langKey=useSelector((state)=>state.config.language)

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showLangDropdown) return;
    function handleClickOutside(event) {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target)) {
        setShowLangDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLangDropdown]);

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      alert("Error signing out: ", error.message);
    });
  }

  const handleGPTSearch = () => {
    dispatch(changeGptSearchComponentVisibility())
  };

  const handleLanguageChange = (event) => {
    dispatch(changeLanguage(event.target.value));
    setShowLangDropdown(false);
  };

  return (
    <div className="absolute w-full bg-gradient-to-b from-black to-transparent z-10 flex justify-between">
      <img src={LOGO_URL} alt='logo' className="w-44 mx-32 p-2" />
      {user && (
        <div className="w-1/3 flex items-center gap-2 justify-center">
          <div className="flex items-center gap-2">
            <img src={USER_PROFILE} alt="User Profile" className="w-8 h-8 rounded" />
            <p className="text-white">{user.displayName}</p>
          </div>
          <button className="text-white  px-4 py-1 rounded cursor-pointer " onClick={handleGPTSearch}>
            {showGptSearch ? lang[langKey].HomePage : "GPT Search"}
          </button>
          <button className="text-red-600 px-4 py-1 rounded cursor-pointer font-bold" onClick={handleSignOut}>{lang[langKey].signOut}</button>
          <div className="relative" ref={langDropdownRef}>
           { showGptSearch && <button
              className="text-white text-xl px-2 py-1 rounded-full hover:bg-gray-700 focus:outline-none"
              onClick={() => setShowLangDropdown((prev) => !prev)}
              aria-label="Select Language"
            >
              🌐
            </button>}
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-32 bg-white rounded shadow-lg z-50">
                <ul>
                  {SUPPORTED_LANGUAGES.map((lang) => (
                    <li key={lang.identifier}>
                      <button
                        className={
                          `block w-full text-left px-4 py-2 text-black hover:bg-gray-100 ` +
                          (langKey === lang.identifier ? 'bg-gray-200 font-bold' : '')
                        }
                        value={lang.identifier}
                        onClick={handleLanguageChange}
                      >
                        {lang.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Header
