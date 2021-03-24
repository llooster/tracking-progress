import React, { PureComponent } from "react";
import "./Attendance.css";
// import Table from "../../component/table/table.json";
// import { Route } from "react-router-dom";
// import { matchPath } from "react-router";
import Graph from "../Graph";

class Attendance extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            attendanceCount: [0, 1, 2, 3],
            week: [1, 2, 3, 4, 5, 6, 7, 8],
        };
    }
    render() {
        // console.log("Attendance :>> ", this.props.match.params.trackerId);
        const { step } = this.props;
        const { attendanceCount, week } = this.state;
        return (
            <div id="whole">
                <div className="stance">
                    <div className="section">
                        <div className="step">{step}</div>
                    </div>
                    <div className="graghPart">
                        {/* {attendanceCount.map((item) => { */}
                        {/* return ( */}
                        <div className="graghSet">
                            <Graph />
                            {/* <Graph /> */}
                        </div>
                        {/* ); */}
                        {/* })} */}
                    </div>
                </div>
            </div>
        );
    }
}

export default Attendance;
