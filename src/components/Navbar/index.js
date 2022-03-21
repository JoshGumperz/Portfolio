import React from 'react';
import "./index.css"
import { CgMenu as Menu } from 'react-icons/cg'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS, animateScroll as scroll } from 'react-scroll'
// When accessing assets in the public folder, you have to use process.env.PUBLIC_URL
const resume = `${process.env.PUBLIC_URL}/assets/Resume/Josh-Gumperz-Resume-v1.pdf`

function Navbar({ toggleSidebar, currentPage, setPage }) {

    const scrollTop = () => {
        scroll.scrollToTop({
            duration: 500,
            delay: 0,
            smooth: true,
            offset: 50,
          })
    }

    return ( 
        <>
            <header className='navbar-nav'>
                <div className='navbar-navContainer'>
                    <LinkS className='navbar-navLogo' onClick={scrollTop}>Josh Gumperz</LinkS>
                    <div className='navbar-mobileIconContainer' onClick={toggleSidebar}>
                        <Menu className='navbar-mobileIcon'/>
                    </div>
                    <ul className='navbar-navList'>
                        <li className='navbar-navItem'>
                            <LinkR className={`navbar-navLink ${currentPage !== '/mywork' && currentPage !=='/contact' ? 'navbar-currentPage' : ''}`} onClick={() => {setPage('/about')}} to='/about'>About Me</LinkR>
                        </li>
                        <li className='navbar-navItem'>
                            <LinkR className={`navbar-navLink ${currentPage === '/mywork' ? 'navbar-currentPage' : ''}`} onClick={() => {setPage('/mywork')}} to='/mywork'>My Work</LinkR>
                        </li>
                        <li className='navbar-navItem'>
                            <a className='navbar-navLink' href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
                        </li>
                        <li className='navbar-navItem'>
                            <LinkR className={`navbar-navLink ${currentPage === '/contact' ? 'navbar-currentPage' : ''}`} onClick={() => {setPage('/contact')}} to='/contact'>Contact Me</LinkR>
                        </li>
                    </ul>                        
                </div>
            </header>
        </>
     );
}

export default Navbar;