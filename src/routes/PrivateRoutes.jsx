import React, { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { allAuths } from "../config/firebase.config";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";

const PrivateRoutes = ({ children }) => {
  const [user, loading] = useAuthState(allAuths);
  const location = useLocation();

  useEffect(() => {
    if (!user && !loading) {
      Swal.fire({
        title: "User's data is private",
        text: "You need to sign in first",
        icon: "warning",
      }).then(() => {});
    }
  }, [user, loading]);

  if (loading) {
    return <Loading></Loading>;
  }
  if (!user) {
    return <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return <>{children}</>;
};

export default PrivateRoutes;
