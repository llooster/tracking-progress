import React, { PureComponent } from "react";
import "./Graph.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Table from "../../component/table/Table.json";
import dummy2 from "../../component/table/dummy2.json";
import dummy3 from "../../component/table/dummyTestData.json";

class Graph extends PureComponent {
    state = {
        // 수업이름, 주차별 수업,
        //  3.몇주차인지weekNumber
        // 4.주출석attendanceWeek  5.강의출석attendance
        name: [], //수업이름
        firstName: [], //수업이름앞글자
        weekNumber: [], //몇주차인가
        attendanceWeek: [],
        attendance: [],
        // name이 1로시작하는것들
        graphCount: [0, 1, 2, 3, 4, 5, 6], //과목수 7
        status: [1, 2], //16주차를 해야됨
        class1: dummy2[0].course.name,
        attendWeek: dummy2[0].progress.attendanceWeek,
        attend: dummy2[0].progress.attendance,
        lastAttendance: [],
    };

    componentDidMount() {
        const { getName, getFirstName, reValue } = this;
        reValue();
        getName();
        this.getWeekNum();
        // getFirstName();
    }

    getName = () => {
        const { name, graphCount } = this.state;
        const getName = Array.from(name);
        getName.push(dummy2[0].course.name);
        //나중엔 이렇게 해야됨
        // graphCount.map((item) => {
        //     dummy2[item].course.name;
        // });
        this.setState({
            name: getName,
        });
        this.getFirstName(dummy2[0].course.name);
    };

    getWeekNum = () => {
        const { weekNumber, attendance, status } = this.state;
        const newWeekNum = status.map((item, index) => {
            return [dummy2[0].progress[index].map((item) => item.attendance)];
        });
        // Array.from(newWeekNum);
        this.setState({
            attendance: newWeekNum,
        });
    };

    getFirstName = (each) => {
        const { name, graphCount, firstName } = this.state;
        const firstname = Array.from(firstName);
        const abc = each.split("")[0];
        console.log("abc :>> ", abc);
        //나중엔 이렇게 해야됨
        // graphCount.map((item) => {
        //     name[item].split("")[0];
        // });
        this.setState({
            firstName: firstname,
        });
    };

    // getWeekNumber = () => {
    //     const { weekNumber } = this.state;
    //     const getWeek = Array.from(weekNumber);
    //     if (dummy2[0].progress[]) {

    //     }
    // }

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
        const {
            name,
            firstName,
            lastAttendance,
            graphCount,
            class1,
            attendance,
        } = this.state;
        console.log(
            "each ",
            attendance[0]?.every((item) => item.find((each) => each === "O"))
        ); // false ->> 완강, true ->> "X"가 몇개있는지 체크

        // console.log("name :>> ", typeof name[0]);
        // console.log("firstName :>> ", firstName);
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

export default Graph;
