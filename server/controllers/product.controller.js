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
  try {
    const { name } = req.params;
    const productName = await getNameSearched(name);
    return res.status(200).send(productName);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}

export async function controllerPostCart(req, res) {
  try {
    const data = req.body;
    const productName = await postCart(data);
    return res.status(200).send(productName);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}

export async function controllerGetCart(req, res) {
  try {
    const products = await getCart();
    return res.status(200).send(products);
  } catch (error) {
    return res.status(500).send(`Error: ${error.message}`);
  }
}
