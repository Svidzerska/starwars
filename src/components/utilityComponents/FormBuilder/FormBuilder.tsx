import React, { FormEvent, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import "./formBuilder.scss";

import { Config } from "../../interfaces/Config";
import { ValidationResult } from "../../interfaces/ValidationResult";

interface Props {
  config: Config[];
  formName: string;
  formActionName: string;
  onSubmitToDo: Function;
  link: string;
  linkName: string;
  updateUsers: Function;
}

const FormBuilder: React.FC<Props> = ({
  config,
  formName,
  formActionName,
  onSubmitToDo,
  link,
  linkName,
  updateUsers,
}): JSX.Element => {
  const isUsersSent: boolean = useAppSelector((state) => state.users.isUsersSent);

  const [values, setValues] = useState<{ [id: string]: string }>({});
  const [password, setPassword] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(false);

  useEffect(() => {
    isUsersSent && setValues({});
  }, [isUsersSent]);

  useEffect(() => {
    validInputsArray.includes(false) ? setValid(false) : setValid(true);
  }, [values]);

  useEffect(() => {
    isValid && updateUsers(values);
  }, [isValid, values]);

  useEffect(() => {
    setPassword(values.password);
  }, [values.password]);

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    const id: string = e.currentTarget.id;

    setValues({ ...values, [id]: value });
  };

  let validInputsArray: (boolean | undefined)[] = [];

  const listOfFields: JSX.Element[] = config.map((field: Config) => {
    const name = field.fieldName;

    const validationResult: ValidationResult[] = field.validationMethods.map((rule) => {
      return values[name] ? rule(values[name], password) : { valid: false };
    });

    let unValidInput: ValidationResult | undefined = validationResult.find((element) => element?.valid === false);

    validInputsArray.push(unValidInput?.valid);

    return (
      <fieldset key={name}>
        {validationResult.map(
          (element, index) =>
            element.error &&
            element?.error !== "" && (
              <label htmlFor={name} key={`name` + index}>
                <i>{element?.error}</i>
                <br />
              </label>
            )
        )}
        <input
          id={name}
          type={field.type}
          placeholder={field.placeholder}
          onChange={handleChange}
          value={values[name] ? values[name] : ""}
        />
        <br />
      </fieldset>
    );
  });

  return (
    <section className="card">
      <h1>{formName}</h1>
      <form onSubmit={(e): void => onSubmitToDo(e)}>
        {listOfFields}
        <input type="submit" value={formActionName} disabled={!isValid} />
      </form>
      <Link to={link}>{linkName}</Link>
    </section>
  );
};

export default FormBuilder;
