import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Menu from "../menu/Menu";
import classes from "./StNav.module.scss";
import burger from "../../img/button/burgerButton.jpg";

const Navbar = (props) => {
    const [menuActive, setMenuActive] = useState(false);
    const [btnActive, setBtnActive] = useState(false);

    return (
        <header className={classes.header}>
            <div className={classes.burger}>
                <div
                    className={btnActive ? classes.btnSActive : classes.btnSt}
                    onClick={() => setBtnActive(!btnActive)}
                >
                    <img
                        src={burger}
                        alt="burger"
                        className={classes.burBtn}
                        onClick={() => setMenuActive(!menuActive)}
                    />
                </div>

                <Menu active={menuActive} setActive={setMenuActive} />
            </div>
            <Link to="/project" className={classes.name}>
                Alexander Moskovchenko
            </Link>
            <div className={classes.en}>EN</div>
        </header>
    );
};

export default Navbar;
