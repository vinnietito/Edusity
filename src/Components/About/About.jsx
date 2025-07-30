import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
      </div>
      <div className="about-right">
        <h3>ABOUT MAPLE RIDGE ACADEMY</h3>
        <h2>Nothing But The Best</h2>
        <p>Embark on a transformative learning journey with Maple Ridge Academy’s 
           comprehensive early childhood and primary education programs. Our nurturing 
           environment and thoughtfully crafted curriculum empower young learners with 
           the foundational knowledge, skills, and creativity needed to thrive in their 
           academic and personal development.
        </p>
        <p>With a focus on exploration, hands-on activities, and individualized support, 
           our programs cultivate curiosity, confidence, and a lifelong love for learning 
           in every child. Our dedicated educators guide each student through engaging 
           experiences that promote both academic excellence and emotional growth.
        </p>
        <p>Whether your child is beginning their first steps in kindergarten or building 
           strong academic roots in primary school, Maple Ridge Academy offers the ideal 
           environment to nurture their potential and inspire their future success.
        </p>
      </div>
    </div>
  )
}

export default About
