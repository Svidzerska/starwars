import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signup.scss";

import { setUsers, setSignupSubmit, setSubmitSuccess } from "../../features/users/usersInfoSlice";

import { configSignup } from "./config/configSignup";
import { User } from "../../components/interfaces/User";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

const Signup: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const users: User[] = useAppSelector((state) => state.users.users);
  const isSignupSubmit: boolean = useAppSelector((state) => state.users.isSignupSubmit);
  const isSubmitSuccess: boolean = useAppSelector((state) => state.users.isSubmitSuccess);

  const [values, setValues] = useState<User>({ username: "", password: "", confirmPassword: "" });
  const [isExistUser, setExistUser] = useState<boolean>(false);

  useEffect(() => {
    dispatch(setSubmitSuccess(false));
  }, []);

  useEffect(() => {
    isSignupSubmit && dispatch(setSignupSubmit(false));
  }, [isSignupSubmit]);

  useEffect(() => {
    if (users.length !== 0) {
      localStorage.setItem("Users", JSON.stringify(users));
      dispatch(setSignupSubmit(true));
      dispatch(setSubmitSuccess(true));
    }
  }, [users]);

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
      const usersFromStorage = localStorage.getItem("Users");

      if (usersFromStorage) {
        const usersFromStorageParse = JSON.parse(usersFromStorage);
        dispatch(setUsers([...usersFromStorageParse, values]));
      } else {
        dispatch(setUsers([values]));
      }

      setExistUser(false);
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
