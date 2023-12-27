import { useAuthState } from "react-firebase-hooks/auth";
import { allAuths } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { FaUserAstronaut } from "react-icons/fa";
import Blogs from "../blog/Blogs";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(allAuths);
  const signOutHandle = () => {
    signOut(allAuths);
    navigate("/");
  };

  return (
    <div className="flex h-[100vh] bg-green-800 text-white">
      <div className="p-10 rounded">
        <div className="">
          <div>
            {user?.photoURL ? (
              <img className="rounded-full mb-5" src={user?.photoURL} alt="" />
            ) : (
              <FaUserAstronaut size="90px" />
            )}
          </div>
          <div className="">
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <p>Creation time: {user?.metadata?.creationTime}</p>
            <p>Last sign in time: {user?.metadata?.lastSignInTime}</p>
          </div>
        </div>
        <p className="">
          <button
            onClick={signOutHandle}
            className="mt-5 rounded-full py-2 px-20 bg-green-500 hover:bg-green-700 transition"
          >
            Sign out
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
