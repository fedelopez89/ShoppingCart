import React from "react";
// Styles
import * as S from "./styles";

const Header = ({ title, image }) => {
  return (
    <S.Header>
      <img src={image.link} alt={image.reference}></img>
      {title}
    </S.Header>
  );
};

export default Header;
