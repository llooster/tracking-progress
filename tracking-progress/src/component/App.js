import React, { Component } from "react";
import Login from "./Login/Login";
// import GetValue from "./GetTheValue/GetValue";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1,
            step: "Step 1. Login",
            explain: "induk 사이트에 로그인 합니다",
        };
    }
    render() {
        // console.log(this.state.page[0]["step"]);
        return <Login />;
    }
}

export default App;
