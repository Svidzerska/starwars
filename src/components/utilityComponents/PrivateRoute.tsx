import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { User } from "../interfaces/User";

interface Props {
  component: JSX.Element;
  isAuthed: User | null;
}

const PrivateRoute: React.FC<Props> = ({ component, isAuthed }): JSX.Element => {
  useEffect(() => {
    console.log(isAuthed);
  }, [isAuthed]);

  return isAuthed ? component : <Navigate to={{ pathname: "/" }} />;
};

export default PrivateRoute;
