import React from "react";
import { Link } from "react-router-dom";
import classes from "./StMenu.module.scss";

const Menu = ({ items, active, setActive }) => {
    return (
        <div className={active ? classes.menuActive : classes.menu}>
            <div className={classes.menuContent}>
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
        </div>
    );
};

export default Menu;
