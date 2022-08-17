import {useEffect} from 'react';
import "./index.css";
import WorkBox from '../../components/WorkBox';
import { workData } from './workData';

function MyWork({ scrollToSection }) {
    // basically, we use workData.js to create objects for each project I want to display. The objects will contain: the project title, a description of the project, the project img, and the urls to visit both the github repository and the deployed site. We then pass the entire object as a prop to the WorkBox component where we use what's in the object to display each project.
    
    useEffect(() => {
        scrollToSection();
    })
    
    return (  
        <div className='mywork-container'>
            { workData.map((project) => {
                return ( 
                    <WorkBox Project={project}/>
                )    
            }) 
            }
        </div>
    );
}

export default MyWork;