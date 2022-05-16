import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";

import { getView, setView } from "../../../../features/products/productsSlice";

import "./header.scss";

const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const isBlockView: boolean = useAppSelector((state) => state.products.isBlockViewServer);

  useEffect(() => {
    console.log(isBlockView);
  }, [isBlockView]);

  useEffect(() => {
    dispatch(getView());
  }, []);

  const onBlocks = (): void => {
    dispatch(setView(true)).then(() => dispatch(getView()));
  };

  const onStrings = (): void => {
    dispatch(setView(false)).then(() => dispatch(getView()));
  };

  return (
    <header>
      <button className={isBlockView ? "swich-on" : ""} onClick={onBlocks} disabled={isBlockView}>
        Blocks
      </button>
      <button className={!isBlockView ? "swich-on" : ""} onClick={onStrings} disabled={!isBlockView}>
        Strings
      </button>
    </header>
  );
};

export default Header;
