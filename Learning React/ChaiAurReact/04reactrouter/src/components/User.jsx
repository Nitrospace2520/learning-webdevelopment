import { useParams } from "react-router-dom";

const User = () => {
  const { userID } = useParams();
  return (
    <div className="flex justify-center w-full h-16 items-center ">
      <h1 className="text-3xl">User : {userID}</h1>
    </div>
  );
};

export default User;
