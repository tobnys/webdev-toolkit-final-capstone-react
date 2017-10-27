import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import Navigation from './navigation';
import Landing from "./landing";
import Login from "./login";
import Register from "./register";
import Generation from "./generation";
import Category from "./category";
import CategorySub from "./categorysub";
import Font from "./font";
import Dashboard from "./dashboard";
import Footer from "./footer";

// TESTING
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

export default class App extends Component {
    render(){
        return(
            <div>
                <Navigation />
                <Landing />
                <Login />
                <Register />
                <Generation />
                <Category />
                <CategorySub />
                <Font />
                <Dashboard />
                <Footer />
            </div>
        )
    }
}
