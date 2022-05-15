import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { User } from "../interfaces/User";

import WaitScreen from "./waitScreen/WaitScreen";

interface Props {
  component: JSX.Element;
  isAuthed: User | undefined | string;
}

const PrivateRoute: React.FC<Props> = ({ component, isAuthed }): JSX.Element => {
  useEffect(() => {
    console.log(isAuthed);
  }, [isAuthed]);

  if (isAuthed === "wait") {
    return <WaitScreen />;
  } else {
    if (isAuthed) {
      return component;
    } else {
      return <Navigate to={{ pathname: "/" }} />;
    }
  }
};

export default PrivateRoute;
