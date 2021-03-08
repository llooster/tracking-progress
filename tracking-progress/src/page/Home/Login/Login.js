import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import LeftBar from "../../../component/LeftBar";

class Login extends Component {
    render() {
        const { explain, next, step } = this.props;
        return (
            <div className="whole">
                <LeftBar />
                <div className="Step">
                    <div className="explain">
                        <div>{step}</div>
                        <span>{explain}</span>
                    </div>
                    {/* TODO: a 태그로 변경 작업 */}
                    <a
                        className="schSite"
                        href="http://lms.induk.ac.kr"
                        target="_blank"
                    >
                        OPEN lms.induk.ac.kr
                    </a>
                    <button className="button">
                        <Link to="/getValue">{next}</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Login;
