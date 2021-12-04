import React, { useState, useEffect } from "react";
import { getProducts } from "../../helpers/getProducts";
import { getNameSearched } from "../../helpers/getNameSearched";
import ProductCard from "../ProductCard/ProductCard";
// Styles
import * as S from "./styles";

const ListProducts = ({ productSearched }) => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    if (productSearched.length > 0) {
      getNameSearched(productSearched).then((products) => {
        setListProduct(products);
      });
    } else {
      getProducts().then((products) => {
        setListProduct(products);
      });
    }
  }, [productSearched]);

  let content = <p>No products found.</p>;

  if (listProduct !== undefined) {
    if (listProduct.length > 0) {
      content = listProduct.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      });
    }
  }

  return <S.ProductList>{content}</S.ProductList>;
};

export default ListProducts;
