import "regenerator-runtime/runtime";

export const getProducts = async () => {
  const url = `http://localhost:3000/api/v1/products`;

  try {
    const resp = await fetch(url);
    return await resp.json();
  } catch (error) {
    console.error(error);
  }
};
