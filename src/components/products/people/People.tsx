import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { getPeople, getStarships } from "../../../features/products/productsSlice";

import { Entities } from "../../interfaces/Entities";

import CardRender from "../utilityComponentsProducts/Card";
import Header from "../utilityComponentsProducts/Header/Header";

const People: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const people: Entities = useAppSelector((state) => state.products.people);

  useEffect(() => {
    !people.count && dispatch(getPeople());
  }, []);

  return (
    <>
      <Header />
      <CardRender entities={people} />
    </>
  );
};

export default People;
