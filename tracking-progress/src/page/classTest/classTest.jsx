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
        // console.log("color :>> ", color);
        return (
            <>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
                    rel="stylesheet"
                />
                <div id="classWhole">
                    {color.map((item, index) => {
                        return (
                            <div id="className" key={index.toString()}>
                                {name[index]}
                                <span className={item}></span>
                            </div>
                        );
                    })}
                </div>
            </>
        );
    }
}
export default ClassTest;
