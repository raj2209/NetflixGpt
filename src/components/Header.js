import { useSelector } from "react-redux"
import { LOGO_URL } from "../utils/constants.js"
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import USER_PROFILE from '../assets/netflix-profile-picture.jpg';


const Header = () => {
  const user = useSelector((state) => state.user);

  const handleSignOut = () => {
    signOut(auth).catch((error) => {
      alert("Error signing out: ", error.message);
    });

  }
  return (
    <div className="absolute w-full bg-gradient-to-b from-black to-transparent z-10 flex justify-between">
      <img src={LOGO_URL} alt='logo' className="w-44 mx-32 p-2" />
      {user && (
        <div className="w-1/4 flex items-center">
          <div className="flex items-center gap-2">
            <img src={USER_PROFILE} alt="User Profile" className="w-10 h-10 rounded" />
            <p className="text-white">{user.displayName}</p>
          </div>
          <button className="text-white bg-red-600 px-4 py-2 rounded cursor-pointer absolute right-32 top-5" onClick={handleSignOut}>Sign Out</button>
        </div>
      )}
    </div>
  )
}

export default Header
