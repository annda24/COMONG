// npm
import React, { ReactPropTypes } from "react";
import { Link, useLocation } from "react-router-dom";

// style
import '../style/ChattingCont.scss';

function ChattingCont () {
    const location = useLocation();
    const {name, img} = location.state;
    // 1. 하루의 첫 챗팅일 경우 date info 출력
    // 2. 채팅의 수신자가 본인일 경우 -> my
    // 3. 채팅의 수신자가 다른 사용자일 경우 -> other
    return (
        <>
            {/* 날짜 정보 : 요일, 월 일, 년도 */}
            <span className="date_info"></span>

            {/* my chat */}
            <div id={msgID} className="chatBox my">
                <span className="chat_txt"></span>
                <span className="chat_img"></span>
                <span className="chat_time"></span>
            </div>

            {/* other user chat */}
            <div id={msgID} className="chatBox other">
                <img src={"../images/"+userID.img}alt="user profile image"/>
                <span id="user">{userID.name}</span>
                <span id="chat_txt">{msgID.text}</span>
                <span id="chat_img">{msgID.img}</span>
                <span id="chat_time">{msgID.time}</span>
            </div>
        </>
    )
}

export default ChattingCont;