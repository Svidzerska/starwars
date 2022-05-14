import React, { useEffect, useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";

import "./signup.scss";

import { setUsers } from "../../features/usersInfoSlice";
import { signup } from "../../features/usersInfoSlice";

import { configSignup } from "./config/configSignup";
import { User } from "../../components/interfaces/User";

import FormBuilder from "../utilityComponents/FormBuilder/FormBuilder";

const Signup: React.FC = (): JSX.Element => {
  const dispatch = useAppDispatch();

  const users: User[] = useAppSelector((state) => state.users.users);

  const [values, setValues] = useState<User>({ username: "", password: "", confirmPassword: "" });
  const [isExistUser, setExistUser] = useState<boolean>(false);

  // useEffect(() => {
  //   console.log(values);
  // }, [values]);

  useEffect(() => {
    console.log(users);
    dispatch(signup(users));
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
      dispatch(setUsers(values));
      setExistUser(false);
    }
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
