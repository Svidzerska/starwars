import React from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { Entities } from "../../interfaces/Entities";

import CardRender from "../utilityComponentsProducts/CardRender";

const People: React.FC = (): JSX.Element => {
  const people: Entities = useAppSelector((state) => state.products.people);

  return (
    <>
      <header>
        <button></button>
        <button></button>
      </header>
      <CardRender entities={people} />
    </>
  );
};

export default People;
