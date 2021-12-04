import React, { useState, useContext } from "react";
import { postProductCart } from "../../helpers/postProductCart";
import {
  CartDispatchContext,
  addToCart,
} from "../../contexts/CartProvider/CartProvider";
import Button from "../Button/Button";
// Styles
import * as S from "./styles";

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useContext(CartDispatchContext);

  const onAddProduct = () => {
    const productWithQuantity = { ...product, quantity: 1 };
    addToCart(dispatch, productWithQuantity);
    postProductCart(productWithQuantity).then(() => {
      console.log("postProductCart OK ", productWithQuantity);
    });
    // FGL
    setIsAdded(true);
    setTimeout(() => {
      setIsAdded(false);
    }, 2500);
  };

  return (
    <S.ProductCard>
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
          {!isAdded ? "ADD TO CART" : "✔ ADDED"}
        </Button>
      </S.ContainerCenter>
    </S.ProductCard>
  );
};

export default ProductCard;
