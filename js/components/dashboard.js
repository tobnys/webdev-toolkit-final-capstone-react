import React, {Component} from "react";
import ReactDOM from "react-dom";

class Dashboard extends Component {
    render(){
        return(
            <section className="dashboard-page">
                <header>
                <div className="col-12">
                    <h1>Dashboard</h1>
                </div>
                </header>
                <div className="row">
                    <div className="col-12">
                        <div className="statistics-container">
                            <h2>Application Statistics</h2>
                            <p className="center">Welcome USER to the dashboard, in here you can find statistics about the application!</p>
                            <div className="row">
                                <div className="col-4">
                                        <h4>Total amount of successful logins...</h4>
                                        <div className="sub-statistics-container">
                                            <h3 id="num-logins">0</h3>
                                        </div>
                                </div>
                                <div className="col-4">
                                        <h4>Total amount of strings generated...</h4>
                                        <div className="sub-statistics-container">
                                            <h3 id="num-strings">0</h3>
                                        </div>
                                </div>
                                <div className="col-4">
                                        <h4>Total amount of fonts generated...</h4>
                                        <div className="sub-statistics-container">
                                            <h3 id="num-fonts">0</h3>
                                        </div>
                                </div>
                            </div>
                            <div className="row row-padding">
                                <div className="col-4 padded">
                                        <div className="redirect-statistics-container" id="redirect-text">
                                            <h3>Text Generation</h3>
                                        </div>
                                </div>
                                <div className="col-4 padded">
                                        <div className="redirect-statistics-container" id="redirect-cheat">
                                            <h3>Cheat Sheets</h3>
                                        </div>
                                </div>
                                <div className="col-4 padded">
                                        <div className="redirect-statistics-container" id="redirect-font">
                                            <h3>Fonts</h3>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

module.exports = Dashboard;