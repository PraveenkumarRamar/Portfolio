import React from 'react'
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

function Homepage() {
    return <>
        <div className='main d-flex justify-content-center'>
                <div  className='content'>
                    <p>Hello 👋 <br />
                        I'm Praveenkumar - curious<br />
                        <b>Full Stack Devloper</b><br />
                        based in Chennai, TamilNadu, India.</p>
                    <div className='content-buttons'>
                        <Link to='https://drive.google.com/file/d/1u_xvE8xg6DPReOvHcs0ThJYSgAomwjtp/view' className='links' target='blank' style={{ "textDecoration": "none", "color": "black" }} ><div className='btns'>
                            Download CV
                        </div></Link>
                    </div>
                </div>
            </div>
            <div className='footer-bar'>
                <div>
                    Designed and Devloped By <b>PRAVEENKUMAR RAMAR</b>
                </div>
            </div>
    </>
}

export default Homepage