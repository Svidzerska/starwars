import { wait } from "../utilities/wait";

import { User } from "../components/interfaces/User";

export const formAction = {
  signup: (users: User[]) => {
    return wait(2000).then(() => {
      localStorage.setItem("Users", JSON.stringify(users));

      // const usersFromStorage = localStorage.getItem("Users");
      // console.log(usersFromStorage);
      // console.log(users);

      // if (!usersFromStorage) {
      //   console.log(11111);
      //   localStorage.setItem("Users", JSON.stringify(users));
      // } else if (usersFromStorage) {
      //   console.log(222222);
      //   const usersFromStorageParse = JSON.parse(usersFromStorage);
      //   console.log(usersFromStorageParse.length === 0);
      //   if (usersFromStorageParse.length === 0 && users.length !== 0) {
      //     localStorage.setItem("Users", JSON.stringify(users));
      //   } else if (usersFromStorageParse.length !== 0 && users.length === 0) {
      //     console.log("without change");
      //   } else if (usersFromStorageParse.length !== 0 && users.length !== 0) {
      //     console.log(3333);
      //     localStorage.setItem("Users", JSON.stringify(users.concat(usersFromStorageParse)));
      //   }
      // }
    });
  },
  getUsers: () => {
    return wait(2000).then(() => {
      const usersFromStorage = localStorage.getItem("Users");
      console.log(usersFromStorage);
      if (usersFromStorage) {
        const usersFromStorageParse = JSON.parse(usersFromStorage);
        return usersFromStorageParse;
      }

      // console.log(users);

      // if (!usersFromStorage) {
      //   console.log(11111);
      //   localStorage.setItem("Users", JSON.stringify(users));
      // } else if (usersFromStorage) {
      //   console.log(222222);
      //   const usersFromStorageParse = JSON.parse(usersFromStorage);
      //   console.log(usersFromStorageParse.length === 0);
      //   if (usersFromStorageParse.length === 0 && users.length !== 0) {
      //     localStorage.setItem("Users", JSON.stringify(users));
      //   } else if (usersFromStorageParse.length !== 0 && users.length === 0) {
      //     console.log("without change");
      //   } else if (usersFromStorageParse.length !== 0 && users.length !== 0) {
      //     console.log(3333);
      //     localStorage.setItem("Users", JSON.stringify(users.concat(usersFromStorageParse)));
      //   }
      // }
    });
  },

  // login: (user) => {
  //   return wait(3000).then(() => {
  //     let usersArr = JSON.parse(localStorage.getItem("Users"));
  //     console.log(usersArr);

  //     if (usersArr) {
  //       let result = usersArr.find((element) => user.login === element.name && user.password === element.newPassword); // if true - element

  //       console.log(result);

  //       if (!result) {
  //         return {
  //           information: "a user doesn't exist: please sign-up",
  //           current_user: "",
  //         };
  //       } else if (result) {
  //         let currentUser = JSON.stringify(result);
  //         localStorage.setItem("Current_user", currentUser);

  //         return {
  //           information: "log-in is successed",
  //           current_user: result,
  //         };
  //       }
  //     } else {
  //       return {
  //         information: "a user doesn't exist: please sign-up",
  //         current_user: "",
  //       };
  //     }
  //   });
  // },

  // isLogin: (duration) => {
  //   return wait(duration).then(() => {
  //     let currentUser = JSON.parse(localStorage.getItem("Current_user"));
  //     console.log(currentUser);
  //     return currentUser;
  //   });
  // },

  // logout: () => {
  //   return wait(0).then(() => {
  //     localStorage.removeItem("Current_user");
  //     return "you are successfully logged out!";
  //   });
  // },
};
