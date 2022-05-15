import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signin.scss";

import { User } from "../interfaces/User";
import { configSignin } from "./config/configSignin";

import { getCurrentUser, logout, signin } from "../../features/users/usersInfoSlice";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

const Signin: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const usersFromStorage: any = useAppSelector((state) => state.users.usersFromStorage);
  const currentUser: User | undefined | string = useAppSelector((state) => state.users.currentUser);
  const logoutProcessInfo: string = useAppSelector((state) => state.users.logoutMessage);

  const [values, setValues] = useState<User>({ username: "", password: "" });

  useEffect(() => {
    console.log(currentUser);
  }, [currentUser]);

  useEffect(() => {
    console.log(logoutProcessInfo);
  }, [logoutProcessInfo]);

  const updateUsers = (__values: User): void => {
    setValues(__values);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const checkUser = usersFromStorage?.find(
      (element: User) => element.username === values.username && element.password === values.password
    );
    if (checkUser) {
      dispatch(signin(values))
        .then(() => dispatch(getCurrentUser()))
        .then(() => navigate("/products"));
    } else {
      navigate("/signup");
    }
  };

  const handleLogout = (): void => {
    dispatch(logout()).then(() => dispatch(getCurrentUser()));
  };

  return (
    <main className="signin">
      <Link to="/signup" className="switcher">
        Sign up
      </Link>
      <Link to="products" className="switcher">
        Products
      </Link>
      <p>
        {logoutProcessInfo !== "" ? logoutProcessInfo : ""}
        {/* {currentUser && typeof currentUser !== "string" ? `You are login as ${currentUser.username}` : "please wait..."} */}
        {/* {currentUser === "wait" && `Current user: Please wait for server response`}
        {!currentUser && `no current user`} */}
      </p>
      <button onClick={handleLogout}>Log out</button>
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
