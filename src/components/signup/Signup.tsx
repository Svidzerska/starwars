import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signup.scss";

import { getUsers, setUsers } from "../../features/usersInfoSlice";
import { setSignupSubmit } from "../../features/usersInfoSlice";
import { signup } from "../../features/usersInfoSlice";

import { configSignup } from "./config/configSignup";
import { User } from "../../components/interfaces/User";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

const Signup: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const users: User[] = useAppSelector((state) => state.users.users);
  const isSignupSubmit: boolean = useAppSelector((state) => state.users.isSignupSubmit);
  const usersFromStorage: any = useAppSelector((state) => state.users.usersFromStorage);

  const [values, setValues] = useState<User>({ username: "", password: "", confirmPassword: "" });
  const [isExistUser, setExistUser] = useState<boolean>(false);

  useEffect(() => {
    isSignupSubmit && dispatch(getUsers()).then(() => dispatch(setSignupSubmit(false)));
  }, [isSignupSubmit]);

  useEffect(() => {
    users.length !== 0 && dispatch(signup(users)).then(() => dispatch(setSignupSubmit(true)));
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
      usersFromStorage ? dispatch(setUsers([...usersFromStorage, values])) : dispatch(setUsers([values]));
      setExistUser(false);
    }
  };

  return (
    <main className="signup">
      <Link to="/" className="switcher">
        Sign in
      </Link>
      <i className="signup__warning">{isExistUser && "the user already exists, please sign in"}</i>
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
