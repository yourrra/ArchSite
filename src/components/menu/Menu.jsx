import React, { useState } from "react";
import { Link } from "react-router-dom";
import classes from "./StMenu.module.scss";

const Menu = ({ active }) => {
    const [projectActive, setProjectActive] = useState(true);

    return (
        <div className={active ? classes.menuActive : classes.menu}>
            <div className={classes.menuContent}>
                <Link
                    className={
                        projectActive ? classes.projectActive : classes.project
                    }
                    to="/project"
                >
                    Project
                </Link>
                <Link
                    className={classes.aboutMe}
                    onClick={() =>
                        setProjectActive(
                            projectActive ? !projectActive : projectActive
                        )
                    }
                    to="/about"
                >
                    About me
                </Link>
                <Link
                    className={classes.contact}
                    onClick={() =>
                        setProjectActive(
                            projectActive ? !projectActive : projectActive
                        )
                    }
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
        </div>
    );
};

export default Menu;
