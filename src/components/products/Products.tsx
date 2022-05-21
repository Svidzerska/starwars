import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./products.scss";

import { Data } from "../interfaces/Data";

import { getPeople, getStarships } from "../../features/products/productsSlice";

import WaitScreen from "../utilityComponents/waitScreen/WaitScreen";

const Products: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const people: Data = useAppSelector((state) => state.products.people);
  const starships: Data = useAppSelector((state) => state.products.starships);

  useEffect(() => {
    dispatch(getPeople());
    dispatch(getStarships());
  }, []);

  const chooseCard = (e: React.MouseEvent<HTMLButtonElement>): void => {
    navigate(`/products/${e.currentTarget.id}`);
  };

  return (
    <>
      {people.isPending ? (
        <WaitScreen />
      ) : (
        <section className="products">
          <ul>
            <li className="products__card">
              <button id="people" onClick={chooseCard}>
                <p className="card__count">{people.data?.count}</p>
                <p className="card__name">People</p>
              </button>
            </li>
            <li className="products__card">
              <button id="starships" onClick={chooseCard}>
                <p className="card__count">{starships.data?.count}</p>
                <p className="card__name">Starships</p>
              </button>
            </li>
          </ul>
        </section>
      )}
    </>
  );
};

export default Products;
