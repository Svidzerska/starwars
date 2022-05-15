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
    <section className="products">
      <ul>
        <li className="products__card">
          <button>
            <p className="card__count">{people.count}</p>
            <p className="card__name">People</p>
          </button>
        </li>
        <li className="products__card">
          <button>
            <p className="card__count">{starships.count}</p>
            <p className="card__name">Starships</p>
          </button>
        </li>
      </ul>
    </section>
  );
};

export default Products;
