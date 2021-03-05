import React, { Component } from "react";
// import Login from "../page/Home/Login/Login";
// import GetValue from "../page/Home/GetTheValue/GetValue";
import EnterValue from "../page/Home/EnterTheValue/EnterValue";

class App extends Component {
    state = {
        // id: 1,
        step: [
            "Step 1. Login",
            "Step 2. Get the Value",
            "Step 3. Enter the Value",
        ],
        explain: [
            "induk 사이트에 로그인 합니다",
            "크롤링을 위한 값을 가져옵니다. 아래는 Mac / Chrome 기준입니다.",
            "Step 2. 에서 확인한 값을 입력하세요!",
        ],
        next: ["로그인 완료 후 클릭하세요!", "위 과정 완료 후 클릭!"],
        moodle: "",
    };
    // test = () => {
    //   var {value} = this.state;

    // }
    inputValue = () => {
        const { moodle } = this.state;
        return console.log(document.getElementById("inputValue").value);
    };
    render() {
        // console.log("moodle :>> ", moodle);
        var { inputValue } = this;
        var { id, step, explain, moodle } = this.state;
        return (
            // <Login
            //     step={this.state.step[0]}
            //     explain={this.state.explain[0]}
            //     next={this.state.next[0]}
            // />
            // <GetValue
            //     step={this.state.step[1]}
            //     explain={this.state.explain[1]}
            //     next={this.state.next[1]}
            // />
            <EnterValue
                step={this.state.step[2]}
                explain={this.state.explain[2]}
                value={inputValue}
            />
        );
    }
}

export default App;
