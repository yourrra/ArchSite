import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./Components/appRouter/AppRouter.jsx";
import Navbar from "./Components/navbar/Navbar.jsx";
import Footer from "./Components/Footer/footer.jsx";
import "./Style.scss";

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
