import React, {Component} from "react";
import ReactDOM from "react-dom";

class Navigation extends Component {
    render(){
        return(
            <nav className="main-nav" role="navigation">
                <div className="toggle-container">
                <div className="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>
                <div className="inline-nav-container">
                <ul className="left-nav">
                    <li><a href="#" id="page-generations">Generation</a></li>
                    <li><a href="#" id="page-categories">Cheat sheets</a></li>
                    <li><a href="#" id="page-fonts">Fonts</a></li>
                </ul>
                <ul className="center-nav">
                    <li><a href="/">Webdev Toolkit</a></li>
                </ul>
                <ul className="right-nav">
                    <li><a href="#" id="pageLogin" href="#">Login</a></li>
                    <li><a href="#" id="page-signup" href="#">Sign up</a> </li>
                </ul>
                </div>
            </nav>
        )
    }
}

module.exports = Navigation;