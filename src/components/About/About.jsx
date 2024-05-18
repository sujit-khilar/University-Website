import React from 'react'
import "./about.css"
import play_icon from '../../assets/play-icon.png'
import about_img from '../../assets/about-img.jpg'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>Universities are institutions that provide higher education and research, and award academic degrees. They are places for learning, personal growth, and discovery, and can help advance society through research. University life involves more than just studying, and students can also participate in sports teams, societies, and volunteering opportunities. The academic workload at university is usually greater than in school or college, with more emphasis on independent learning, research, and critical thinking.</p>
        <p>certificate program for students with intellectual disabilities who need additional support to succeed in the community. It's a postsecondary program that prepares students academically and socially for employment</p>
        <p> the interesting structure of flower cells until he came to me. I would just be standing there. “I can’t see anything,” I would say. He would begin patiently enough, explaining how anybody can see through a microscope, but he would always end up in a fury, claiming that I too could see through a microscope but just pretended that I couldn’t. “It takes away from the beauty of flowers anyway,” I used to tell him. “We are not concerned with beauty in this course,” he would say.</p>
      </div>
    </div>
  )
}

export default About