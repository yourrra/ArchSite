import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./Style.scss";
import AppRouter from "./components/appRouter/AppRouter";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Router>
                <Navbar />
                <AppRouter />
                <Footer />
            </Router>
        </div>
    );
};

export default App;
