import { useContext } from 'react';
import { UserProfileContext } from "../userProfile/useUserProfile";
import { Navigate } from 'react-router';

interface ProtectedRoute {
    children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRoute> = ({ children }) => {
    const { userProfile} = useContext(UserProfileContext);
    const isUserProfileContextAvailable = userProfile;

    if (!isUserProfileContextAvailable) {
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoute;