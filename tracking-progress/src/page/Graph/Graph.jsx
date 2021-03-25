import React, { PureComponent } from "react";
import "./Graph.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Table from "../../component/table/Table.json";
import dummy1 from "../../component/table/dummy1.json";

class Graph extends PureComponent {
    state = {
        count: ["one", "two", "three", "four", "five", "six", "seven"], //수업 수
        name: [], //수업이름
        firstName: [], //수업이름앞글자
        attendanceWeek: [],
        // attendance: {
        attendance: [], //[[수업1의 전체출석], [수업2의 전체출석], ...]
        // lastAttendance: {
        lastAttendance: [], //출석에 맞는 id값
        // class: {
        class1: [], //들어야하는 주차 목록
        class2: [],
        // },
        graphCount: [0, 1, 2, 3, 4, 5, 6], //과목수 7
        status: [], //16주차를 해야됨
        //
        // 한 수업당: 주차별출석현황O, 수업별X, 교시별출석(progress[주차][attendance1]),
        week: this.props,
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
        //수업 2개가 각각 몇주차까지 있나
        const { status } = this.state;
        const _status = dummy1[0].progress.map((item, index) => {
            return index;
        });
        //몇주차까지있나 ->> status (모든 수업이 16주)
        const _attendance = dummy1.map((item1, index1) => {
            return item1.progress.map((item2, index2) => {
                return item2.map((item3, index3) => {
                    return item3.attendance;
                });
            });
        });
        //모든 수업의 출석 전체 현황 attendance
        this.setState({
            status: _status,
            attendance: _attendance,
        });

        const _attendanceWeek = dummy1.map((item1, index1) => {
            return item1.progress.map((item2, index2) => {
                return item2[0].attendanceWeek;
            });
        });
        //수업1,수업2의 각각의 주차별 출석현황
        this.setState({
            attendanceWeek: _attendanceWeek,
        });
        this.judgeAttendance(_attendance, _attendanceWeek);
        this.takeClass(_attendance, _attendanceWeek);
    };

    judgeAttendance = (_attendance, _attendanceWeek) => {
        //출석 판별 후 id값 대입 (주차 출석현황 파악)
        const { week } = this.state;
        // console.log("week :>> ", week);
        const _lastAttendance = _attendanceWeek.map((item, index) => {
            if (item[week.week - 1] === "O") {
                return "attendance";
            } else if (item[week.week - 1] === "▲") {
                return "late";
            } else if (item[week.week - 1] === "X") {
                return "absence";
            } else {
                return "early";
            }
        });
        //모든과목의 1주차 출석현황
        const _test = [];
        const newAttendanceWeek = Array(_attendanceWeek);
        const nAT = newAttendanceWeek;
        for (var i = 0; i < 16; i++) {
            const __test = _attendanceWeek.map((item) => {
                return item.shift();
            });
            _test.push(__test);
        }
        this.setState({
            lastAttendance: _lastAttendance,
        });
    };

    takeClass = (_attendance, _attendanceWeek) => {
        //수업1의 출석 전체, 수업1의 각 주 출석
        //몇교시부터 들어야 하는가
        // const _class = _attendance1.map((item1, index1) => {
        //     return item1.map((item2, index2) => {
        //         if (item2 === "O") {
        //             return null;
        //         } else {
        //             return index1 + 1;
        //         }
        //     });
        // });
        // const __class = Array.from(_class);
        // __class.map((item, index) => {
        //     item.sort();
        // });
        // const ___class = __class.map((item, index) => {
        //     return item[0];
        // });
        //안 들은 수업이 있는 주차 배열
        //attendance배열의 item을 map비교해서 "X"가 있나없나, 있으면 index+1, 없으면 null ->> sort() ->>
        // this.setState({
        //     class1: ___class,
        // });
        //안들은 수업들이 몇주차인지 class1에 배열로 저장
    };

    render() {
        const {
            count,
            name,
            firstName,
            class1,
            attendance,
            attendanceWeek,
            lastAttendance,
            graphCount,
            status,
        } = this.state;
        // console.log("attendanceWeek :>> ", attendanceWeek);
        return (
            <div className="graghWhole">
                <div className="gragh">
                    {count.map((item, index) => {
                        return <div id={lastAttendance[index]} />;
                    })}
                </div>
                <div className="color">
                    {count.map((item, index) => (
                        <div id="classColor" className={item}></div>
                    ))}
                </div>
            </div>
        );
    }
}

export default Graph;
