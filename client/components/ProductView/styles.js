import styled from "styled-components";

export const ProductList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  list-style: none;
  padding-left: 0;
`;

export const ProductView = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  height: 15rem;
  margin-right: 1.5rem;
  margin-bottom: 2rem;
  padding: 1.5rem 1rem 0.5rem 1rem;
  width: 13rem;
`;

export const ProductName = styled.p`
  font-weight: bold;
  font-size: 0.9rem;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ProductPrice = styled.p`
  font-size: 0.9rem;
  margin: 0;
  white-space: nowrap;
  color: grey;
  font-weight: 500;
`;

export const imgURL = styled.img`
  height: 50%;
  cursor: pointer;
  width: 50%;
  &:hover {
    transform: scale(1.375);
  }
`;

export const ProductData = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 1rem;
`;

export const ContainerCenter = styled.div`
  display: flex;
  justify-content: center;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60%;
`;
