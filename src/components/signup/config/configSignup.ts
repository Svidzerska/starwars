import validatingFunctions from "../../../utilities/validatingFunctions";

export const configSignup = [
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
    field: "password",
    type: "password",
    validations: {
      onChange: [
        {
          method: validatingFunctions.isPass,
          param: /\d[a-zA-Z]|[a-zA-Z]\d/,
        },
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
