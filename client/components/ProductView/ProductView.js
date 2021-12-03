import React, { Fragment, useState } from "react";
import Button from "../Button/Button";
// Styles
import * as S from "./styles";

const ProductView = ({ products }) => {
  const onAddProduct = (product) => {
    console.log("Add product to cart", product);
  };

  return (
    <Fragment>
      <S.ProductList>
        {products.map((product) => (
          <li key={product.id} id={product.id}>
            <S.ProductView>
              <S.ContainerImg>
                <S.imgURL
                  src={product.image.url}
                  alt={product.image.caption}
                ></S.imgURL>
              </S.ContainerImg>
              <S.ProductName>{product.name}</S.ProductName>
              <S.ProductPrice>${product.price}</S.ProductPrice>
              <S.ContainerCenter>
                <Button type="submit" onClick={() => onAddProduct(product)}>
                  Add
                </Button>
              </S.ContainerCenter>
            </S.ProductView>
          </li>
        ))}
      </S.ProductList>
    </Fragment>
  );
};

export default ProductView;
