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

  const valid = (a: any) => {
    console.log(a);
  };

  const listOfFields: JSX.Element[] = config.map((field: Config) => {
    const name = field.fieldName;

    const validResult: ValidResult[] = field.validationMethods.map((rule) => {
      return values[name] && rule(values[name], password);
    });

    return (
      <fieldset key={name}>
        <label htmlFor={name}>
          {validResult.map((element) => (
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
      <h1>{formName}</h1>
      <form onSubmit={(): void => onSubmitToDo()}>
        {listOfFields}
        <input type="submit" value={formActionName} />
      </form>
    </section>
  );
};

export default FormBuilder;
