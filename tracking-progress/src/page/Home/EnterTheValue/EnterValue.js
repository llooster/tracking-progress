import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../Login/Login.css";

class EnterValue extends Component {
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
        console.log("history :>> ", history);
        const {
            user: { id, password },
        } = this.state;
        console.log(`loginUser-----Id : ${id} Password : ${password}`);
        if (id !== "201708015" || password !== "gksruf101@") {
            alert("아이디와 비밀번호를 확인하세요");
            return;
        } else {
            history.push(`/select`);
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
        // const { explain, step, user } = this.state;
        const { onChangeInputText, onSubmit, enterKey } = this;
        // const { value, next, moodle } = this.props;
        return (
            <>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&display=swap"
                    rel="stylesheet"
                />
                <div id="classWhole">
                    <div className="contents">
                        <div className="loginValue">
                            <div className="inputBox">
                                <div className="moodleText">
                                    학번(ID) 비밀번호
                                </div>
                                <div className="inputValue">
                                    <div className="inputId">
                                        <input
                                            type="text"
                                            className="inputMoodle"
                                            name="id"
                                            placeholder="ID를 입력해주세요"
                                            onChange={onChangeInputText}
                                            onKeyPress={enterKey}
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
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default EnterValue;
