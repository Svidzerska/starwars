import React from "react";

import "./errorScreen.scss";

interface Props {
  errorMessage: string;
}

const ErrorScreen: React.FC<Props> = ({ errorMessage }): JSX.Element => {
  return (
    <main className="errorScreen">
      <p>{errorMessage}</p>
    </main>
  );
};

export default ErrorScreen;
