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
  const loginProcessInfo: string = useAppSelector((state) => state.users.signinMessage);

  const [values, setValues] = useState<User>({ username: "", password: "" });
  const [isLogout, setLogout] = useState<boolean>(false);
  const [isSignin, setSignin] = useState<boolean>(false);

  useEffect(() => {
    console.log(isLogout);
    isLogout && typeof currentUser !== "string" && setLogout(false);
  }, [, currentUser]);

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
    setSignin(true);
  };

  const handleLogout = (): void => {
    dispatch(logout()).then(() => dispatch(getCurrentUser()));
    setLogout(true);
    setSignin(false);
  };

  return (
    <main className="signin">
      <Link to="/signup" className="switcher">
        Sign up
      </Link>
      <Link to="products" className="switcher">
        Products
      </Link>
      <p className="signin__info">{isSignin ? (loginProcessInfo !== "" ? loginProcessInfo : "") : ""}</p>
      <p className="signin__info">
        {currentUser === "wait"
          ? "please wait for server response..."
          : currentUser
          ? `You are login as ${currentUser}`
          : `no current user`}
      </p>
      <p className="signin__info">{isLogout ? (logoutProcessInfo !== "" ? logoutProcessInfo : "") : ""}</p>
      <button
        className="buttonLogout"
        onClick={handleLogout}
        // disabled={!(currentUser && typeof currentUser !== "string")}
      >
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
