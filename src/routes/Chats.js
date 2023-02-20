/// npm
import React,{useEffect, useState} from 'react';
import {Link, useLocation} from 'react-router-dom';

// component
import Header from '../components/Header';
import Nav from '../components/Nav';
import ChatList from '../components/ChatsList';

// data
import getChatting from '../data/chatList.json';

// style
import '../style/Chats.scss'

function Chats() {
    // state
    const [chatting,setChatting] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    // 필요 변수
    const chatting_num = getChatting.length;

    useEffect(() => {
        const fetchUsers = async() => {
        try{
            // 1. state 초기화
            // console.log("state 초기화 실행");
            setChatting(null);
            setError(null);
    
            // 2. 로딩 시작
            // console.log("state 초기화 완료, 로딩 시작");
            setLoading(true);
    
            // 3. 데이터 로딩 - chatlist.json
            // console.log("data 확인중");
            setChatting(getChatting);
            // console.log("data 확인 완료");
        }
        catch(e){
            // 에러 발생시 예외 처리 작업
            // console.log("에러 발생");
            setError(e);
            console.log(error);
        }
        // 4. 로딩 완료
        setLoading(false);
        // console.log("로딩 완료, 페이지 실행");
        };  // const fetchUsers
        fetchUsers();
    },[]);  // useEffect

    if(!chatting)  return null;
    if(loading)   return <div>Loading...</div>;
    if(error)     return <div>An error has occured!</div>;

    return(
        <>
            <Header tab_name="Chats" />
            <main id="Chats">
                {/* search_box */}
                <form className="search_box">
                    <fieldset className="search_inner">
                        <legend className="blind">채팅 검색</legend>
                        <i className="fas fa-search"></i>
                        <input type="search" name="search" id="search" placeholder="Find Friend, Moim, chattings" />
                    </fieldset>
                </form>
                {/* ChatList */}
                <section>
                    <ul>
                        {chatting.map( (chat, index) => {return(
                            <ChatList 
                                key={index} id={chat.id} img={chat.img} name={chat.name}
                                last_msg={chat.last_msg} last_msg_time={chat.last_msg_time}
                                not_check_msg={chat.not_check_msg}
                            />
                        )} )}
                    </ul>
                </section>
            </main>
            <Nav tab_name="Chats" />
        </>
    )
}

export default Chats;