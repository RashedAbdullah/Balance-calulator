import React, { useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { allAuths } from "../config/firebase.config";
import { useSignInWithGithub } from "react-firebase-hooks/auth";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";


const GoogleGithub = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(allAuths);
  const [signInWithGithub, githubUser, githubLoading, githubError] =
    useSignInWithGithub(allAuths);
  const [googleGithubErr, setGoogleGithubErr] = useState({});
  const navigate = useNavigate();

  if (googleError || githubError) {
    return setGoogleGithubErr({
      secialLogInErr: `${googleError} ${githubError}`,
    });
  }

  useEffect(() => {
    if (googleUser || githubUser) {
      Swal.fire({
        title: "Successfully Sign in done",
        icon: "success",
      }).then(() => {});
      navigate("/");
    }
  }, [googleUser, githubUser, navigate]);

  return (
    <>
      {googleLoading || githubLoading ? (
        <Loading />
      ) : (
        <div className=" mt-5 flex justify-center text-green-600 text-2xl gap-6">
          <div className="cursor-pointer" onClick={() => signInWithGoogle()}>
            <FaGoogle size="30px" />
          </div>
          <div className="cursor-pointer" onClick={() => signInWithGithub()}>
            <FaGithub size="30px" />
          </div>
        </div>
      )}
    </>
  );
};

export default GoogleGithub;
