import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../../app/hooks";

import "./header.scss";

const Header: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <header>
      <button>Blocks</button>
      <button>Strings</button>
    </header>
  );
};

export default Header;
