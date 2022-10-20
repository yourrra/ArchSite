import React from "react";
import classes from "./header.module.css";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.burger}>
                <div className={classes.project}>Project</div>
                <div className={classes.aboutMe}>About me</div>
                <div className={classes.contact}>Contact</div>
            </div>
            <div className={classes.name}>Alexander Moskovchenko</div>
            <div className={classes.en}>EN</div>
        </header>
    );
};

export default Header;
