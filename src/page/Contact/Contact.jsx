import React from "react";
import classes from "./StContact.module.scss";
import backImg from "../../img/ContactWeb.jpg";

const Contact = () => {
    return (
        <div className={classes.wrapperContact}>
            <div className={classes.contactBlock}>
                <div>
                    <h2>E-mail</h2>
                    <div>саня@gmail.com</div>
                    <div>саня@gmail.com</div>
                </div>
                <div>
                    <h2>Phone</h2>
                    <div>+ 7 (999) 999-99-99</div>
                    <div>+ 7 (999) 999-99-99</div>
                </div>
                <div className={classes.hrefBlock}>
                    <h2>Social Network</h2>
                    <a className={classes.hrefStyle} href="https://vk.com/">
                        VK
                    </a>
                    <a
                        className={classes.hrefStyle}
                        href="https://www.instagram.com/"
                    >
                        Instagram
                    </a>
                    <a
                        className={classes.hrefStyle}
                        href="https://www.behance.net/"
                    >
                        Behance
                    </a>
                </div>
            </div>
            <div className={classes.imgBlock}>
                <img src={backImg} alt="Back" />
            </div>
        </div>
    );
};

export default Contact;
