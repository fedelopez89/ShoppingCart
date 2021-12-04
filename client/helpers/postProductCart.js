import "regenerator-runtime/runtime";

export const postProductCart = async (productWithQuantity) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productWithQuantity),
    redirect: "follow",
  };

  fetch(`http://localhost:3000/api/v1/cart`, requestOptions)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
};
