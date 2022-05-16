import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";

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

import "./card.scss";

import { Entities } from "../../interfaces/Entities";

interface Props {
  entities: Entities;
}

const CardRender: React.FC<Props> = ({ entities }): JSX.Element => {
  const dispatch = useAppDispatch();

  const isBlockView: boolean = useAppSelector((state) => state.products.isBlockViewServer);

  const [peculiarities, setPeculiarities] = useState<string[]>([]);

  useEffect(() => {
    if (entities.results) {
      const keys: string[] = Object.keys(entities.results[0]);
      setPeculiarities(keys);
    }
  }, [entities]);

  const fotoArray = [foto0, foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9];

  const cards: JSX.Element[] | undefined = entities.results?.map((entity: any) => {
    const properties: (JSX.Element | undefined)[] = peculiarities.map((element, index) => {
      while (index <= 7 && index >= 1) {
        return (
          <p key={element}>
            <span className="propertyName">{element}: </span>
            <span className="propertyValue">{entity[element]}</span>
            <br />
          </p>
        );
      }
    });

    const fotoRandom = Math.floor(Math.random() * 10);

    const path = entity.url.match(/\d+/)[0];

    return (
      <li key={entity.name}>
        <Link to={path}>
          <button>
            <div className="name">
              <img src={fotoArray[fotoRandom]} alt="" />
              <h1>{entity.name}</h1>
            </div>
            {isBlockView ? null : <div className="properties">{properties}</div>}
          </button>
        </Link>
      </li>
    );
  });

  return (
    <main className="cards">
      {isBlockView ? (
        <section className="row">
          <ul className="column">{cards?.filter((_item, index) => index % 2 === 0 && (index / 2) % 2 === 0)}</ul>
          <ul className="column">{cards?.filter((_item, index) => index % 2 !== 0 && ((index - 1) / 2) % 2 === 0)}</ul>
          <ul className="column">{cards?.filter((_item, index) => index % 2 === 0 && (index / 2) % 2 !== 0)}</ul>
          <ul className="column">{cards?.filter((_item, index) => index % 2 !== 0 && ((index - 1) / 2) % 2 !== 0)}</ul>
        </section>
      ) : (
        <ul className={"cards_stringify"}>{cards}</ul>
      )}
    </main>
  );
};

export default CardRender;
