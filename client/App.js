import React, { useState } from "react";
import Header from "./components/Header/Header";
import ListProducts from "./components/ListProducts/ListProducts";
import SearchProduct from "./components/SearchProduct/SearchProduct";
import CartProvider from "./contexts/CartProvider/CartProvider";

// Styles
import * as S from "./styles";

function App() {
  const [productSearched, setProductSearched] = useState("");

  const searchProduct = (enteredText) => {
    setProductSearched(enteredText);
  };

  const image = {
    link: "https://assets-dev.company-corp.com/dashboard_nextgen/company/images/logo.svg",
    reference: "Icon-Company.com",
  };

  return (
    <S.DivApp>
      <CartProvider>
        <Header title={"Fullstack Software Challenge"} image={image} />
        <SearchProduct onSearchProduct={searchProduct} />
        <ListProducts productSearched={productSearched}></ListProducts>
      </CartProvider>
    </S.DivApp>
  );
}

export default App;
