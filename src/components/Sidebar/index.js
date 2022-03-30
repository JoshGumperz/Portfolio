import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'
import { FaTimes } from 'react-icons/fa'
const resume = `${process.env.PUBLIC_URL}/assets/Resume/Josh-Gumperz-Resume-v1.pdf`

const SideBar = ({ hideSidebar, toggleSidebar, setPage }) => {
  return (
    <aside className={`sidebar-container ${hideSidebar ? 'sidebar-hidden' : ''}`} onClick={toggleSidebar}>
        <div className='sidebar-iconContainer'>
            <FaTimes className='sidebar-closeIcon'/>
        </div>
        <nav className='sidebar-menu'>
            <ul className='sidebar-list'>
                <Link className='sidebar-link' to='/about' onClick={() => {setPage('/about')}}>About Me</Link>
                <Link className='sidebar-link' to='/mywork' onClick={() => {setPage('/mywork')}}>My Work</Link>
                <a className='sidebar-link' href={resume} rel="noopener noreferrer" target="_blank">Resume</a>
                <Link className='sidebar-link' to='/contact' onClick={() => {setPage('/contact')}}>Contact Me</Link>
            </ul>
        </nav>
    </aside>
  )
}

export default SideBar