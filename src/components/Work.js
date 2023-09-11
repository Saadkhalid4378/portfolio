import './WorkCardStyles.css';

import React from 'react';
import WorkCard from './WorkCard';
import WorkCardData from './WorkCardData';

// import work1 from '../assets/work1.jpg';
// import { NavLink } from 'react-router-dom';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-headings'>
            Projects
        </h1>
        <div className='project-contaner'>
            {WorkCardData.map((val,ind) => {
                return (
                    <WorkCard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    texr={val.text}
                    view={val.view}
                    />
                )
            })}

        </div>
      
    </div>
  )
}

export default Work;
