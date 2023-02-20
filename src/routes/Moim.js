/// npm
import React,{useEffect, useState} from 'react';

// component
import Header from '../components/Header';
import Nav from '../components/Nav';
import MoimList from '../components/MoimList';

// data
import getMoim from '../data/moimList.json';

// style
import '../style/Moim.scss'

function Moim() {
    // state
    const [profile,setProfile] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);
    // 필요 변수
    const myProfile = getMoim[0];
    const friend_num = getMoim.length-1;   // 현재 예제에서 Header에 전달 data 이자, profile.json에 저장된 친구 수

    useEffect(() => {
    const fetchUsers = async() => {
        try{
        // 1. state 초기화
        // console.log("state 초기화 실행");
        setProfile(null);
        setError(null);

        // 2. 로딩 시작
        // console.log("state 초기화 완료, 로딩 시작");
        setLoading(true);

        // 3. 데이터 로딩 - 프로필data
        // console.log("data 확인중");
        const profile = getMoim.slice(1);  // 1번부터 끝까지, 0번:myProfile
        setProfile(profile);
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

    if(!profile)  return null;
    if(loading)   return <div>Loading...</div>;
    if(error)     return <div>An error has occured!</div>;

    return (
    <>
        <Header tab_name="Moim"/>
        <main id="Moim"></main>
        <Nav tab_name="Moim" />
    </>
    )
}

export default Moim;