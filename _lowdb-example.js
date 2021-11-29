import { Low, JSONFile } from "lowdb";

const db = new Low(new JSONFile("./_lowdb-example.json"));

await db.read();

console.log("lowdb read example: ", db.data);

const { products } = db.data;

products.push({
  name: "product n",
  description: "this is a test product",
});

await db.write();

console.log("lowdb write example: ", db.data);
