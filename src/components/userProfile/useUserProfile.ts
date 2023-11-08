import { createContext, } from "react";

export const NULL_USER:UserProfile = {id:"", name:""};

export type UserProfile = {
  id: string,
  name: string,
  email?: string,
  family_name?: string,
  given_name?: string,
  locale?: string,
  picture?: string,
  verified_email?: boolean,
}

export type UserProfileContextType = {
  userProfile: UserProfile;
  setUserProfile: (userProfile: UserProfile ) => void;
};

export const UserProfileContext = createContext<UserProfileContextType>(null!);

// export const useUserProfileContext = (initialUserProfile: UserProfile | null): { userProfile: UserProfile | null; setUserProfile: (userProfile: UserProfile | null) => void } => {
//   const [userProfile, setUserProfile] = useState(initialUserProfile);

//   const handleUpdateUserProfile = (newUserProfile: UserProfile) => {
//     setUserProfile(newUserProfile);
//   };

//   return { userProfile, setUserProfile };
// };