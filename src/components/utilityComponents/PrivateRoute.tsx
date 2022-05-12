import { Navigate } from "react-router-dom";

interface Props {
  component: JSX.Element;
  authed: boolean;
}

const PrivateRoute: React.FC<Props> = ({ component, authed }): JSX.Element => {
  return authed === true ? component : <Navigate to={{ pathname: "/signin" }} />;
};

export default PrivateRoute;
