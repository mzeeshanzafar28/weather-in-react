import React, { Component } from "react";

export default class NavBar extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <img className="bar-logo" src={require("./assets/logo.png")} />
                    <a className="navbar-brand" href="#">Weather by Zeeshan</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/mzeeshanzafar28" target="_blank">Github</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://linkedin.com/in/m-zeeshan-zafar-9205a1248" target="_blank">Linkedin</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://instagram.com/mzeeshanzafar28" target="_blank">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}