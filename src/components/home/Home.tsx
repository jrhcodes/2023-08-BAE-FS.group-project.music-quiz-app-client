import React, { useState, useEffect, useContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Navigate } from "react-router";
import { UserProfile, UserProfileContext } from "../userProfile/useUserProfile";

const Home: React.FC = () => {
    const [user, setUser]: any = useState();
    const { userProfile, setUserProfile } = useContext(UserProfileContext);
    // const [serverResponse, setServerResponse]: any = useState();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log("Login Failed:", error),
    });

    // // TODO: this
    // const logOut = () => {
    //     googleLogout();
    //     setUserProfile(null);
    // };

    useEffect(() => {
        if (user) {
            axios
                .get(
                    `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
                    {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: "application/json",
                        },
                    }
                )
                .then((res: { data: any }) => {
                    setUserProfile(res.data);
                    postUserProfile(res.data);
                })
                .catch((err: any) => console.log(err));
        }
    }, [user, setUserProfile]);

    const postUserProfile = async (userProfile: UserProfile) => {
        try {
            const response = await axios.post(
                "http://localhost:8080/api/v1/musicquiz/userprofile",
                {
                    userId: userProfile.id,
                    userName: userProfile.name,
                },
                {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                }
            );

            if (response.data === undefined)
                throw new Error("Server did not register user.");
            // setServerResponse(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="home-section">
            {(userProfile.id !== "") ? (
                <>
                    {/* <button className='login-button' onClick={logOut}>Log out</button> */}
                    <Navigate to="/welcome" />
                </>
            ) : (
                <button className="login-button" onClick={() => login()}>
                    Sign in with Google 🚀{" "}
                </button>
            )}
        </section>
    );
};

export default Home;
