import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 85%;
  margin: 1rem auto;
  padding: 1rem 2rem;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const FormSearch = styled.form`
  display: flex;
  margin: 0.5rem 0;
  & input {
    width: 30rem;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.2);
    border: 1px solid #ccc;
    background-color: transparent;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.5rem;
    margin-right: 1rem;
  }
  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
    background: white;
    border-color: grey;
  }
`;

export const ShoppingCart = styled.div`
  padding-top: 0.65rem;
  cursor: pointer;
`;

export const QuantityItems = styled.span`
  border-radius: 50%;
  padding: 0rem 0.25rem;
  border: 2.5px solid red;
  top: -1.75rem;
  position: relative;
  right: -2.5rem;
  font-size: 1rem;
  color: red;
`;
