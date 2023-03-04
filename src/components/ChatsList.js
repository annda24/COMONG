// npm
import React from "react";
import { Link } from "react-router-dom";

// style
import '../style/ChatList.scss';

function ChatList ( {id,img,name,people_num,last_msg,last_msg_time,not_check_msg} ) {
    return (
        <li className="ChatList">
            <Link to={"/chatting"} state={{id,img,name}}>
                <img src={"../images/"+img} />
                <span className="chat_name">{name}<em>{people_num}</em></span>
                <span className="chat_date">{last_msg_time}</span>
                <span className="chat_txt">{last_msg}</span>
                <span className="not_check_msg">{not_check_msg}</span>
            </Link>
        </li>
    )
}

export default ChatList;