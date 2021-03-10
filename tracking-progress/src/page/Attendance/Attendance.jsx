import React, { PureComponent } from "react";
import "./Attendance.css";
import Table from "../../component/table/table.json";
import { Route } from "react-router-dom";
import { matchPath } from "react-router";
import { Gragh } from "../Gragh";

class Attendance extends PureComponent {
    render() {
        const { explain, step, moodle, matchPath } = this.props;
        return (
            <div id="whole">
                <div className="stance">
                    <div className="section">
                        <div className="step">{step}</div>
                        <div className="explain">{explain}</div>
                        <div className="explain">
                            {"moodleSession : " + moodle}
                        </div>
                        {/* <div className="explain">
                            {"moodleSession : " +
                                moodle +
                                matchPath.params.name}
                        </div> */}
                    </div>
                    {/* <div className="getValue"></div> */}
                    <div className="graghPart">
                        <div className="graghSet">
                            <span>{<Gragh />}</span>
                            <span>2</span>
                        </div>
                        <div className="graghSet">
                            <span>3</span>
                            <span>4</span>
                        </div>
                        <div className="graghSet">
                            <span>5</span>
                            <span>6</span>
                        </div>
                        <div className="graghSet">
                            <span>7</span>
                            <span>8</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Attendance;
