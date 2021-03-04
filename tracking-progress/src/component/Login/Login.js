import React, { Component } from "react";
import "./Login.css";

class Login extends Component {
    render() {
        // const { id, step, explain } = this.props;
        return (
            <div className="whole">
                <div className="Tracking-Progress">
                    <div className="text">Tracking Progress</div>
                </div>
                <div className="Step1">
                    <div className="explain">
                        <div>Step 1. Login</div>
                        <span>smartclass에서 로그인 합니다.</span>
                    </div>
                    <button
                        onClick={function (e) {
                            window.open("http://lms.induk.ac.kr");
                        }}
                    >
                        OPEN lms.induk.ac.kr
                    </button>
                    <button>로그인 완료 후 클릭하세요!</button>
                </div>
            </div>
        );
    }
}

export default Login;
