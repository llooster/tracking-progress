import React, { Component } from "react";
import "../Login/Login.css";

class GetValue extends Component {
    render() {
        var { step, explain, next } = this.props;
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
                    {/* <button
                        onClick={function (e) {
                            window.open("http://lms.induk.ac.kr");
                        }}
                    >
                        OPEN lms.induk.ac.kr
                    </button> */}
                    <button>{next}</button>
                </div>
            </div>
        );
    }
}

export default GetValue;
