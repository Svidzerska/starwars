import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";

import { setBlockView } from "../../../../features/products/productsSlice";

import "./header.scss";

const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const isBlockView: boolean = useAppSelector((state) => state.products.isBlockView);

  useEffect(() => {
    console.log(isBlockView);
  }, [isBlockView]);

  useEffect(() => {
    const viewFromStorage = localStorage.getItem("View");
    if (viewFromStorage) {
      const viewFromStorageParse = JSON.parse(viewFromStorage);
      dispatch(setBlockView(viewFromStorageParse));
    }
  }, []);

  const onBlocks = (): void => {
    localStorage.setItem("View", JSON.stringify(true));
    dispatch(setBlockView(true));
  };

  const onStrings = (): void => {
    localStorage.setItem("View", JSON.stringify(false));
    dispatch(setBlockView(false));
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
