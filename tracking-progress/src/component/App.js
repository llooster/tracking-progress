import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Login from "../page/Home/Login/Login";
// import GetValue from "../page/Home/GetTheValue/GetValue";
// import EnterValue from "../page/Home/EnterTheValue/EnterValue";
import LeftBar from "../component/LeftBar";
import Attendance from "../page/Attendance";
import Main from "../page/Home/Main";

// import ClassTest from "../page/ClassTest";

class App extends Component {
    state = {
        id: 1,
        step: ["Step 1. Login", "Attendance"],
        explain: ["induk 사이트에 로그인 합니다", "수업 출석표"],
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
                    <Route exact path="/" component={Main} />
                    <Route path="/select/">
                        <Route path="/select/:name" />
                        <Attendance
                            step={step[1]}
                            explain={explain[1]}
                            moodle={moodle}
                        />
                    </Route>
                </Switch>
            </>
        );
    }
}

export default App;
