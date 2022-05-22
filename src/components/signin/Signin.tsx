import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signin.scss";

import { User } from "../interfaces/User";
import { configSignin } from "./config/configSignin";

import { setCurrentUser, setUsers } from "../../features/users/usersInfoSlice";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

const Signin: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const users: User[] = useAppSelector((state) => state.users.users);
  const currentUser: User | null = useAppSelector((state) => state.users.currentUser);

  const [values, setValues] = useState<User>({ username: "", password: "" });

  useEffect(() => {
    const usersFromStorage = localStorage.getItem("Users");
    const currentUserFromStorage = localStorage.getItem("CurrentUser");

    usersFromStorage && dispatch(setUsers(JSON.parse(usersFromStorage)));
    currentUserFromStorage && dispatch(setCurrentUser(JSON.parse(currentUserFromStorage)));
  }, []);

  const updateUsers = (__values: User): void => {
    setValues(__values);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const checkUser = users?.find(
      (element: User) => element.username === values.username && element.password === values.password
    );

    if (checkUser) {
      dispatch(setCurrentUser(values));
      localStorage.setItem("CurrentUser", JSON.stringify(values));
      navigate("/products");
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = (): void => {
    localStorage.removeItem("CurrentUser");
    dispatch(setCurrentUser(null));
  };

  return (
    <main className="signin">
      <Link to="/signup" className="switcher">
        Sign up
      </Link>
      <Link to="products" className="switcher">
        Products
      </Link>
      <i className="signin__info">{currentUser ? `You are login as ${currentUser.username}` : `no current user`}</i>
      <br />
      <button className="buttonLogout" onClick={handleLogout} disabled={!currentUser}>
        Log out
      </button>
      <FormBuilder
        updateUsers={updateUsers}
        config={configSignin}
        formName="Member Login"
        formActionName="LOGIN"
        onSubmitToDo={handleSubmit}
        link="/"
        linkName="Forgot Password?"
      />
    </main>
  );
};

export default Signin;
