import React from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/header";
import Content from "./Components/Content/content";
import Footer from "./Components/Footer/footer";
import "./App.css";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header />
            <Content />
            <Footer />
        </div>
    );
};

export default App;
