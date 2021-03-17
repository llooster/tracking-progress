import React, { PureComponent } from "react";
import dummy2 from "../../component/table/dummy2.json";

class ClassTest extends PureComponent {
    state = {
        class: dummy2[0].course.name,
        week: [],
        attendance: [],
    };
    // getClassName = () => {
    //     const name1 = dummy2[0].course.name;
    //     this.setState({
    //         className: className.unshift(name1),
    //     });
    // };
    render() {
        // this.getClassName();
        // const {class} = this.state;
        // console.log("class :>> ", class);
        return (
            <div>
                <div>12sadfds3</div>
            </div>
        );
    }
}
export default ClassTest;
