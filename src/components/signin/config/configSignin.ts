import validatingFunctions from "../../../utilities/validatingFunctions";

export const configSignin = [
  {
    field: "username",
    type: "text",
    validations: {
      onChange: [
        {
          method: validatingFunctions.isRightLength,
          param: 6,
        },
      ],
    },
  },
  {
    field: "confirmPassword",
    type: "password",
    validations: {
      onChange: [
        {
          method: validatingFunctions.isConfirmPass,
        },
      ],
    },
  },
];
