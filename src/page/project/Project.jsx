import React from "react";
import classes from "./StProject.module.scss";
import "./../../Style.scss";
import CardRender from "../../components/cardRender/CardRender";
// import pic from "../../img/pr1/project1.jpg";

const Content = (props) => {
    const previewCard = [
        {
            id: 1,
            img: require("../../img/pr1/project1.jpg"),
            name: "Project One",
            year: 2018,
            imgBig: require("../../img/big/project1.jpg"),
        },
        {
            id: 2,
            img: require("../../img/pr1/project2.jpg"),
            name: "Project Two",
            year: 2021,
            imgBig: require("../../img/big/project2.jpg"),
        },
        {
            id: 3,
            img: require("../../img/pr1/project3.jpg"),
            name: "Project Three",
            year: 2020,
            imgBig: require("../../img/big/project3.jpg"),
        },
        {
            id: 4,
            img: require("../../img/pr1/project4.jpg"),
            name: "Project Four",
            year: 2022,
            imgBig: require("../../img/big/project4.jpg"),
        },
    ];

    return (
        <div className={classes.cardRender}>
            {previewCard.map((card) => (
                <CardRender
                    key={card.id}
                    img={card.img}
                    name={card.name}
                    year={card.year}
                    imgBig={card.imgBig}
                />
            ))}
        </div>
    );
};

export default Content;
