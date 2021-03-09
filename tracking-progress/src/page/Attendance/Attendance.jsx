import React, { PureComponent } from "react";
import "./Attendance.css";

class SelectScreen extends PureComponent {
    render() {
        const { explain, step } = this.props;
        return (
            <div id="whole">
                <div className="stance">
                    <div className="section">
                        <div className="step">{step}</div>
                        <div className="explain">{explain}</div>
                    </div>
                    <div className="getValue"></div>
                </div>
            </div>
        );
    }
}

export default SelectScreen;
