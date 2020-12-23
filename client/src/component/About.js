import React from 'react'
import '../CSS/about.css'
import GitHubIcon from '@material-ui/icons/GitHub';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PublicIcon from '@material-ui/icons/Public';

function About() {
    return (
   <div className='container'>
       <div className='card'>
           <img src='https://findaman.ml/images/aman2.jpeg' alt='img' className='card__image'/>
           <p class="card__name">Aman Jaiswal</p>
           <p className='designation'>Full Stack Developer</p>
           <a  target='blank' className='email'href='mailto:aman2000.jaiswal@gmail.com'>aman2000.jaiswal@gmail.com</a>
           <div className='icons'>
          <a className='icon' target='blank' href='https://findaman.ml/'><PublicIcon/></a>
          <a className='icon' target='blank' href='https://www.linkedin.com/in/aman-jaiswal-685212107/'><LinkedInIcon/></a>
          <a className='icon' target='blank' href='https://github.com/AmanJaiswal99'><GitHubIcon/></a>
       </div>
       </div>
       
   </div>
     
    )
}

export default About
