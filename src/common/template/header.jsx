import React from 'react'
import Navbar from './navbar.jsx'
export default props =>(
    <header className='main-header'>
        <a href="/#/" className='logo'>
            <span className='logo-mini'><b>mudar depois</b></span>
            <span className='logo-lg'>
                <i className='fa fa-money'></i>
                <b>A mudar</b>
            </span>
        </a>
        <nav className='navbar navbar-static-top'>
            <a href='false' className='sidebar-toggle' data-toggle='offcanvas'></a>
            <Navbar />
        </nav>
    </header>
)