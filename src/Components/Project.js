import React from 'react'
import Card from 'react-bootstrap/Card';
import Pin1 from '../Images/Pin1.png';
import Crm1 from '../Images/Crm1.png';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

function Project() {
    return <>
        {/* Project */}
        <div id='project' className='text-center'>
            <h1 className='proj-title'>PROJECTS</h1>
            <div className='cards'>
                <Card style={{ width: '25rem', "position": "static" }}>
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

                <Card style={{ width: '25rem', "position": "static" }}>
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
    </>
}

export default Project