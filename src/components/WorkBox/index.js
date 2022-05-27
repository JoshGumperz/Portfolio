import { useState } from 'react'
import './index.css'

function WorkBox({ Project }) {
  // because we have this project prop which is just an obj that contains all the information we need, we can just basically inject whatever is in the project prop into the html code to display the information for that project
  const [isHovered, setIsHovered] = useState(false)

  const handleHover = () => {
    setIsHovered(!isHovered)
  }

  return (
    <div onMouseEnter={handleHover} onMouseLeave={handleHover} className='workbox-container'>
        <div className={`workbox-overlay ${!isHovered ? 'workbox-hidden' : ''}`}></div>
        <p className={`workbox-projectDescription ${!isHovered ? 'workbox-hidden' : ''}`}>{Project.description}</p>
        <span className={`workbox-projectLinkContainer ${!isHovered ? 'workbox-hidden' : ''}`}>
          <p className='workbox-projectLinkText'>To visit the live site you can click <a href={Project.deployed_url} rel="noopener noreferrer" target="_blank" className="workbox-projectLinkText workbox-projectLink">here</a>, or you can visit the github repository by clicking <a href={Project.repo_url} rel="noopener noreferrer" target="_blank" className="workbox-projectLinkText workbox-projectLink">here</a></p>
        </span>
        <img src={Project.image} className="workbox-previewImage" alt="preview-screenshot"/>
        <h3 className='workbox-projectTitle'>{Project.title}</h3>
    </div>
  )
}

export default WorkBox