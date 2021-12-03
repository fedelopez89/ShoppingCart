import React, { useState } from "react";
import Button from "../Button/Button";
// Styles
import * as S from "./styles";

const SearchProduct = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const productInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onSearchProduct(enteredValue);
    setEnteredValue("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <S.SearchNav>
        <label>Search for products</label>
        <input
          type="text"
          value={enteredValue}
          onChange={productInputChangeHandler}
        />
      </S.SearchNav>
      <Button type="submit">Search</Button>
    </form>
  );
};

export default SearchProduct;
