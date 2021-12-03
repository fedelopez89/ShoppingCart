import "regenerator-runtime/runtime";

export const getNameSearched = async (name) => {
  const url = `http://localhost:3000/api/v1/search/${name}`;

  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
};
