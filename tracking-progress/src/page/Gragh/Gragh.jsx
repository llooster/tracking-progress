import React, { PureComponent } from "react";
import "./Gragh.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Table from "../../component/table/Table.json";

class Gragh extends PureComponent {
    state = {
        level: [],
    };
    // getLevel = () => {
    //     this.setState({
    //         level: Table.map((item, index) => {
    //             // return item;
    //         }),
    //     });
    // };
    render() {
        // let newTable = Table.map((item, index) => {
        //     item.a
        // });
        // this.getLevel();
        let { level } = this.state;

        console.log(level);
        return (
            <div className="graghWhole">
                <div className="gragh">
                    <div id="absence">1</div>
                    <div id="late">2</div>
                    <div id="attendance">3</div>
                    <div>4</div>
                    <div>5</div>
                    <div>6</div>
                    <div>7</div>
                </div>
                <div className="color"></div>
            </div>
        );
    }
}

export default Gragh;
