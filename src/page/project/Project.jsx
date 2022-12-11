import React from "react";
import classes from "./StProject.module.scss";
import "./../../Style.scss";
import CardRender from "../../components/cardRender/CardRender";
// import pic from "../../img/pr1/project1.jpg";

const Content = (props) => {
    const previewCard = [
        { id: 1, img: require("../../img/pr1/project1.jpg"), text: "dgsdmaim" },
    ];

    return (
        <div className={classes.cardRender}>
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
            <CardRender />
        </div>
    );
};

export default Content;
