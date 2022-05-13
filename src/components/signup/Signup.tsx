import React from "react";

import FormBuilder from "../utilityComponents/FormBuilder";

import { configSignup } from "./config/configSignup";

const Signup: React.FC = (): JSX.Element => {
  return (
    <>
      <p>sign up</p>
      <FormBuilder config={configSignup} />
    </>
  );
};

export default Signup;
