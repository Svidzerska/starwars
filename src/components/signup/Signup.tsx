import React from "react";

import FormBuilder from "../utilityComponents/FormBuilder";

import { configSignup } from "./config/configSignup";

const Signup: React.FC = (): JSX.Element => {
  const handleSubmit = (): void => {
    console.log("yeeeeeeeeee");
  };

  return (
    <>
      <p>sign up</p>
      <FormBuilder config={configSignup} formName="Register" formActionName="Register" onSubmitToDo={handleSubmit} />
    </>
  );
};

export default Signup;
