import React, { PureComponent } from "react";
import "./Attendance.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Graph from "../Graph";

class Attendance extends PureComponent {
    state = {
        attendanceCount: [0, 1, 2, 3],
        week: [1, 2, 3, 4, 5, 6, 7, 8],
    };

    // componentDidMount() {
    //     const { setWeek } = this;
    //     setWeek();
    // }
    // setWeek = () => {
    //     const _week = Array(16)
    //         .fill()
    //         .map((item, index) => {
    //             return index + 1;
    //         });
    //     this.setState({
    //         week: _week,
    //     });
    // };
    render() {
        // console.log("Attendance :>> ", this.props.match.params.trackerId);
        const { step } = this.props;
        const { attendanceCount, week } = this.state;
        // console.log("week :>> ", week);
        return (
            <div id="whole">
                <div className="stance">
                    <div className="section">
                        <div className="step">{step}</div>
                    </div>
                    <div className="graghPart">
                        {/* {attendanceCount.map((item) => {
                        return ( */}
                        <div className="graghSet">
                            <Graph week={week[0]} />
                            <Graph week={week[1]} />
                        </div>
                        <div className="graghSet">
                            <Graph week={week[2]} />
                            <Graph week={week[3]} />
                        </div>
                        <div className="graghSet">
                            <Graph week={week[4]} />
                            <Graph week={week[5]} />
                        </div>
                        <div className="graghSet">
                            <Graph week={week[6]} />
                            <Graph week={week[7]} />
                        </div>
                        {/* );
                        })} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Attendance;
