import React, { Component } from "react";
import Login from "./Login/Login";
// import GetValue from "./GetTheValue/GetValue";
// import EnterValue from "./EnterTheValue";

class App extends Component {
    state = {
        id: 1,
        step: "Step 1. Login",
        explain: "induk 사이트에 로그인 합니다",
    };
    render() {
        console.log(this.state["step"]);
        return (
            <Login />
            // <GetValue />
            // <EnterValue />
        );
    }
}

export default App;
