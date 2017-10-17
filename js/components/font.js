import React, {Component} from "react";
import ReactDOM from "react-dom";

class Font extends Component {
    render(){
        return(
            <section className="font-page">
                <header>
                    <div className="col-12">
                        <h1>Font page</h1>
                    </div>
                </header>
                <div className="row">
                    <div className="col-12">
                        <div className="sort-container">
                            <button id="alpha">Alpha</button>
                            <button id="date">Date</button>
                            <button id="popularity">Popularity</button>
                            <button id="trending">Trending</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <a href="asd" id="card-1" target="_blank">
                            <div className="font-card card-1">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="asd" id="card-2" target="_blank">
                            <div className="font-card card-2">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="asd" id="card-3" target="_blank">
                            <div className="font-card card-3">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-4">
                        <a href="asd" id="card-4" target="_blank">
                            <div className="font-card card-4">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="asd" id="card-5" target="_blank">
                            <div className="font-card card-5">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                    <div className="col-4">
                        <a href="asd" id="card-6" target="_blank">
                            <div className="font-card card-6">
                                <h2>Header</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam condimentum tristique tellus et iaculis. Curabitur quis erat at orci facilisis molestie. Vestibulum porta rutrum nisi ac pharetra.</p>
                            </div>
                        </a>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Font;