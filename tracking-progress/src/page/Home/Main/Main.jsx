import React, { PureComponent } from "react";
import "../../../styleSheets/common.css";
// import "../Login/Login.css";
import EnterValue from "../EnterTheValue";

class Main extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            explain: "학교 아이디로 로그인",
            step: " Login",
            user: {
                id: "",
                password: "",
            },
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
        // console.log("history :>> ", history);
        const {
            user: { id, password },
        } = this.state;
        console.log(`loginUser-----Id : ${id} Password : ${password}`);
        if (id !== "201708015" || password !== "gksruf101@") {
            alert("아이디와 비밀번호를 확인하세요");
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
        const { value, next, moodle, history } = this.props;
        console.log("history :>> ", history);
        return (
            <>
                <EnterValue pageLink={history} />
                <div id="whole">
                    <div className="stance">
                        <div className="section">
                            <div className="step">{step}</div>
                            <div className="explain">{explain}</div>
                        </div>
                    </div>
                    <div className="mainContents">
                        <link
                            rel="preconnect"
                            href="https://fonts.gstatic.com"
                        />
                        <link
                            href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nunito:ital,wght@1,600;1,700;1,800&display=swap"
                            rel="stylesheet"
                        />
                        Tracking
                        <br />
                        Progress
                        {/* <div className="value">
                            <div>
                                <div className="moodleText">학번 비밀번호</div>
                                <div className="inputValue">
                                    <div className="inputId">
                                        <input
                                            type="text"
                                            className="inputMoodle"
                                            name="id"
                                            placeholder="ID를 입력해주세요"
                                            onChange={onChangeInputText}
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
                                    <div className="bt">
                                        <button onClick={onSubmit}>
                                            Login
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </>
        );
    }
}

export default Main;
