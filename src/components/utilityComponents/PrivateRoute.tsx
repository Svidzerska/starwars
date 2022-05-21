import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  component: JSX.Element;
  isAuthed: boolean;
}

const PrivateRoute: React.FC<Props> = ({ component, isAuthed }): JSX.Element => {
  return isAuthed ? component : <Navigate to={{ pathname: "/" }} />;
};

export default PrivateRoute;
