import React, { PureComponent } from "react";
import "./Attendance.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Graph from "../Graph";
import ClassTest from "../ClassTest";

class Attendance extends PureComponent {
    state = {
        attendanceCount: [0, 1, 2, 3],
        // week: [1, 2, 3, 4, 5, 6, 7, 8],
        week: [],
        isLoading: true,
    };

    componentDidMount() {
        const { setWeek } = this;

        setWeek();
        this.setState({
            isLoading: false,
        });
    }

    setWeek = () => {
        const _week = Array(16)
            .fill()
            .map((item, index) => {
                return index + 1;
            });

        this.setState({
            week: _week,
        });
    };
    render() {
        // console.log("Attendance :>> ", this.props.match.params.trackerId);
        const { step, explain } = this.props;
        const { attendanceCount, week, isLoading } = this.state;
        // console.log("week :>> ", week);
        if (isLoading) return null;

        return (
            <>
                <ClassTest />
                <div id="whole">
                    <div className="stance">
                        <div className="section">
                            <div className="step">{step}</div>
                            <div className="explain">{explain}</div>
                        </div>
                    </div>
                    <div className="graghPart">
                        {week.map((item, index) => (
                            <div className="graghSet" key={index.toString()}>
                                <Graph week={week[index]}></Graph>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        );
    }
}

export default Attendance;
