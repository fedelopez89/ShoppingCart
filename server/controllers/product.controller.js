import {
  getProducts,
  getNameSearched,
  postCart,
  getCart,
} from "../services/product.service.js";

export async function controllerGetProducts(req, res) {
  try {
    const products = await getProducts();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}

export async function controllerGetNameSearched(req, res) {
  console.log("controllerGetNameSearched");
  try {
    const { name } = req.params;
    const productName = await getNameSearched(name);
    return res.status(200).send(productName);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}

export async function controllerPostCart(req, res) {
  console.log("controllerPostCart");
  try {
    const { id } = req.params;
    const productName = await postCart(id);
    console.log(id);

    return res.status(200).send(kid);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}

export async function controllerGetCart(req, res) {
  console.log("controllerPostCart");
  try {
    const productName = await getCart();
    return res.status(200).send(productName);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}
