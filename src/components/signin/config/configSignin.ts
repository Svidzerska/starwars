import validatingFunctions from "../../../utilities/validatingFunctions";

export const configSignin = [
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
    validationMethods: [validatingFunctions.checkPass],
  },
];
