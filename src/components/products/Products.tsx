import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./products.scss";

import { Entities } from "../interfaces/Entities";

import { getPeople, getStarships } from "../../features/products/productsSlice";

const Products: React.FC = (): JSX.Element => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const people: Entities = useAppSelector((state) => state.products.people);
  const starships: Entities = useAppSelector((state) => state.products.starships);

  useEffect(() => {
    dispatch(getPeople());
    dispatch(getStarships());
  }, []);

  const chooseCard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const a = e.currentTarget.id;
    console.log(a);

    navigate(`/products/${e.currentTarget.id}`);
  };

  return (
    <section className="products">
      <ul>
        <li className="products__card">
          <button id="people" onClick={chooseCard}>
            <p className="card__count">{people.count}</p>
            <p className="card__name">People</p>
          </button>
        </li>
        <li className="products__card">
          <button id="starships" onClick={chooseCard}>
            <p className="card__count">{starships.count}</p>
            <p className="card__name">Starships</p>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Products;
