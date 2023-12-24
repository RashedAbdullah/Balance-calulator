import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { googleFirebase } from "../config/firebase";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import { githubFirebase } from "../config/firebase";
import Home from "./../pages/Home";
import { toast } from "react-toastify";

const SignUp = () => {
  // Google sign up:
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth(googleFirebase);
  const [googleUser, setGoogleUser] = useState();
  // console.log(googleUser?.photoURL);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});
  const signinwithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        setGoogleUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  };

  const githubProvider = new GithubAuthProvider();
  const firebaseAuth = getAuth(githubFirebase);

  const signinwithGithub = () => {
    signInWithPopup(firebaseAuth, githubProvider)
      .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);
      });
  };

  const [inputs, setInputs] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
    conPassword: "",
  });

  const [allInputValues, setAllInputValues] = useState([]);
  console.log(allInputValues);

  const formChangeValue = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignUpForm = (e) => {
    e.preventDefault();
    if (inputs.password !== inputs.conPassword) {
      console.log("password dosn't match!");
      return;
    }
    // setAllInputValues([...allInputValues, inputs]);
    console.log(createUserWithEmailAndPassword(inputs.email, inputs.password));
  };
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
        <div className="flex justify-center text-green-600 text-2xl cursor-pointer gap-4">
          <div onClick={signinwithGoogle}>
            <FaGoogle />
          </div>
          <div onClick={signinwithGithub}>
            <FaGithub />
          </div>
        </div>

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-1 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your Accont
          </h2>
        </div>

        <div className="mt-2 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-5" onSubmit={handleSignUpForm}>
            <div>
              <label
                htmlFor="fname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                First Name
              </label>

              <input
                onChange={formChangeValue}
                value={inputs.fname}
                id="fname"
                name="fname"
                type="text"
                autoComplete="fname"
                placeholder="First name"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />

              <label
                htmlFor="lname"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Last Name
              </label>

              <input
                onChange={formChangeValue}
                value={inputs.lname}
                id="lname"
                name="lname"
                type="text"
                autoComplete="lname"
                placeholder="Last name"
                className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  onChange={formChangeValue}
                  value={inputs.email}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  onChange={formChangeValue}
                  value={inputs.password}
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter password"
                  autoComplete="current-password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
              {/* confirm password */}
              <div className="flex items-center justify-between">
                <label
                  htmlFor="conPassword"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-1">
                <input
                  onChange={formChangeValue}
                  value={inputs.conPassword}
                  id="conPassword"
                  name="conPassword"
                  type="password"
                  placeholder="Confirm password"
                  autoComplete="current-password"
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-green-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-1 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <NavLink
              to="/signin"
              href="#"
              className="font-semibold leading-6 text-green-600 hover:text-indigo-500"
            >
              Sign in
            </NavLink>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
