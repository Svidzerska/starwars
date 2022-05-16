import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./showDetails.scss";

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
      <header className="entity_header">
        <Link to={`/products/${parentBlock}`}>Back to {parentBlock}</Link>
        <button></button>
      </header>
      {parentBlock === "starships" ? (
        <main>
          <h1>{entity.name}</h1>
          <section>
            <h2 className="category_name">{"What is it?"}</h2>
            {characteristics.filter((_item, index) => index >= 1 && index <= 3)}
          </section>
          <section>
            <h2 className="category_name">{"Physical characteristics"}</h2>
            {characteristics.filter((_item, index) => index >= 4 && index <= 11)}
          </section>
          <section>
            <h2 className="category_name">{"Class of starships"}</h2>
            {characteristics.filter((_item, index) => index === 12)}
          </section>
        </main>
      ) : (
        <main>
          <h1>{entity.name}</h1>
          <section>
            <h2 className="category_name">{"Physical details"}</h2>
            {characteristics.filter((_item, index) => index >= 1 && index <= 5)}
          </section>
          <section>
            <h2 className="category_name">{"Who is it?"}</h2>
            {characteristics.filter((_item, index) => index >= 6 && index <= 7)}
          </section>
        </main>
      )}
    </>
  );
};

export default ShowDetails;
