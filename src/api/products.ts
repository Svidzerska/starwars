export const products = {
  getPeople: () => {
    return try_catch("https://swapi.dev/api/people");
  },
  getStarShips: () => {
    return try_catch("https://swapi.dev/api/starships");
  },
};

async function try_catch(url: string) {
  try {
    const result = await fetch(url);
    const json = await result.json();
    return json;
  } catch (err) {
    console.log(err);
    return err;
  }
}
