import React from "react";
import classes from "./StModal.module.scss";

const Modal = ({ active, setActive, imgBig, name, year }) => {
    return (
        <div
            className={
                active && window.innerWidth > 600
                    ? classes.modalActive
                    : classes.modal
            }
            onClick={() => setActive(false)}
        >
            <img
                src={imgBig}
                alt="Avatar"
                className={classes.modalContent}
                onClick={(e) => e.stopPropagation()}
            />
            <div className={classes.projectInfo}>
                <div className={classes.projectInfo__name}>{name}</div>
                <div className={classes.projectInfo__year}>{year}</div>
            </div>
        </div>
    );
};

export default Modal;
