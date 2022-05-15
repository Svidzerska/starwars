import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./products.scss";

import { getPeople, getStarships } from "../../features/products/productsSlice";

const Products: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const people: any = useAppSelector((state) => state.products.people);
  const starships: any = useAppSelector((state) => state.products.starships);

  useEffect(() => {
    dispatch(getPeople());
    dispatch(getStarships());
  }, []);

  return (
    <ul className="products">
      <li className="products__card">
        <p className="card__count">{people.count}</p>
        <p>People</p>
      </li>
      <li className="products__card">
        <p className="card__count">{starships.count}</p>
        <p>Starships</p>
      </li>
    </ul>
  );
};

export default Products;
