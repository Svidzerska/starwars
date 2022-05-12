import { Navigate } from "react-router-dom";

interface Props {
  component: React.FC;
  authed: boolean;
}

const PrivateRoute: React.FC<Props> = ({ component: Component, authed }): JSX.Element => {
  return authed === true ? <Component /> : <Navigate to={{ pathname: "/signin" }} />;
};

export default PrivateRoute;
