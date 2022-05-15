import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { User } from "../interfaces/User";

interface Props {
  component: JSX.Element;
  isAuthed: User | undefined | string;
}

const PrivateRoute: React.FC<Props> = ({ component, isAuthed }): JSX.Element => {
  useEffect(() => {
    console.log(isAuthed);
  }, [isAuthed]);

  if (isAuthed === "wait") {
    return <p>wait</p>;
  } else {
    if (isAuthed) {
      return component;
    } else {
      return <Navigate to={{ pathname: "/" }} />;
    }
  }
};

export default PrivateRoute;
