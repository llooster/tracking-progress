import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";
import LeftBar from "../../../component/LeftBar";

class EnterValue extends Component {
    render() {
        const { step, explain, inputValue, value, enterKey } = this.props;
        return (
            <div className="whole">
                <LeftBar />
                <div className="Step">
                    <div className="explain">
                        <div>{step}</div>
                        <span>{explain}</span>
                    </div>
                    <div className="inputBox">
                        <div className="moodle">MoodleSesstion</div>
                        <div className="input">
                            <input
                                type="text"
                                id="inputValue"
                                placeholder="MoodleSession을 입력해주세요"
                                onChange={inputValue}
                                onKeyPress={enterKey}
                            />
                            <button
                                className="okKey"
                                onClick={(e) => {
                                    value();
                                }}
                            >
                                확인
                            </button>
                            <div className="location">
                                <button className="backKey">
                                    <Link to="/getValue">이전</Link>
                                </button>
                                <button className="homeKey">
                                    <Link to="/">홈으로</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnterValue;
