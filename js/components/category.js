import React, {Component} from "react";
import ReactDOM from "react-dom";

class Category extends Component {
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
                        <a href="#" id="c-html"><img src="https://pluralsight.imgix.net/paths/path-icons/html5-7ac65c8ec0.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-css"><img src="https://pluralsight.imgix.net/paths/path-icons/css-c9b214f0d7.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-js"><img src="https://pluralsight.imgix.net/paths/path-icons/javascript-36f5949a45.png"/></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <a href="#" id="c-jquery"><img src="https://pluralsight.imgix.net/paths/path-icons/jquery-c93ba170c1.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-node"><img src="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png"/></a>
                    </div>
                    <div className="col-4">
                        <a href="#" id="c-react"><img src="https://pluralsight2.imgix.net/paths/images/react-0f6558f88f.png"/></a>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Category;