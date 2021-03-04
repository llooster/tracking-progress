import React, { Component } from "react";
import Login from "./Login/Login";
// import GetValue from "./GetTheValue/GetValue";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: {
                id: 1,
            },
        };
    }
    render() {
        return <Login />;
    }
}

export default App;
