import React, { useState } from "react";
import Header from "./components/Header/Header";
import ListProducts from "./components/ListProducts/ListProducts";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
// Styles
import * as S from "./styles";

function App() {
  const [productSearched, setProductSearched] = useState("");

  const searchProduct = (enteredText) => {
    setProductSearched(enteredText);
  };

  return (
    <S.DivApp>
      <Header title={"Company.Com Challenge"} />
      <ShoppingCart />
      <S.SearchNav>
        <SearchProduct onSearchProduct={searchProduct} />
      </S.SearchNav>
      <ListProducts productSearched={productSearched}></ListProducts>
    </S.DivApp>
  );
}

export default App;
