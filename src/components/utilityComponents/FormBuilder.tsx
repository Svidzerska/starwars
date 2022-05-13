import React from "react";

interface Props {
  config: object[];
}

const FormBuilder: React.FC<Props> = ({ config }): JSX.Element => {
  console.log(config);

  return <p>formbuilder</p>;
};

export default FormBuilder;
