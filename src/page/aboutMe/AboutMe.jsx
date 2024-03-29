import React from "react";
import classes from "./StAbout.module.scss";
import backAboutImg from "../../img/AboutWeb.jpg";
import AvatarImg from "../../img/avatar/AvatarImg.jpg";

const AboutMe = () => {
    return (
        <div className={classes.wrapperAbout}>
            <div className={classes.infoBlock}>
                <div className={classes.avatarBlock}>
                    <img src={AvatarImg} alt="Avatar" />
                </div>
                <div className={classes.aboutBlock_wrapper}>
                    <div className={classes.aboutBlock}>
                        <h2>About me</h2>
                        <p>
                            Я Саня и я типа визуализатор. Делаю пездатые
                            картинки и вообще я крутой, поэтому я нужен вам а вы
                            мне
                        </p>
                    </div>
                    <div className={classes.edBlock}>
                        <h2>Education</h2>
                        <p>Я учился в универе и жил в общаге с тараканами</p>
                    </div>
                    <div className={classes.exBlock}>
                        <h2>Experience</h2>
                        <p>Я опытный альфа самец</p>
                    </div>
                </div>
            </div>
            <div className={classes.imgBlock}>
                {/* <img src={backAboutImg} alt="Back" /> */}
            </div>
        </div>
    );
};

export default AboutMe;
