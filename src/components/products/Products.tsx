import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import { getPeople } from "../../features/products/productsSlice";

const Products: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const people: any = useAppSelector((state) => state.products.people);

  useEffect(() => {
    dispatch(getPeople());
  }, []);

  return <p>{people.count}</p>;
};

export default Products;
