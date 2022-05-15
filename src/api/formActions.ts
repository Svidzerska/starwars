import { wait } from "../utilities/wait";

import { User } from "../components/interfaces/User";

export const formAction = {
  signup: (users: User[]) => {
    return wait(2000).then(() => {
      localStorage.setItem("Users", JSON.stringify(users));
    });
  },

  getUsers: () => {
    return wait(2000).then(() => {
      const usersFromStorage = localStorage.getItem("Users");
      if (usersFromStorage) {
        const usersFromStorageParse = JSON.parse(usersFromStorage);
        return usersFromStorageParse;
      }
    });
  },

  signin: (currentUser: User) => {
    return wait(2000).then(() => {
      localStorage.setItem("CurrentUser", JSON.stringify(currentUser));
      return "you are successfully logged in!";
    });
  },

  checkLogin: () => {
    return wait(2000).then(() => {
      const currentUserInStorage = localStorage.getItem("CurrentUser");
      if (currentUserInStorage) {
        let currentUser = JSON.parse(currentUserInStorage);
        return currentUser;
      }
    });
  },

  logout: () => {
    return wait(2000).then(() => {
      localStorage.removeItem("CurrentUser");
      return "you are successfully logged out!";
    });
  },
};
