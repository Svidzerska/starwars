import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { Data } from "../../interfaces/Data";

import { getPeople } from "../../../features/products/productsSlice";

import CardRender from "../utilityComponentsProducts/Card";
import Header from "../utilityComponentsProducts/Header/Header";
import WaitScreen from "../../utilityComponents/waitScreen/WaitScreen";
import ErrorScreen from "../../utilityComponents/errorScreen/ErrorScreen";

const People: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const people: Data = useAppSelector((state) => state.products.people);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return (
    <>
      {people.error === null ? (
        people.isPending ? (
          <WaitScreen />
        ) : (
          <>
            <Header />
            <CardRender entities={people.data} />
          </>
        )
      ) : (
        <ErrorScreen errorMessage={people.error} />
      )}
    </>
  );
};

export default People;
