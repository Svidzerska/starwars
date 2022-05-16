import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import "./showDetails.scss";

import foto1 from "../../../images/people/1.jpg";
import foto2 from "../../../images/people/2.jpg";
import foto3 from "../../../images/people/3.jpg";
import foto4 from "../../../images/people/4.jpg";
import foto5 from "../../../images/people/5.jpg";
import foto6 from "../../../images/people/6.jpg";
import foto7 from "../../../images/people/7.jpg";
import foto8 from "../../../images/people/8.jpg";
import foto9 from "../../../images/people/9.jpg";
import foto0 from "../../../images/people/10.jpg";

import { useAppSelector, useAppDispatch } from "../../../app/hooks";

import { getEntity } from "../../../features/products/productsSlice";

interface Props {
  parentBlock: string;
}

const ShowDetails: React.FC<Props> = ({ parentBlock }): JSX.Element => {
  // const navigate = useNavigate();
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

  const fotoArray = [foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];
  const fotoRandom = Math.floor(Math.random() * 10);

  const characteristics: JSX.Element[] = propertiesName.map((property: string) => {
    return (
      <p key={property}>
        <span className="propertyName">{property}: </span>
        <span>{entity[property]}</span>
      </p>
    );
  });

  // const handleBack = (): void => {
  //   navigate(`/products/${parentBlock}`);
  // };

  return (
    <>
      <header className="entity_header">
        {/* <button onClick={handleBack}>Back to {parentBlock}</button> */}
        <Link to={`/products/${parentBlock}`}>Back to {parentBlock}</Link>
        <button></button>
      </header>
      {parentBlock === "starships" ? (
        <main className="entity_main">
          <img src={fotoArray[fotoRandom]} alt="" />
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
        <main className="entity_main">
          <img src={fotoArray[fotoRandom]} alt="" />
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
