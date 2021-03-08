import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import LeftBar from "../../../component/LeftBar";

class GetValue extends Component {
    render() {
        const { step, explain, next } = this.props;
        return (
            <div className="whole">
                <LeftBar />
                <div className="Step">
                    <div className="explain">
                        <div>{step}</div>
                        <span>{explain}</span>
                    </div>
                    <div className="contents">
                        <h2>
                            1. lms.induk.ac.kr에서 Option + Command + I
                            누릅니다.
                        </h2>
                        <h2>
                            2. 검은색 화면에서 오른쪽 상단의 Application 클릭
                        </h2>
                        <h2>
                            3. 검은색 화면에서 왼쪽의 Storage - Coolies 확장
                            클릭
                        </h2>
                        <h2>
                            4. <a>http://lms.induk.ac.kr</a> 클릭
                        </h2>
                        <h2>
                            5. MoodleSession 값을 다음 페이지의 input 창에 입력
                        </h2>
                    </div>
                    <button>
                        <Link to="/enterValue">{next}</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default GetValue;
