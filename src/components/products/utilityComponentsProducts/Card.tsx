import React, { useEffect, useState } from "react";

import "./card.scss";

import { Entities } from "../../interfaces/Entities";

interface Props {
  entities: Entities;
}

const CardRender: React.FC<Props> = ({ entities }): JSX.Element => {
  const [peculiarities, setPeculiarities] = useState<string[]>([]);

  useEffect(() => {
    if (entities.results) {
      const keys: string[] = Object.keys(entities.results[0]);
      setPeculiarities(keys);
    }
  }, [entities]);

  const cards: JSX.Element[] | undefined = entities.results?.map((entity: any) => {
    const properties: (JSX.Element | undefined)[] = peculiarities.map((element, index) => {
      while (index <= 7 && index >= 1) {
        return (
          <p key={element}>
            <span>{element}:</span>
            <span>{entity[element]}</span>
            <br />
          </p>
        );
      }
    });

    return (
      <li key={entity.name}>
        <button>
          <img src="" alt="" />
          <h1>{entity.name}</h1>
          {properties}
        </button>
      </li>
    );
  });

  return <main>{<ul className="cards">{cards}</ul>}</main>;
};

export default CardRender;
