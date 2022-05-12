import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";

import "./App.css";

import PrivateRoute from "./components/utilityComponents/PrivateRoute";

import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Products from "./components/products/Products";
import People from "./components/products/people/People";
import Starships from "./components/products/starships/Starships";

const App: React.FC = (): JSX.Element => {
  const [isAuth, setIsAuth] = useState(true); //?

  return (
    <Router>
      <Routes>
        <Route index element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<PrivateRoute authed={isAuth} component={<Outlet />} />}>
          <Route index element={<Products />} />
          <Route path="people" element={<People />} />
          <Route path="starships" element={<Starships />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
