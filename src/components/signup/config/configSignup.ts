import validatingFunctions from "../../../utilities/validatingFunctions";

export const configSignup = [
  {
    fieldName: "username",
    type: "email",
    placeholder: "E-mail as Username",
    validationMethods: [validatingFunctions.checkEmail],
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
