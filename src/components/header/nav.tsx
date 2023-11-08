// import { googleLogout } from "@react-oauth/google";
// import { useContext } from "react";
import { NavLink } from "react-router-dom";
// import { UserProfileContext } from "../userProfile/useUserProfile";

// const { userProfile, setUserProfile } = useContext(UserProfileContext);

// const logOut = () => {
//     googleLogout();
//     setUserProfile(null);
// };

const Nav = () => 
<nav className='is-flex is-flex-grow-1 is-align-items-center'>
    <ul className='header-nav'>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/welcome'>Welcome</NavLink></li>
        <li><NavLink to='/gameplayer'>Play Game</NavLink></li>
        {/* <li><button onClick={logOut}>Log out</button></li> */}
    </ul>
</nav>;

export default Nav;