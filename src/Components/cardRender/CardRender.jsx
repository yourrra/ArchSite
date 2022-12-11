import React from "react";
import { useState } from "react";
import Modal from "../modal/Modal";
import classes from "./StCardRender.module.scss";

const CardRender = ({ preview }) => {
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={classes.render}>
            <div className={classes.test}></div>
            <img src={"s"} alt="Avatar" onClick={() => setModalActive(true)} />
            <Modal active={modalActive} setActive={setModalActive} />
        </div>
    );
};

export default CardRender;
