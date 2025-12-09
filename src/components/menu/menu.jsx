import React from "react";  
import './menu.css';
import { Link } from "react-router-dom";



export default class Menu extends React.Component {  
    render() {
        return (
            <nav className="navbar navbar-expand-lg p-0 m-0">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo01"
                    aria-controls="navbarTogglerDemo01"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                        <Link to="/">Home</Link>
                        <Link to="/favourities">Favourities</Link>
                </div>
            </nav>

        );
    }
}
