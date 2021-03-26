import React, { PureComponent } from "react";
import dummy1 from "../../component/table/dummy1.json";
import "./ClassTest.css";

class ClassTest extends PureComponent {
    state = {
        name: [],
        week: [],
        attendance: [],
        color: [
            "color1",
            "color2",
            "color3",
            "color4",
            "color5",
            "color6",
            "color7",
        ],
    };
    componentDidMount() {
        const { getName } = this;
        getName();
    }
    getName = () => {
        // 수업명 가져오기
        const { name } = this.state;
        let _name = Array(...name);
        _name = dummy1.map((item, index) => {
            return item.course.name;
        });
        this.setState({
            name: _name,
        });
    };

    render() {
        const { name, color } = this.state;
        console.log("color :>> ", color);
        return (
            <div id="classWhole">
                {color.map((item, index) => {
                    return (
                        <div id="className">
                            {" "}
                            {name[index]}
                            <span className={item}></span>
                        </div>
                    );
                })}

                {/* <div id="className">
                    {name[0]} <span className="color1"></span>
                </div>
                <div id="className">
                    {name[1]} <span className="color2"></span>
                </div>
                <div id="className">
                    {name[2]} <span className="color3"></span>
                </div>
                <div id="className">
                    {name[3]} <span className="color4"></span>
                </div>
                <div id="className">
                    {name[4]} <span className="color5"></span>
                </div>
                <div id="className">
                    {name[5]} <span className="color6"></span>
                </div>
                <div id="className">
                    {name[6]} <span className="color7"></span>
                </div> */}
            </div>
        );
    }
}
export default ClassTest;
