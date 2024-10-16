import { useContext } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  return (
    <div>
      {!user && <div>Please Login...</div>}
      {user && (
        <div>
          <h1>Username: {user?.username}</h1>
          <h1>Email: {user?.email}</h1>
        </div>
      )}
    </div>
  );
};

export default Profile;
