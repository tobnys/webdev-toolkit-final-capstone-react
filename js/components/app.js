import React, {Component} from "react";
import ReactDOM from "react-dom";

// COMPONENTS
import Navigation from "./navigation";
import Landing from "./landing";

export default class App extends Component {
    render(){
        return(
            <div>
                <Navigation/>
                <Landing />
            </div>
        )
    }
}
