import React, { PureComponent } from "react";
import "../Login/Login.css";
// import "../../../styleSheets/common.css";
import LeftBar from "../../../component/LeftBar";

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            explain: "induk 사이트에 로그인 정보를 입력 합니다",
            step: "Step 0. Main",
            user: {
                id: "",
                password: "",
            },
            //   id:"",
            //   password:""
        };
    }

    onChangeInputText = (e) => {
        const { name, value } = e.target;
        const { user } = this.state;

        this.setState({
            user: {
                ...user,
                [name]: value,
            },
        });
    };

    onSubmit = () => {
        const {
            user: { id, password },
        } = this.state;
        console.log(`loginUser-----Id : ${id} Password : ${password}`);

        // 이후 api 요청 하는 부분 필요
    };

    render() {
        const { explain, step, user } = this.state;
        const { onChangeInputText, onSubmit } = this;
        console.log("user :>> ", user);
        return (
            <div className="whole">
                <LeftBar />
                <div className="Step">
                    <div className="explain">
                        <div>{step}</div>
                        <span>{explain}</span>
                    </div>
                    <div className="inputBox">
                        <div className="moodle">MoodleSesstion</div>
                        <div className="input">
                            <input
                                type="text"
                                id="inputValue"
                                name="id"
                                placeholder="ID를 입력해주세요"
                                onChange={onChangeInputText}
                                // onKeyPress={enterKey}
                            />
                            <input
                                type="password"
                                id="inputValue"
                                name="password"
                                placeholder="비밀번호를 입력해주세요"
                                onChange={onChangeInputText}
                                // onKeyPress={enterKey}
                            />
                            <button onClick={onSubmit}>확인</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main;
