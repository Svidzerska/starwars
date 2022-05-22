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
};

const try_catch = async (url: string) => {
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (err) {
    console.log(err);
    return false;
  }
};
