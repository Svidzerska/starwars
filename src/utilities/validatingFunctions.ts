interface ValidatingFunctions {
  isRightLength: Function;
  isEmail: Function;
  isPass: Function;
  isConfirmPass: Function;
}

const validatingFunctions: ValidatingFunctions = {
  isRightLength: (val: string, minLength: number) => {
    return val.length >= minLength && val.length <= 20
      ? { valid: true, name: "name", error: "" }
      : { valid: false, name: "name", error: `from ${minLength} to 20 symbols are needed` };
  },

  isEmail: (val: string, regEx: RegExp) => {
    const regex: RegExp = regEx || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
    return regex.test(val)
      ? { valid: true, name: "email", error: "" }
      : { valid: false, name: "email", error: "it is not an email" };
  },

  isPass: (val: string) => {
    const regex: RegExp = /\d[a-zA-Z]|[a-zA-Z]\d/;
    return regex.test(val)
      ? { valid: true, name: "password", error: "" }
      : { valid: false, name: "password", error: "at least 1 digit and 1 letter are expected" };
  },

  isConfirmPass: (val: string, val_first: string) => {
    return val_first === val
      ? { valid: true, name: "confirm_password", error: "" }
      : { valid: false, name: "confirm_password", error: "password isn't confirmed" };
  },
};

export default validatingFunctions;
