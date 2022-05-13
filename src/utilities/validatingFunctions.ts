interface ValidatingFunctions {
  checkLength: Function;
  checkEmail: Function;
  checkPass: Function;
  checkConfirmPass: Function;
}

const validatingFunctions: ValidatingFunctions = {
  checkLength: (val: string) => {
    return val.length >= 6 && val.length <= 20
      ? { valid: true, name: "name", error: "" }
      : { valid: false, name: "name", error: "from 6 to 20 symbols are needed" };
  },

  checkEmail: (val: string) => {
    const regExp: RegExp = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return regExp.test(val)
      ? { valid: true, name: "email", error: "" }
      : { valid: false, name: "email", error: "it is not an email" };
  },

  checkPass: (val: string) => {
    const regExp: RegExp = /\d[a-zA-Z]|[a-zA-Z]\d/;
    return regExp.test(val)
      ? { valid: true, name: "password", error: "" }
      : { valid: false, name: "password", error: "at least 1 digit and 1 letter are expected" };
  },

  checkConfirmPass: (val: string, val_first: string) => {
    return val_first === val
      ? { valid: true, name: "confirm_password", error: "" }
      : { valid: false, name: "confirm_password", error: "password isn't confirmed" };
  },
};

export default validatingFunctions;
