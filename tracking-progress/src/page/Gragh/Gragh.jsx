import React, { PureComponent } from "react";
import "./Gragh.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Table from "../../component/table/Table.json";
import dummy2 from "../../component/table/dummy2.json";

class Gragh extends PureComponent {
    state = {
        name: Object.keys(Table),
        // level: Object.values(Table),
        value: [],
        graphCount: [0, 1, 2, 3, 4, 5, 6],
        status: [1, 2, 3, 4, 5, 6, 16],
        class1: dummy2[0].course.name,
        attend: dummy2[0].progress.attendanceWeek,
        // newValue: [],
    };

    componentDidMount() {
        const { reValue } = this;
        reValue();
    }

    reValue = () => {
        const newValue = Object.values(Table).map((each, index) => {
            if (each === "1") {
                return "absence";
            } else if (each === "2") {
                return "late";
            } else {
                return "attendance";
            }
        });

        this.setState({
            value: newValue,
        });
    };

    render() {
        const { name, level, value, graphCount, class1 } = this.state;
        console.log("class1 :>> ", class1);

        // console.log("level :>> ", level);
        return (
            <div className="graghWhole">
                <div className="gragh">
                    {graphCount.map((item) => (
                        <div id={value[item]}></div>
                    ))}
                </div>
                <div className="color">
                    {graphCount.map((item) => (
                        <span>{name[item]}</span>
                    ))}
                </div>
            </div>
        );
    }
}

export default Gragh;
