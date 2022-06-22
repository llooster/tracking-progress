import React, { PureComponent } from "react";
import "./Graph.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";

import dummy1 from "../../component/table/dummy1.json";

class Graph extends PureComponent {
    state = {
        count: ["one", "two", "three", "four", "five", "six", "seven"], //수업 수
        name: [], //수업이름
        firstName: [], //수업이름앞글자
        attendanceWeek: [],
        attendance: [], //[[수업1의 전체출석], [수업2의 전체출석], ...]
        lastAttendance: [], //출석에 맞는 id값
        classes: [], //들어야하는 주차 목록
        result: [],
        status: [], //16주차를 해야됨
    };

    componentDidMount() {
        const { getName, getAttendance, getAttendanceWeek } = this;
        getName();
        getAttendance();
        getAttendanceWeek();
    }

    getName = () => {
        // 수업명 가져오기
        const { name } = this.state;
        const _name = Array.from(name);
        dummy1.map((item, index) => {
            _name.push(dummy1[index].course.name);
        });
        this.setState({
            name: _name,
        });
        this.getFirstName(_name);
    };

    getFirstName = (_name) => {
        let _firstName = _name.map((item) => {
            return item.split("")[0];
        });
        this.setState({
            firstName: _firstName,
        });
    };

    getAttendance = () => {
        const _status = dummy1[0].progress.map((item, index) => index);
        //몇주차까지있나 ->> status (모든 수업이 16주)

        const _attendance = dummy1.map((item1, index1) =>
            item1.progress.map((item2, index2) =>
                item2.map((item3, index3) => item3.attendance)
            )
        );
        //모든 수업의 출석 전체 현황 attendance

        this.setState({
            status: _status,
            attendance: _attendance,
        });
        this.lineUpAttendance(_attendance);
        this.HMclasses(_attendance);
    };
    getAttendanceWeek = () => {
        //주차별 출석현황
        const _attendanceWeek = dummy1.map((item1) =>
            item1.progress.map((item2) => item2[0].attendanceWeek)
        );
        //모든 수업의 각각의 주차별 출석현황
        this.setState({
            attendanceWeek: _attendanceWeek,
        });
        this.judgeAttendance(_attendanceWeek);
    };

    judgeAttendance = (_attendanceWeek) => {
        //출석 판별 후 id값 대입 (주차 출석현황 파악)
        const { week } = this.props;
        const _lastAttendance = _attendanceWeek.map((item, index) => {
            if (item[week - 1] === "O") {
                return "attendance"; //완강
            } else if (item[week - 1] === "▲") {
                return "late"; //지각
            } else if (item[week - 1] === "X") {
                return "absence"; //하나도 안 들은거
            } else {
                return "early";
            }
        });
        this.setState({
            lastAttendance: _lastAttendance,
        });
    };

    lineUpAttendance = (_attendance) => {
        //전제출석_attendance

        const _class = _attendance.map((item) =>
            item.map((item1, index1) =>
                item1.map((item2, index2) => {
                    if (item2 !== "O") {
                        return index2 + 1;
                    } else {
                        return null;
                    }
                })
            )
        );
        // this.setState({
        //     classes: _class,
        // });
        //안들은 수업들이 몇주차인지 classes에 배열로 저장
        this.takeClass(_class);
    };
    takeClass = (_class) => {
        // console.log("_class :>> ", _class);
        const __class = [..._class].map((item, index) =>
            [...item].map((item1) => [...item1].sort())
        );
        //sort() 원래배열까지 영향

        console.log("__class :>> ", __class);
        const ___class = __class.map((item1, item2) =>
            item1.map((item2, index2) => item2[0])
        );
        const _classes = ___class[0].map((item1, index1) =>
            ___class.map((item, index) => item[index1])
        );

        this.setState({
            classes: _classes,
        });
    };
    HMclasses = (_attendance) => {
        const { week } = this.props; // 0~15
        const weeks = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
        const items = [0, 1, 2, 3, 4, 5, 6]; // 0~6 7개의 수업
        // console.log("week :>> ", week);
        // console.log("_attendance :>> ", _attendance);

        const result = items.map((item) => _attendance[item][week - 1]);

        // console.log("result :>> ", result);

        this.setState({
            result: result,
        });
        // console.log("_attendance :>> ", _attendance);
        // 주차별 전체 attendance
        // const _HMclasses = _attendance.map((item2, index2) =>

        // );
        // console.log("_HMclasses :>> ", _HMclasses);
    };

    render() {
        const {
            count,
            name,
            attendance,
            attendanceWeek,
            lastAttendance,
            classes,
            result,
        } = this.state;
        const { week } = this.props;
        // console.log("attendanceWeek :>> ", attendanceWeek);

        return (
            <div className="graghWhole">
                <div className="week-th">
                    <div>{week}주차</div>
                </div>
                <div className="gragh">
                    {count.map((item, index) => (
                        <div id={lastAttendance[index]} key={index.toString()}>
                            {classes.length !== 0 && classes[week - 1][index]}
                            <span>
                                {attendanceWeek.length !== 0 &&
                                attendanceWeek[index][week - 1] === "O"
                                    ? "완강"
                                    : result.length !== 0 &&
                                      `/ ${result[index].length}`}
                            </span>
                        </div>
                    ))}
                </div>
                <div className="color">
                    {count.map((item, index) => (
                        <div
                            id="classColor"
                            className={item}
                            key={index.toString()}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

export default Graph;
