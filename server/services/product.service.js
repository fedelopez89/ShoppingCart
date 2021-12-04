// Constant
import { Low, JSONFile } from "lowdb";

export async function getProducts() {
  const db = new Low(new JSONFile("./db.json"));
  await db.read();
  const { products } = db.data;
  return products;
}

export async function getNameSearched(nameSearched) {
  const db = new Low(new JSONFile("./db.json"));
  await db.read();
  const { products } = db.data;
  return products.filter((product) => {
    return product.name.toLowerCase().includes(nameSearched.toLowerCase());
  });
}

export async function getCart(nameSearched) {
  const db = new Low(new JSONFile("./db.json"));
  await db.read();
  const { cart } = db.data;
  return cart;
}

export async function postCart(productWithQuantity) {
  const db = new Low(new JSONFile("./db.json"));
  await db.read();
  const { cart } = db.data;
  cart.push(productWithQuantity);
  return await db.write();
}
