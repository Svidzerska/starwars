import React from "react";

import { Entities } from "../../interfaces/Entities";

interface Props {
  entities: Entities;
}

const CardRender: React.FC<Props> = ({ entities }): JSX.Element => {
  const cards: JSX.Element[] | undefined = entities.results?.map((entity: any) => {
    return (
      <li>
        <button>
          <h1>{entity.name}</h1>
          <h3>{entity.gender}</h3>
          <p>{entity.height}</p>
          <p>{entity.mass}</p>
          <p>{entity.eye_color}</p>
        </button>
      </li>
    );
  });

  return (
    <main>
      <ul>{cards}</ul>
    </main>
  );
};

export default CardRender;
