import React, { PureComponent } from "react";
import "./Gragh.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Table from "../../component/table/Table.json";

class Gragh extends PureComponent {
    state = {
        name: Object.keys(Table),
        // level: Object.values(Table),
        value: Object.values(Table).map((each, index) => {
            if (each === "1") {
                return "absence";
            } else if (each === "2") {
                return "late";
            } else {
                return "attendance";
            }
        }),
    };
    render() {
        let { name, level, value } = this.state;
        console.log("name :>> ", name);
        // console.log("level :>> ", level);
        return (
            <div className="graghWhole">
                <div className="gragh">
                    <div id={value[0]}>1</div>
                    <div id={value[1]}>2</div>
                    <div id={value[2]}>3</div>
                    <div id={value[3]}>4</div>
                    <div id={value[4]}>5</div>
                    <div id={value[5]}>6</div>
                    <div id={value[6]}>7</div>
                </div>
                <div className="color">
                    <span>{name[0]}</span>
                    <span>{name[1]}</span>
                    <span>{name[2]}</span>
                    <span>{name[3]}</span>
                    <span>{name[4]}</span>
                    <span>{name[5]}</span>
                    <span>{name[6]}</span>
                </div>
            </div>
        );
    }
}

export default Gragh;
