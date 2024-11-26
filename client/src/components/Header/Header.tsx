import React from "react";
import css from "./Header.module.css";

const Header: React.FC = () => {
    return (
        <div className={css.header}>
            <img className={css.logo} src="/images/logo.jpg" alt="popcorn-flix" />
            <h2 className={css.appSubtitle}>lets pop and flix this! Find your next movie here.</h2>
        </div>
    );
};

export default Header;
