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
