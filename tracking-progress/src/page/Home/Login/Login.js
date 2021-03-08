import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import LeftBar from "../../../component/LeftBar";

class Login extends Component {
    render() {
        const { explain, next, step } = this.props;
        return (
            <div id="whole">
                {/* <LeftBar /> */}
                <div>
                    <div className="section">
                        <div className="step">{step}</div>
                        <div className="explain">{explain}</div>
                    </div>
                    <div className="contents">
                        <a href="http://lms.induk.ac.kr" target="_blank">
                            OPEN lms.induk.ac.kr
                        </a>
                    </div>
                    <div className="shift">
                        <button>
                            <Link to="/getValue">{next}</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
