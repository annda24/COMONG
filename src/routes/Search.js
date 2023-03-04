/// npm
import React from 'react'
import {Link, useLocation} from 'react-router-dom';

// component
import Header from '../components/Header';
import Nav from '../components/Nav';

// style
import '../style/Search.scss'

function Search() {
    return(
        <>
            <Header tab_name="Search" />
            <main id="Search"></main>
            <Nav tab_name="Search" />
        </>
    )
}

export default Search;