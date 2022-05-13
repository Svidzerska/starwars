import React from "react";
import { Link } from "react-router-dom";

import "./signup.scss";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

import { configSignup } from "./config/configSignup";

const Signup: React.FC = (): JSX.Element => {
  const handleSubmit = (): void => {
    console.log("yeeeeeeeeee");
  };

  return (
    <main className="signup">
      <FormBuilder config={configSignup} formName="Register" formActionName="Register" onSubmitToDo={handleSubmit} />
      <Link to="/">Member Login</Link>
    </main>
  );
};

export default Signup;
