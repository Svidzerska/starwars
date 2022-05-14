import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signin.scss";

import { User } from "../interfaces/User";
import { configSignin } from "./config/configSignin";

import { setAuthed } from "../../features/usersInfoSlice";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

const Signin: React.FC = (): JSX.Element => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const usersFromStorage: any = useAppSelector((state) => state.users.usersFromStorage);

  const [values, setValues] = useState<User>({ username: "", password: "", confirmPassword: "" });

  const updateUsers = (__values: User): void => {
    setValues(__values);
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    console.log(usersFromStorage);
    console.log(values);

    const checkLogin = usersFromStorage.find(
      (element: User) => element.username === values.username && element.password === values.password
    );
    if (checkLogin) {
      dispatch(setAuthed(true));
      navigate("/products");
    } else {
      navigate("/signup");
    }
  };

  return (
    <main className="signin">
      <Link to="/signup" className="switcher">
        Sign up
      </Link>
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
