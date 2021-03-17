import React, { PureComponent } from "react";
import "./Gragh.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Table from "../../component/table/Table.json";
import dummy2 from "../../component/table/dummy2.json";
import dummy3 from "../../component/table/dummyTestData.json";

class Gragh extends PureComponent {
    state = {
        // 1.수업이름name 2.수업이름앞글자firstName  3.몇주차인지weekNumber
        // 4.주출석attendanceWeek  5.강의출석attendance
        name: dummy2[0].course.name.split("")[0],
        firstName: [],
        graphCount: [0, 1, 2, 3, 4, 5, 6], //과목수 7
        status: [1, 2, 3, 4, 5, 6, 16], //16주차를 해야됨
        class1: dummy2[0].course.name,
        attendWeek: dummy2[0].progress.attendanceWeek,
        attend: dummy2[0].progress.attendance,
        lastAttendance: [],
    };

    componentDidMount() {
        const { reValue } = this;
        reValue();
    }

    getFirstName = () => {
        const { graphCount, firstName } = this.state;
        const firstname = graphCount.map((item) => {
            dummy2[item].course.name.split("");
        });
        this.setState({
            firstName: Array.from(firstName),
        });
    };

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
            lastAttendance: newValue,
        });
    };

    render() {
        const { name, lastAttendance, graphCount, class1 } = this.state;
        console.log("name :>> ", name);
        return (
            <div className="graghWhole">
                <div className="gragh">
                    {graphCount.map((item) => (
                        <div id={lastAttendance[item]}></div>
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
