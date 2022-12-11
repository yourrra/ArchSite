import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import classes from "./StNav.module.scss";

const Navbar = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const [btnActive, setBtnActive] = useState(false);

    const items = [
        { value: "Project", link: "/project" },
        { value: "About me", link: "/about" },
        { value: "Contact", link: "/contact" },
    ];

    return (
        <header className={classes.header}>
            <div className={classes.burger}>
                <div
                    className={btnActive ? classes.btnSActive : classes.btnSt}
                    onClick={() => setBtnActive(!btnActive)}
                >
                    <div
                        className={classes.burBtn}
                        onClick={() => setMenuActive(!menuActive)}
                    >
                        <span />
                    </div>
                </div>
                <Menu
                    active={menuActive}
                    setActive={setMenuActive}
                    items={items}
                />
            </div>
            <Link to="/project" className={classes.name}>
                Alexander Moskovchenko
            </Link>
            <div className={classes.en}>EN</div>
        </header>
    );
};

export default Navbar;
