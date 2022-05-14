import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signup.scss";

import { getUsers, setUsers } from "../../features/usersInfoSlice";
import { setSignupSubmit } from "../../features/usersInfoSlice";
import { signup } from "../../features/usersInfoSlice";

import { configSignup } from "./config/configSignup";
import { User } from "../../components/interfaces/User";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";
import { PayloadAction } from "@reduxjs/toolkit";

const Signup: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const users: User[] = useAppSelector((state) => state.users.users);
  const isSignupSubmit: boolean = useAppSelector((state) => state.users.isSignupSubmit);
  const usersFromStorage: any = useAppSelector((state) => state.users.usersFromStorage);

  const [values, setValues] = useState<User>({ username: "", password: "", confirmPassword: "" });
  const [isExistUser, setExistUser] = useState<boolean>(false);

  useEffect(() => {
    users.length !== 0 && dispatch(signup(users));
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
      console.log(usersFromStorage);
      dispatch(setUsers([...usersFromStorage, values]));
      setExistUser(false);
    }

    dispatch(setSignupSubmit(true));
  };

  return (
    <main className="signup">
      <i className="signup__warning">{isExistUser && "the user already exists, please sign in"}</i>
      <FormBuilder
        updateUsers={updateUsers}
        config={configSignup}
        formName="Register"
        formActionName="Register"
        onSubmitToDo={handleSubmit}
        link="/"
        linkName="Member Login"
      />
    </main>
  );
};

export default Signup;
