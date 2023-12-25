
import { useAuthState } from "react-firebase-hooks/auth";
import { allAuths } from "../config/firebase.config";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(allAuths);
  console.log(user);
  const signOutHandle = ()=>{
    signOut(allAuths);
    navigate("/");
  }

  return (
    <div className="flex h-[100vh] bg-green-950 text-white justify-center">
      <div className=" mt-[150px] bg-green-800 h-60 p-10 rounded">
        <div className="flex justify-center align-middle gap-5">
          <div>
            <img className="rounded-full" src={user?.photoURL} alt="" />
          </div>
          <div className="">
            <p>Name: {user?.displayName}</p>
            <p>Email: {user?.email}</p>
            <p>Creation time: {user?.metadata?.creationTime}</p>
            <p>Last sign in time: {user?.metadata?.lastSignInTime}</p>
          </div>
        </div>
        <p>
          <button onClick={signOutHandle} className="mt-5 rounded-full py-2 px-[200px] bg-green-500 hover:bg-green-700 transition">
            Sign out
          </button>
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
