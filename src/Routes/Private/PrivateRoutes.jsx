import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/UserContext";
import Loader from "../../Pages/Loader/Loader";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);

  const location = useLocation();

  if (loader) {
    return <Loader />;
  }

  if (user && user.uid) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;
