import React from "react";
import { Link } from "react-router-dom";
import classes from "./StFooter.module.scss";

const Footer = (props) => {
    return (
        <div className={classes.footer}>
            <div className={classes.linkslist}>
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
            <div className={classes.infolist}>
                <div className={classes.emailStyle}>саня@gmail.com</div>
                <div className={classes.phonelStyle}>+ 7 (999) 999-99-99</div>
            </div>
            <div className={classes.devList}>
                <div className={classes.devWord}>Developed</div>
                <div className={classes.devName}>Yourrra</div>
            </div>
        </div>
    );
};

export default Footer;
