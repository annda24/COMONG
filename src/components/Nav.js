// npm
import React from 'react';
import { Link } from 'react-router-dom';

// style
import '../style/Nav.scss';

// Nav.js
function Nav( {tab_name} ) { //각 페이지에서 가져오는 값
    return (
      <nav className="tab_bar" id={tab_name} >
          <ul>
              <li>
                  <Link to="/" className="tab_list">
                      <i className="fa-solid fa-box-archive"></i>
                      <span>Home</span>
                  </Link>
              </li>
              <li>
                  <Link to="/moim" className="tab_list">
                      <i className="fa-solid fa-people-group"></i>
                      <span>Moim</span>
                  </Link>
              </li>
              <li>
                  <Link to="/search" className="tab_list">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <span>Search</span>
                  </Link>
              </li>
              <li>
                  <Link to="/chats" className="tab_list">
                      <i className="fa-solid fa-comments"></i>
                      <span>Chats</span>
                  </Link>
              </li>
          </ul>
      </nav>
    )
  }
  
  export default Nav;