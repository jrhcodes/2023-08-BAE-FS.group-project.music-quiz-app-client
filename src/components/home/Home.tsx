import React, { useState, useEffect, useContext } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Navigate } from "react-router";
import { UserProfile, UserProfileContext } from "../userProfile/useUserProfile";

const Home: React.FC = () => {
  const [user, setUser]: any = useState();
  const { userProfile, setUserProfile } = useContext(UserProfileContext);
  const [serverResponse, setServerResponse]: any = useState();

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const logOut = () => {
    googleLogout();
    setUserProfile(null);
  };

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
          console.log(
            "CALL TO SERVER HERE AND CREATE USER PROFILE IF NOT EXISTS"
          );
          postUserProfile(res.data);
        })
        .catch((err: any) => console.log(err));
    }
  }, [user]);

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
      setServerResponse(response.data);
      console.log(serverResponse);
    } catch (error) {
      console.log(error);
    }
  };

  // const postUserProfile = (async () => {
  //     const rawResponse = await fetch('http://localhost:8080/api/v1/musicquiz/userprofile', {
  //         method: 'POST',
  //         headers: {
  //             'Accept': 'application/json',
  //             'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({ userId: 300, userName: 'player3' })
  //     });
  //     const content = await rawResponse.json();

  //     console.log(content);
  // });

  return (
    <section className="home-section">
      {userProfile && serverResponse ? (
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
