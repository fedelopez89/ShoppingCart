export const postProductCart = async (id) => {
  const urlencoded = new URLSearchParams();

  const requestOptions = {
    method: "PUT",
    body: urlencoded,
    redirect: "follow",
  };

  fetch(`http://localhost:3000/api/v1/cart/${id}`, requestOptions)
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
};
