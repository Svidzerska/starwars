import { wait } from "../utilities/wait";

export const products = {
  getPeople: () => {
    return try_catch("https://swapi.dev/api/people");
  },
  getStarships: () => {
    return try_catch("https://swapi.dev/api/starships");
  },
  getEntity: (url: string) => {
    return try_catch(url);
  },
  setView: (isBlockView: boolean) => {
    return wait(2000).then(() => {
      localStorage.setItem("View", JSON.stringify(isBlockView));
    });
  },
  getView: () => {
    return wait(2000).then(() => {
      const viewFromStorage = localStorage.getItem("View");
      if (viewFromStorage) {
        const viewFromStorageParse = JSON.parse(viewFromStorage);
        return viewFromStorageParse;
      }
    });
  },
};

const try_catch = async (url: string) => {
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (err) {
    console.log(err);
    return err;
  }
};
