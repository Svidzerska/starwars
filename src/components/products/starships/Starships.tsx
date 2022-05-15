import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { getStarships } from "../../../features/products/productsSlice";

import { Entities } from "../../interfaces/Entities";

import CardRender from "../utilityComponentsProducts/Card";
import Header from "../utilityComponentsProducts/Header/Header";

const Starships: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const starships: Entities = useAppSelector((state) => state.products.starships);

  useEffect(() => {
    !starships.count && dispatch(getStarships());
  }, []);

  return (
    <>
      <Header />
      <CardRender entities={starships} />
    </>
  );
};

export default Starships;
