import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

const {connect} = require('react-redux');

export class Navigation extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const isLoggedin = this.props.isLoggedin;
        function RightNav(props) {
            if(props.isLoggedin) {
                console.log(props.isLoggedin)
                console.log("User is logged in")
                return( <ul className="right-nav">
                    <li><a href="#" id="page-dashboard">Dashboard</a></li>
                </ul>
                );
            }
            else {
                console.log("User is not logged in");
                return( <ul className="right-nav">
                    <li><a href="#" id="pageLogin" href="#">Login</a></li>
                    <li><a href="#" id="page-signup" href="#">Sign up</a></li>
                </ul>
                );
            }
        }

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
                <RightNav isLoggedin={isLoggedin} />
                </div>
            </nav>
        )
    }
}

const mapStateToProps = state => ({ 
    user: state.user,
    isLoggedin: state.isLoggedin
});

export default connect(mapStateToProps)(Navigation);