// npm
import React from 'react';

// style
import'../style/Header.scss';

function Header( {tab_name} ) { // 각 페이지에서 가져오는 값
    return (
        <header id={tab_name}>
            <div className="inner">
                <h1 className="logo">COMONG</h1>
                <div className="alarm">
                    <i className="fa-solid fa-bell"></i>
                </div>
                <div className="myPage">
                    <span className="empty userProfile">My Page</span>
                </div>
            </div>
        </header>
    )
}

export default Header;