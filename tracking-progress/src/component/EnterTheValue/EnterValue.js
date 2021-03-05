import React, { Component } from "react";
import "../Login/Login.css";

class EnterValue extends Component {
    render() {
        // const { id, step, explain } = this.props;
        return (
            <div className="whole">
                <div className="Tracking-Progress">
                    <div className="text">Tracking Progress</div>
                </div>
                <div className="Step">
                    <div className="explain">
                        <div>Step 3. Enter the Value</div>
                        <span>Step 2. 에서 확인한 값을 입력하세요!</span>
                    </div>
                    <div className="inputBox">
                        <div className="moodle">MoodleSesstion</div>
                        <div className="input">
                            <input
                                type="text"
                                className="inputValue"
                                placeholder="MoodleSession을 입력해주세요"
                            ></input>
                            <button>확인</button>
                        </div>
                    </div>
                    {/* <button>로그인 완료 후 클릭하세요!</button> */}
                </div>
            </div>
        );
    }
}

export default EnterValue;
