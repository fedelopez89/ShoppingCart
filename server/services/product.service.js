// Constant
import { Low, JSONFile } from "lowdb";

export async function getProducts() {
  const db = new Low(new JSONFile("./db.json"));
  await db.read();
  const {products} = db.data;
  return products;
}

export async function getNameSearched(nameSearched) {
  const db = new Low(new JSONFile("./db.json"));
  const responseRead = await db.read();
  const { products } = db.data;
  return products.filter((product) => {
    return product.name.toLowerCase().includes(nameSearched.toLowerCase());
  });
}

export async function getCart(nameSearched) {
  console.log("getCart");
  const db = new Low(new JSONFile("./db.json"));
  const responseRead = await db.read();
  const { products } = db.data;
  return products.filter((product) => {
    return { product };
  });
}

export async function postCart(nameSearched) {
  console.log("postCart");
  const db = new Low(new JSONFile("./db.json"));
  const responseRead = await db.read();
  const { products } = db.data;
  return products.filter((product) => {
    return { product };
  });
}
