import React, { FormEvent, useEffect, useState } from "react";

import { Config } from "../interfaces/Config";
import { ValidResult } from "../interfaces/ValidResult";

interface Props {
  config: Config[];
  formName: string;
  formActionName: string;
  onSubmitToDo: Function;
}

const FormBuilder: React.FC<Props> = ({ config, formName, formActionName, onSubmitToDo }): JSX.Element => {
  const [values, setValues] = useState<{ [id: string]: string }>({});
  const [password, setPassword] = useState<string>("");
  const [isValid, setValid] = useState<boolean>(false);

  useEffect(() => {
    validInputsArray.includes(undefined) ? setValid(false) : setValid(true);
  }, [values]);

  useEffect(() => {
    console.log(isValid);
  }, [isValid]);

  useEffect(() => {
    setPassword(values.password);
  }, [values.password]);

  const handleChange = (e: FormEvent<HTMLInputElement>): void => {
    const value: string = e.currentTarget.value;
    const id: string = e.currentTarget.id;

    setValues({ ...values, [id]: value });
  };

  let validInputsArray: (ValidResult | undefined)[] = [];

  const listOfFields: JSX.Element[] = config.map((field: Config) => {
    const name = field.fieldName;

    const validationResult: ValidResult[] = field.validationMethods.map((rule) => {
      return values[name] && rule(values[name], password);
    });

    let validInput: ValidResult | undefined = validationResult.find((element) => element?.valid);

    validInputsArray.push(validInput);

    return (
      <fieldset key={name}>
        <label htmlFor={name}>
          {validationResult.map((element) => (
            <>
              <span>{element?.error}</span>
              <br />
            </>
          ))}
        </label>
        <br />
        <input
          id={name}
          type={field.type}
          placeholder={field.placeholder}
          onChange={handleChange}
          value={values[name]}
        />
        <br />
      </fieldset>
    );
  });

  return (
    <section className="card">
      {isValid ? "yeees" : "nooooo"}
      <h1>{formName}</h1>
      <form onSubmit={isValid ? onSubmitToDo() : undefined}>
        {listOfFields}
        <input type="submit" value={formActionName} />
      </form>
    </section>
  );
};

export default FormBuilder;
