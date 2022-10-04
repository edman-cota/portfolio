import React from "react";
import { Container } from "reactstrap";
import classes from "./header.module.css";

const Header = () => {
  return (
    <header className={`${classes.header}`}>
      <Container>
        <div className={`${classes.nav__wrapper}`}></div>
      </Container>
    </header>
  );
};

export default Header;
