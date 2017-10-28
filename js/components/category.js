import 'core-js/es6/map';
import 'core-js/es6/set';

import React, {Component} from "react";
import ReactDOM from "react-dom";

const {connect} = require('react-redux');
const {setCategory} = require("../actions/index");

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

Enzyme.configure({adapter: new Adapter()});

export class Category extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(choice) {
        this.props.dispatch(setCategory(choice));
    }

    render(){
        return(
            <section className="category-page">
                <header>
                    <div className="col-12">
                        <h1>Category page</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col-4">
                        <a href="#" id="c-html" onClick={(e) => {this.handleClick("c-html")}}><img src="https://pluralsight.imgix.net/paths/path-icons/html5-7ac65c8ec0.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-css" onClick={(e) => {this.handleClick("c-css")}}><img src="https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-js" onClick={(e) => {this.handleClick("c-js")}}><img src="https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png"/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <a href="#" id="c-jquery" onClick={(e) => {this.handleClick("c-jquery")}}><img src="https://pluralsight.imgix.net/paths/path-icons/jquery-c93ba170c1.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-node" onClick={(e) => {this.handleClick("c-node")}}><img src="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-react" onClick={(e) => {this.handleClick("c-react")}}><img src="https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png"/></a>
                    </div>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => ({ 
    user: state.user
});

export default connect(mapStateToProps)(Category);