import React from "react";

import { Config } from "../interfaces/Config";

interface Props {
  config: Config[];
  formName: string;
  formActionName: string;
  onSubmitToDo: Function;
}

const FormBuilder: React.FC<Props> = ({ config, formName, formActionName, onSubmitToDo }): JSX.Element => {
  console.log(config);

  const listOfFields: JSX.Element[] = config.map((field: Config) => {
    return (
      <>
        <input type={field.type} placeholder={field.placeholder} />
      </>
    );
  });

  return (
    <>
      <h1>{formName}</h1>
      <form onSubmit={(): void => onSubmitToDo()}>
        {listOfFields}
        <input type="submit" value={formActionName} />
      </form>
    </>
  );
};

export default FormBuilder;
