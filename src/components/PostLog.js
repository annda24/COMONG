// npm
import React,{useEffect, useState} from 'react';
import TimeCounting from "time-counting";

// data
import Profile from "../data/userProfile.json";

// style
import '../style/PostLog.scss';

const nowDate = new Date();
const now = `${nowDate.getFullYear()}-${nowDate.getMonth()+1}-${nowDate.getDate()} ${nowDate.getHours()}:${nowDate.getMinutes()}:${nowDate.getSeconds()}`
const option = {
    objectTime:now,
    calculate:{
        justNow : 3601
    }
}

function PostLog({log}){
    const writer = Profile[log.writerId];
    const writerName = writer.username;
    const writerImg = writer.img;

    return(
        <dl className="log">
            <dt className="name">{writerName}</dt>
            <dd className="img" background-image={"url("+writerImg+")"} alt="writer profile">writer profile image</dd>
            <dd className="title">{log.title}</dd>
            <dd className="timeLog">{TimeCounting(log.uploadTime,option)}</dd>
        </dl>
    )
}
export default PostLog;