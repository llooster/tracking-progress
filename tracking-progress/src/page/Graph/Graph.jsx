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
        name: [], //수업이름
        firstName: [], //수업이름앞글자
        attendanceWeek: [], //총 16개 (주차 출석)
        attendance: [], //[["O", "X", "X"],["X", "X", "X"],["", "", ""], ...]
        lastAttendance: [], //출석에 맞는 id값
        class1: [],
        graphCount: [0, 1, 2, 3, 4, 5, 6], //과목수 7
        status: [1, 2], //16주차를 해야됨
    };

    componentDidMount() {
        const { getName, getAttendance } = this;
        getName();
        getAttendance();
    }

    getName = () => {
        // 수업명 가져오기
        const { name } = this.state;
        const _name = Array.from(name);
        _name.push(dummy2[0].course.name);
        // 나중엔 이렇게 해야됨
        // graphCount.map((item) => {
        //     dummy2[item].course.name;
        // });
        this.setState({
            name: _name,
        });
        this.getFirstName(dummy2[0].course.name);
    };

    getFirstName = (each) => {
        const firstname = each.split("")[0];
        // 나중엔 이렇게 해야됨
        // graphCount.map((item) => {
        //     name[item].split("")[0];
        // });
        this.setState({
            firstName: firstname,
        });
    };

    getAttendance = () => {
        //
        const { status } = this.state;
        const _attendance = status.map((each, index) => {
            return dummy2[0].progress[index].map((item) => item.attendance);
        });
        this.setState({
            attendance: _attendance,
        });

        const _attendanceWeek = status.map((each, index) => {
            return dummy2[0].progress[index][0].attendanceWeek;
        });
        this.setState({
            attendanceWeek: _attendanceWeek,
        });
        this.judgeAttendance(_attendanceWeek);
        this.takeClass(_attendance, _attendanceWeek);
    };

    judgeAttendance = (_attendanceWeek) => {
        //출석 판별 후 id값 대입
        const { attendanceWeek } = this.state;
        const _lastAttendance = _attendanceWeek.map((each, index) => {
            if (each === "O") {
                return "attendance";
            } else {
                return "absence";
            }
        });
        //      else if (each === "▲") {
        //         return "late";
        //     } else {
        //         return "absence";
        //     }
        // });

        this.setState({
            lastAttendance: _lastAttendance,
        });
    };

    takeClass = (_attendance, _attendanceWeek) => {
        //몇교시부터 들어야 하는가
        const _class = _attendance[_attendanceWeek.indexOf("X")].map(
            (item, index) => {
                if (item !== "O") {
                    return index + 1;
                } else {
                    return null;
                }
            }
        );
        let __class = _class.sort()[0];
        this.setState({
            class1: __class,
        });

        // attendance[attendanceWeek.indexOf("X")]
    };

    render() {
        const {
            name,
            firstName,
            class1,
            attendance,
            attendanceWeek,
            lastAttendance,
            graphCount,
        } = this.state;

        // console.log("attendance :>> ", attendance);
        // console.log("attendanceWeek :>> ", attendanceWeek);
        // console.log(attendance[attendanceWeek.indexOf("X")]);
        // console.log(
        //     'attendance[attendanceWeek.indexOf("X")] :>> ',
        //     attendance[attendanceWeek.indexOf("X")]
        // );
        // console.log(
        //     "몇교시수업부터 들어야 되는가 :>> ",
        //     attendance[attendanceWeek.indexOf("X")]
        // );
        console.log("몇교시부터 들어야되냐? :>> ", class1);
        return (
            <div className="graghWhole">
                <div className="gragh">
                    {graphCount.map((item) => (
                        <div id={lastAttendance[item]}></div>
                    ))}
                </div>
                <div className="color">
                    {/* {graphCount.map((item) => ( */}
                    <span>{firstName[0]}</span>
                    {/* ))} */}
                </div>
            </div>
        );
    }
}

export default Graph;
