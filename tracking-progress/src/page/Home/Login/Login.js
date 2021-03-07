import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    render() {
        var { id, explain, next, step } = this.props;
        return (
            <div className="whole">
                <div className="Tracking-Progress">
                    <div className="text">Tracking Progress</div>
                </div>
                <div className="Step">
                    <div className="explain">
                        <div>{step}</div>
                        <span>{explain}</span>
                    </div>
                    <button
                        onClick={function (e) {
                            window.open("http://lms.induk.ac.kr");
                        }}
                    >
                        OPEN lms.induk.ac.kr
                    </button>
                    <button className="button">{next}</button>
                </div>
            </div>
        );
    }
}

export default Login;
