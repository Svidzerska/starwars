import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { getEntity } from "../../../features/products/productsSlice";

interface Props {
  parentBlock: string;
}

const ShowDetails: React.FC<Props> = ({ parentBlock }): JSX.Element => {
  const dispatch = useAppDispatch();

  const entity: any = useAppSelector((state) => state.products.entity);

  const [propertiesName, setPropertiesName] = useState<string[]>([]);

  const { entityId } = useParams();
  console.log(entityId);

  useEffect(() => {
    dispatch(getEntity(`https://swapi.dev/api/${parentBlock}/${entityId}`));
  }, []);

  useEffect(() => {
    const keys: string[] = Object.keys(entity);
    setPropertiesName(keys);
  }, [entity]);

  const characteristics: JSX.Element[] = propertiesName.map((property: string) => {
    return (
      <p key={property}>
        {property}: {entity[property]}
      </p>
    );
  });

  return (
    <>
      <header>
        <Link to={`/products/${parentBlock}`}>Back to {parentBlock}</Link>
        <button></button>
      </header>
      <main>
        <p>{characteristics}</p>
      </main>
    </>
  );
};

export default ShowDetails;
