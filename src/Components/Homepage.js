import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pin1 from '../Images/Pin1.png';
import Crm1 from '../Images/Crm1.png';
import Profile from '../Images/Profile.jpg';
import Form from 'react-bootstrap/Form';

function Homepage() {
    return <>
        <div className='main'>
            {/* Header */}
            <div className='header' >
                <div className='nav-bar'>
                    <Navbar bg="dark" expand="lg" data-bs-theme="dark" >
                        <Container style={{ "fontSize": "1.5rem" }}>
                            <Navbar.Brand href="#home" style={{ "fontSize": "2rem", "color": "white" }}>Portfolio</Navbar.Brand>
                            <Nav className="links" >
                                <Nav.Link className='link' style={{ "color": "white" }} href="#home">Home</Nav.Link>
                                <Nav.Link  style={{ "color":'white' }} href="#about">About</Nav.Link>
                                <Nav.Link style={{ "color": "white" }} href="#project">Project</Nav.Link>
                                <Nav.Link style={{ "color": "white" }} href="#skill">Skills</Nav.Link>
                                <Nav.Link style={{ "color": "white" }} href="#contact">Contact</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </div>
                <div id='home' className='content'>
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
            {/* About */}
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
            {/* Project */}
            <div id='project'>
                <h1 className='proj-title'>PROJECTS</h1>
                <div className='cards'>
                    <Card style={{ width: '25rem',"position":"static" }}>
                        <Card.Img variant="top" src={Pin1} style={{ width: '25rem' }} />
                        <Card.Body>
                            <Link className='links' style={{ "textDecoration": "none", "color": "black" }} to='https://pinterestclone-react.netlify.app/' target='blank'><Card.Title>Pinterest Clone</Card.Title></Link>
                            <p><b> ReactJS, NodeJS, MongoDB, ExpressJS, Nodemailer, Axios, React-Bootstrap</b></p>
                            <Card.Text >
                                Embark on an exciting journey to create a Pinterest clone using the MERN stack! This project will involve building a visually stunning platform for users to discover. With MongoDB, Express.js, React, and Node.js
                            </Card.Text>
                            <Link className='links' to='https://github.com/PraveenkumarRamar/Pinterest/tree/Pinterest-fe' target='blank' ><Button variant="primary">Source Code</Button></Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '25rem',"position":"static" }}>
                        <Card.Img variant="top" src={Crm1} style={{ width: '25rem' }} />                        <Card.Body>
                            <Link className='links' style={{ "textDecoration": "none", "color": "black" }} to='https://lambent-lebkuchen-d5f1ec.netlify.app/' ><Card.Title>CRM Website</Card.Title></Link>
                            <p><b> ReactJS, NodeJS, MongoDB, ExpressJS, Nodemailer, Axios, Authentication, React-Bootstrap</b></p>
                            <Card.Text>
                                CRM website offers seamless customer relationship management with MongoDB for data storage, Express.js for server-side handling, React for dynamic user interfaces, and Node.js for efficient backend operations. </Card.Text>
                            <Link to='https://github.com/PraveenkumarRamar/CRM/tree/fe-crm' ><Button variant="primary">Source Code</Button></Link>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            {/* Skills */}
            <div id='skill'>
                <h1 className='skill-title' ><b>Skills</b></h1>
                <div className='skills'>
                    <img src='https://img.icons8.com/?size=160&id=NfbyHexzVEDk&format=png' alt="react" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=hsPbhkOH4FMe&format=png' alt="node" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=SDVmtZ6VBGXt&format=png' alt="express" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=74402&format=png' alt="mongodb" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=108784&format=png' alt="javascript" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=20909&format=png' alt="html5" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=21278&format=png' alt="css3" className='skill-img' />
                    <img src='https://img.icons8.com/?size=100&id=39855&format=png' alt="mysql" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=84710&format=png' alt="bootstrap" className='skill-img' />
                    <img src='https://img.icons8.com/?size=160&id=dQUAwwnconR8&format=png' alt="github" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=9OGIyU8hrxW5&format=png' alt="vstools" className='skill-img' />
                    <img src='https://img.icons8.com/?size=96&id=20906&format=png' alt="git" className='skill-img' />
                </div>
            </div>
            {/* Contact */}
            <div id='contact'>
                <div>
                    <h1 className='contact-title'><b>Contact</b></h1>
                </div>
                <div className='contact-div'>
                    <div className='contact-info'>
                        <a href="tel:+918220956441" target='blank'><i class="fa-solid 2a fa-phone"></i>Phone Number</a><br />
                        <a href="https://www.linkedin.com/in/praveenkumar-ramar/" target='blank'><i class="fa-brands 2a fa-linkedin"></i>LinkedIn</a><br />
                        <a href="https://github.com/PraveenkumarRamar" target='blank'><i class="fa-brands 2a fa-github"></i>Github</a><br />
                        <a href="whatsapp:contact=+91880956441@s.whatsapp.com&message=I'd like to chat with you" target='blank'><i class="fa-brands 2a fa-whatsapp"></i>WhatsApp</a><br />
                        <a href="#a"><i class="fa-solid 2s fa-location-dot"></i>Salem, TamilNadu, India</a>
                    </div>
                    <div className='message-box'>
                        <Form style={{ "color": "white" }} action='https://formsubmit.co/c85ae04d86cb1c27879a64c0e9072731' method='POST' >
                            <Form.Group className="mb-3"  >
                                <Form.Label>YOUR NAME</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>EMAIL ADDRESS</Form.Label>
                                <Form.Control type="email" />
                                <Form.Text className="text-muted">
                                    I'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" >
                                <Form.Label>SUBJECT</Form.Label>
                                <Form.Control type="text" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>MESSAGE</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                SEND
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <div className='footer-bar'>
                <div>
                    Designed and Devloped By <b>PRAVEENKUMAR RAMAR</b>
                </div>
            </div>
        </div>
    </>
}

export default Homepage