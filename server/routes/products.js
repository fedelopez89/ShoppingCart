import express from "express";
import {
  controllerGetProducts,
  controllerGetNameSearched,
  controllerPostCart,
  controllerGetCart,
} from "../controllers/product.controller.js";

const apiRouterProd = express.Router();

apiRouterProd.get("/products", controllerGetProducts);
apiRouterProd.get("/search/:name", controllerGetNameSearched);
apiRouterProd.post("/cart", controllerPostCart);
apiRouterProd.get("/cart", controllerGetCart);

export default apiRouterProd;
