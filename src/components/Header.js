import {LOGO_URL}  from "../utils/constants.js"
const Header = () => {
  return (
    <div className="absolute w-full bg-gradient-to-b from-black to-transparent">
        <img src={LOGO_URL} alt='logo' className="w-44 mx-32 p-2" />
        <h1>Hello</h1>
    </div>
  )
}

export default Header
