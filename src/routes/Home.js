/// npm
import React,{useEffect, useState} from 'react';

// component
import Header from '../components/Header';
import Nav from '../components/Nav';
import Post from '../components/Post';

// data
import getPost from '../data/post.json';

// style
import '../style/Home.scss'

function Home() {
    // state
    const [post,setPost] = useState(getPost);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    // post load
    useEffect( () => {
        const fetchUsers = async() => {
            try {
                // 1. state 초기화
                // console.log("state 초기화 실행");
                setPost(null);
                setError(null);

                // 2. 로딩 시작
                // console.log("state 초기화 완료, 로딩 시작");
                setLoading(true);

                // 3. 데이터 로딩
                // console.log("data 확인중");
                setPost(getPost);
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
        };
        fetchUsers();
    },[] );// useEffect

    if (!post) return null;
    if (loading) return <div>Loading...</div>;
    if (error) return <div>An error has occured!</div>;

    return (
        <>
            <Header tab_name="Home" />
            <main id="Home">
                <div id="home_inner" className="card">
                    {/* viewMode Remote */}
                    <button className="viewMode" onClick={Event_Click_viewMode}>
                        <i className="fa-solid fa-border-all"></i>
                    </button>
                    {/* Post Box */}
                    <section id="PostSection">
                        {post.map( (post)=>{
                            return(
                                <Post 
                                    key={post.id}
                                    id={post.id}
                                    log={post.log}
                                    img={post.img}
                                    txt={post.txt}
                                />
                            )
                        } )}
                    </section>
                </div>
            </main>
            <Nav tab_name="Home" />
        </>
    )
}

//** viewMode click => card <=> article */
function Event_Click_viewMode(){
    const inner = document.querySelector("#home_inner");
    const btn = inner.querySelector(".viewMode");
    const icon = btn.querySelector("i");

    if (inner.classList.contains("album")){
        inner.setAttribute("class","card");
        icon.setAttribute("class","fa-solid fa-border-all");
    }else {
        inner.setAttribute("class","album");
        icon.setAttribute("class","fa-solid fa-list");
    }
}

export default Home;