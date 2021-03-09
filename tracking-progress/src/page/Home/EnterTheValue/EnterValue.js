import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

class EnterValue extends Component {
    render() {
        const { step, explain, inputValue, value, enterKey, next } = this.props;
        return (
            <div id="whole">
                <div className="stance">
                    <div className="section">
                        <div className="step">{step}</div>
                        <div className="explain">{explain}</div>
                    </div>
                    <div className="contents">
                        <div className="getValue">
                            <div className="moodleText">MoodleSesstion</div>
                            <div className="inputValue">
                                <input
                                    className="inputMoodle"
                                    type="text"
                                    placeholder="MoodleSession을 입력해주세요"
                                    onChange={inputValue}
                                    onKeyPress={enterKey}
                                />
                                <button
                                    onClick={(e) => {
                                        value();
                                    }}
                                >
                                    확인
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="shift">
                        <button>
                            <Link to="/getValue">{next[1]}</Link>
                        </button>
                        <button>
                            <Link to="/select">{next[0]}</Link>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default EnterValue;
