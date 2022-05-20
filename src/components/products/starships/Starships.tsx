import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { Data } from "../../interfaces/Data";

import { getStarships } from "../../../features/products/productsSlice";

import CardRender from "../utilityComponentsProducts/Card";
import Header from "../utilityComponentsProducts/Header/Header";
import WaitScreen from "../../utilityComponents/waitScreen/WaitScreen";

const Starships: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const starships: Data = useAppSelector((state) => state.products.starships);

  useEffect(() => {
    dispatch(getStarships());
  }, []);

  return (
    <>
      {starships.isPending ? (
        <WaitScreen />
      ) : (
        <>
          <Header />
          <CardRender entities={starships.data} />
        </>
      )}
    </>
  );
};

export default Starships;
