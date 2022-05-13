import validatingFunctions from "../../../utilities/validatingFunctions";

export const configSignup = [
  {
    fieldName: "username",
    type: "text",
    placeholder: "Username",
    validationMethods: [validatingFunctions.checkLength],
  },
  {
    fieldName: "password",
    type: "password",
    placeholder: "Password",
    validationMethods: [validatingFunctions.checkPass, validatingFunctions.checkLength],
  },
  {
    fieldName: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    validationMethods: [validatingFunctions.checkConfirmPass],
  },
];
