import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./app/hooks";

import "./App.css";

import { User } from "./components/interfaces/User";

import { setCurrentUser } from "./features/users/usersInfoSlice";

import PrivateRoute from "./components/utilityComponents/PrivateRoute";

import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Products from "./components/products/Products";
import People from "./components/products/people/People";
import Starships from "./components/products/starships/Starships";
import ShowDetails from "./components/products/utilityDetails/ShowDetails";

const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const currentUser: User | null = useAppSelector((state) => state.users.currentUser);

  useEffect(() => {}, []);

  useEffect(() => {
    const currentUserFromStorage = localStorage.getItem("CurrentUser");
    if (currentUserFromStorage) {
      const currentUserFromStorageParse = JSON.parse(currentUserFromStorage);
      dispatch(setCurrentUser(currentUserFromStorageParse));
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route index element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<PrivateRoute isAuthed={currentUser} component={<Outlet />} />}>
          <Route index element={<Products />} />
          <Route path="people" element={<Outlet />}>
            <Route index element={<People />} />
            <Route path=":entityId" element={<ShowDetails parentBlock={"people"} />} />
          </Route>
          <Route path="starships" element={<Outlet />}>
            <Route index element={<Starships />} />
            <Route path=":entityId" element={<ShowDetails parentBlock={"starships"} />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
