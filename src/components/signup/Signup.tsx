import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signup.scss";

import { configSignup } from "./config/configSignup";
import { User } from "../../components/interfaces/User";

import { setUsers, setUsersSent } from "../../features/users/usersInfoSlice";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

const Signup: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const users: User[] = useAppSelector((state) => state.users.users);
  const isUsersSent: boolean = useAppSelector((state) => state.users.isUsersSent);

  const [values, setValues] = useState<User>({ username: "", password: "", confirmPassword: "" });
  const [isExistUser, setExistUser] = useState<boolean>(false);
  const [isSubmitSuccess, setSubmitSuccess] = useState<boolean>(false);

  useEffect(() => {
    const usersFromStorage = localStorage.getItem("Users");
    usersFromStorage && dispatch(setUsers(JSON.parse(usersFromStorage)));
  }, []);

  useEffect(() => {
    isSubmitSuccess && setTimeout(() => setSubmitSuccess(false), 2000);
  }, [isSubmitSuccess]);

  useEffect(() => {
    if (isUsersSent) {
      localStorage.setItem("Users", JSON.stringify(users));
      setSubmitSuccess(true);
      dispatch(setUsersSent(false));
    }
  }, [isUsersSent]);

  const updateUsers = (__values: User): void => {
    setValues(__values);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const repeatUser = users.find(
      (element) => values.username === element.username && values.password === element.password
    );

    if (repeatUser) {
      setExistUser(true);
    } else {
      dispatch(setUsers([...users, values]));
      setExistUser(false);
      dispatch(setUsersSent(true));
    }
  };

  return (
    <main className="signup">
      <Link to="/" className="switcher">
        Sign in
      </Link>
      <i className="signup__warning">{isExistUser && "the user already exists, please sign in"}</i>
      <i className="signup__warning">{isSubmitSuccess && "You are successfully signed up, please sign in"}</i>
      <FormBuilder
        updateUsers={updateUsers}
        config={configSignup}
        formName="Register"
        formActionName="REGISTER"
        onSubmitToDo={handleSubmit}
        link="/"
        linkName="Member Login"
      />
    </main>
  );
};

export default Signup;
