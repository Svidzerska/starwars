import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "./app/hooks";

import "./App.css";

import { User } from "./components/interfaces/User";

import { getCurrentUser, setAuthed } from "./features/users/usersInfoSlice";

import PrivateRoute from "./components/utilityComponents/PrivateRoute";

import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import Products from "./components/products/Products";
import People from "./components/products/people/People";
import Starships from "./components/products/starships/Starships";

const App: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  // const isAuthed: boolean = useAppSelector((state) => state.users.isAuthed);
  const currentUser: User | undefined | string = useAppSelector((state) => state.users.currentUser);

  useEffect(() => {
    dispatch(getCurrentUser());
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
            <Route path=":peopleId" element={<p>peopleId</p>} />
          </Route>
          <Route path="starships" element={<Outlet />}>
            <Route index element={<Starships />} />
            <Route path=":starshipsId" element={<p>starshipsId</p>} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
