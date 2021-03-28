import React, { PureComponent } from "react";
import "../../../styleSheets/common.css";
// import "../Login/Login.css";
import { Link } from "react-router-dom";

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
            // id: "",
            // password: "",
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
        const { history } = this.props;
        console.log("history :>> ", history);
        const {
            user: { id, password },
        } = this.state;
        console.log(`loginUser-----Id : ${id} Password : ${password}`);
        if (id !== "201708015" || password !== "gksruf101@") {
            alert("다시 입력");
            return;
        } else {
            history.push(`/select/`);
        }
        // 이후 api 요청 하는 부분 필요
    };
    enterKey = (e) => {
        if (e.key === "Enter") {
            this.onSubmit();
            // (엔터키 활성화)
        }
    };
    render() {
        const { explain, step, user } = this.state;
        const { onChangeInputText, onSubmit, enterKey } = this;
        const { value, next, moodle } = this.props;
        console.log("user :>> ", user);
        return (
            <div id="whole">
                <div className="stance">
                    <div className="section">
                        <div className="step">{step}</div>
                        <div className="explain">{explain}</div>
                    </div>
                    <div className="contents">
                        <div className="value">
                            <div className="moodleText">MoodleSesstion</div>
                            <div className="inputValue">
                                <div className="inputId">
                                    <input
                                        type="text"
                                        className="inputMoodle"
                                        name="id"
                                        placeholder="ID를 입력해주세요"
                                        onChange={onChangeInputText}
                                        // onKeyPress={enterKey}
                                    />
                                    <input
                                        type="password"
                                        className="inputMoodle"
                                        name="password"
                                        placeholder="비밀번호를 입력해주세요"
                                        onChange={onChangeInputText}
                                        onKeyPress={enterKey}
                                    />
                                </div>
                                {/* <Link to={`/select/${moodle}`}> */}
                                <button onClick={onSubmit}>확인</button>
                                {/* </Link> */}
                            </div>
                        </div>
                    </div>
                    {/* <Link to={`/select/${moodle}`}>
                        <button>{next[0]}</button>
                    </Link> */}
                </div>
            </div>
        );
    }
}

export default Main;
