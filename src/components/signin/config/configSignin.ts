import validatingFunctions from "../../../utilities/validatingFunctions";

export const configSignin = [
  {
    field: "username",
    type: "text",
    validations: [validatingFunctions.checkLength],
  },
  {
    field: "confirmPassword",
    type: "password",
    validations: [validatingFunctions.checkConfirmPass],
  },
];
