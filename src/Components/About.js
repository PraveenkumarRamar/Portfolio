import React from 'react'
import Profile from '../Images/Profile.jpg';

function About() {
    return <>
        <div id='about'>
            <h1 className='about-title' >About</h1>
            <p className='about-cont' >In my portfolio, I showcase my proficiency as a full stack developer, demonstrating expertise <br /> in front-end technologies like HTML, CSS, and JavaScript, <br /> alongside back-end skills utilizing frameworks like Node.js and Express.js.<br /> With projects highlighting database management with MongoDB and responsive design with React,<br /> my portfolio reflects a versatile skill set ready to tackle diverse challenges in web development.</p>
            <div className='details' >
                <div className='image' >
                    <img src={Profile} alt="profile img" />
                </div>
                <div className='info'>
                    <h2><b>Who Am I ?</b></h2>
                    <p>I'm a certified MERN Stack developer <br /> and certified by  GUVI GEEK NETWORK PRIVATE LIMITED,IITM Research park.<br /> I've completed B.Tech(Information Technology-23) <br />in Hindusthan college of Engineering and Technology<br />at Coimbatore.</p>
                </div>
            </div>
        </div>
    </>
}

export default About