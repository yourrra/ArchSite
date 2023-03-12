import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";
import classes from "./StCardRender.module.scss";

const CardRender = ({ img, name, year, imgBig }) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div>
            <div className={classes.render}>
                <img
                    className={classes.render__img}
                    src={img}
                    alt="Avatar"
                    onClick={() => setModalActive(true)}
                />
                <Modal
                    active={modalActive}
                    setActive={setModalActive}
                    imgBig={imgBig}
                    name={name}
                    year={year}
                />
            </div>
            <div className={classes.nameProject}>
                <div className={classes.nameProject__name}>{name}</div>
                <div className={classes.nameProject__year}>{year}</div>
            </div>
        </div>
    );
};

export default CardRender;
