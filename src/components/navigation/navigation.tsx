import React from "react";
import { Link } from "react-router-dom";
import './navigation.css';
import Logo_home from '../../assets/home.svg';
import Logo_heart from '../../assets/heart.svg';


export default class Navigation extends React.Component {
  render() {
    return (
      <nav>
        <ul className="navigation_items">
          <li className="navigation__item">
            <Link to="/" className="navigation__link">
              <img src={Logo_home} width={30} alt="logo domek" />
              <span>Home</span>
            </Link>
          </li>
          <li className="navigation__item">
            <Link to="/favourites" className="navigation__link">
              <img src={Logo_heart} width={30} alt="logo serce" />
              <span>Favourites</span>
            </Link>
          </li>
</ul>

      </nav>
    );
    }
}