import React from "react";
import './header.css';
import { Link } from "react-router-dom";
import Logo from '../../assets/01_sunny_color.svg';
import "bootstrap/dist/js/bootstrap.bundle";
import ToggleButtonGroupControlled from "../optionButtons/optionButtons"


export default class Header extends React.Component {
  render() {
    return (
        <div className="header_div">
            <div className="container-lg header">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} width={70}  alt="logo" />
                        <h1>WeatherApp</h1>
                    </Link>
                </div>
                <ToggleButtonGroupControlled/>

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
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="header_link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="header_link" to="/favourites">Favourities</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
    }
}