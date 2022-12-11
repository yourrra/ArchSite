import React from "react";
import classes from "./StModal.module.scss";

const Modal = ({ active, setActive }) => {
    return (
        <div
            className={active ? classes.modalActive : classes.modal}
            onClick={() => setActive(false)}
        >
            <div
                className={classes.modalContent}
                onClick={(e) => e.stopPropagation()}
            ></div>
        </div>
    );
};

export default Modal;
