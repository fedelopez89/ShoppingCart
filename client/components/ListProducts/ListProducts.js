import React, { useState, useEffect } from "react";
import { getProducts } from "../../helpers/getProducts";
import { getNameSearched } from "../../helpers/getNameSearched";
import ProductView from "../ProductView/ProductView";
// Styles
import * as S from "./styles";

const ListProducts = ({productSearched}) => {
  const [listProduct, setListProduct] = useState([]);

  useEffect(() => {
    if (productSearched.length>0) {
      getNameSearched(productSearched).then((products) => {
        setListProduct(products);
      });
    } else {
      console.log("ListProducts - producto a buscar: ", productSearched);
      getProducts().then((products) => {
        setListProduct(products);
      });
    }
  }, [productSearched]);

  let content = <p>No products found.</p>;

  if (listProduct !== undefined) {
    if (listProduct.length > 0) {
      console.log(listProduct);
      content = <ProductView products={listProduct} />;
    }
  }

  return <S.ListViewStyle>{content}</S.ListViewStyle>;
};

export default ListProducts;
