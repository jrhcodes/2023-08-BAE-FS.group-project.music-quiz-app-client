import React, { useState, useContext } from 'react';
// import Nav from './nav';

import { UserProfileContext } from "../userProfile/useUserProfile";




const Header: React.FC = () => {
    const { userProfile, } = useContext(UserProfileContext);

    const { userId, } = useState(userProfile.id);

    return <header >
        <h1>🎵🎶The A-Listers' Tangled Tunes🎵🎶</h1>
        <div className='header'>

        </div>
        <div>
            {userProfile?.picture && <img src={userProfile.picture} alt="user image" />}
            <h3>User Logged in</h3>
            {userProfile?.name && <p>Name: {userProfile.name}</p>}
            {userProfile?.email && <p>Email Address: {userProfile.email}</p>}
            {userProfile?.id && <p>ID: {userProfile.id}</p>}
        </div>
    </header>;
}
export default Header;