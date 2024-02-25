import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Contact() {
  return <>
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
  </>
}

export default Contact