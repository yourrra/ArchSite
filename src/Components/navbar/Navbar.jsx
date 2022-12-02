import React from "react";
import { Link } from "react-router-dom";
import classes from "./StNav.module.scss";

const Navbar = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.burger}>
                <Link className={classes.project} to="/project">
                    Project
                </Link>
                <Link className={classes.aboutMe} to="/about">
                    About me
                </Link>
                <Link className={classes.contact} to="/contact">
                    Contact
                </Link>
            </div>
            <Link to="/project" className={classes.name}>
                Alexander Moskovchenko
            </Link>
            <div className={classes.en}>EN</div>
        </header>
    );
};

export default Navbar;
