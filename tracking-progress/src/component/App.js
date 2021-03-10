import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../page/Home/Login/Login";
import GetValue from "../page/Home/GetTheValue/GetValue";
import EnterValue from "../page/Home/EnterTheValue/EnterValue";
import LeftBar from "../component/LeftBar";
import Attendance from "../page/Attendance";

class App extends Component {
    state = {
        id: 1,
        step: [
            "Step 1. Login",
            "Step 2. Get the Value",
            "Step 3. Enter the Value",
            "Attendace rate",
        ],
        explain: [
            "induk 사이트에 로그인 합니다",
            "크롤링을 위한 값을 가져옵니다. 아래는 Mac / Chrome 기준입니다.",
            "Step 2. 에서 확인한 값을 입력하세요!",
            "각 수업 출석표",
        ],
        next: ["next", "back"],
        moodle: "",
    };

    inputValue = (e) => {
        this.setState({
            moodle: e.target.value,
        });
    };
    value = () => {
        var { moodle } = this.state;
        console.log(moodle);
    };
    enterKey = (e) => {
        if (e.key === "Enter") {
            this.value();
            // (엔터키 활성화)
        }
    };
    render() {
        const { inputValue, value, enterKey } = this;
        const { id, step, explain, next, moodle } = this.state;
        return (
            <>
                <LeftBar />
                <Switch>
                    {/* <Route exact path="/">
                        <Login
                            step={step[0]}
                            explain={explain[0]}
                            next={next[0]}
                        />
                    </Route>
                    <Route path="/getValue">
                        <GetValue
                            step={step[1]}
                            explain={explain[1]}
                            next={next}
                        />
                    </Route>
                    <Route path="/enterValue">
                        <EnterValue
                            step={step[2]}
                            explain={explain[2]}
                            inputValue={inputValue}
                            value={value}
                            enterKey={enterKey}
                            next={next}
                        />
                    </Route>
                        */}
                    <Route path="/select">
                        <Route path="/select/:name" />
                        <Attendance
                            step={step[3]}
                            explain={explain[3]}
                            moodle={moodle}
                        />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default App;
