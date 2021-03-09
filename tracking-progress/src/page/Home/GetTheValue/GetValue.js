import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

class GetValue extends Component {
    render() {
        const { step, explain, next } = this.props;
        return (
            <div id="whole">
                <div className="stance">
                    <div className="section">
                        <div className="step">{step}</div>
                        <div className="explain">{explain}</div>
                    </div>
                    <div className="value">
                        <div className="getValue">
                            <h2>
                                1.
                                <a
                                    href="https://lms.induk.ac.kr"
                                    target="_blank"
                                >
                                    lms.induk.ac.kr
                                </a>
                                에서 Option + Command + I 누릅니다.
                            </h2>
                            <h2>
                                2. 검은색 화면에서 오른쪽 상단의 Application
                                클릭
                            </h2>
                            <h2>
                                3. 검은색 화면에서 왼쪽의 Storage - Coolies 확장
                                클릭
                            </h2>
                            <h2>
                                4. <a>http://lms.induk.ac.kr</a> 클릭
                            </h2>
                            <h2>
                                5. MoodleSession 값을 다음 페이지의 input 창에
                                입력
                            </h2>
                        </div>
                    </div>
                    <div className="shift">
                        <button>
                            <Link to="/">{next[1]}</Link>
                        </button>
                        <button>
                            <Link to="/enterValue">{next[0]}</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetValue;
