import validatingFunctions from "../../../utilities/validatingFunctions";

export const configSignup = [
  {
    field: "username",
    type: "text",
    placeholder: "Username",
    validationMethods: [validatingFunctions.checkLength],
  },
  {
    field: "password",
    type: "password",
    placeholder: "Password",
    validationMethods: [validatingFunctions.checkPass, validatingFunctions.checkLength],
  },
  {
    field: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    validationMethods: [validatingFunctions.checkConfirmPass],
  },
];
