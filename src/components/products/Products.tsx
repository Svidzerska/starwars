import React from "react";

import { Outlet } from "react-router";

const Products: React.FC = (): JSX.Element => {
  return (
    <>
      <p>products</p>
      <Outlet />
    </>
  );
};

export default Products;
