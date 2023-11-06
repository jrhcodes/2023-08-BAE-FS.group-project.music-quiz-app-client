import React, { useState, useEffect } from 'react';
import { GoogleLogin, googleLogout, useGoogleLogin  } from '@react-oauth/google';

const Home: React.FC = () => {
    const [ user, setUser ]: any = useState();
    const [ profile, setProfile ]: any = useState();
    
    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });
    
    
    useEffect(
        () => {
        if (user) {
            console.log(user);
            axios
            .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                headers: {
                    Authorization: `Bearer ${user.access_token}`,
                    Accept: 'application/json'
                }
            })
            .then((res: { data: any; }) => {
                setProfile(res.data);
                console.log(res.data);
            })
            .catch((err: any) => console.log(err));
        }
    },
    [ user ]
    );
    
    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
    };


    return (
    <>
        <h1>Home</h1>
    </>
    )
}

export default Home;