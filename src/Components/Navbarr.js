import React from 'react'
import { Link } from 'react-router-dom'

function Navbarr() {
    return <>
        <div className='main1'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to='/home'> <b>PRAVEENKUMAR RAMAR</b></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <form className="d-flex">
                            <div className='d-flex gap-5'>
                                <Link  to='/project' style={{ "textDecoration": "None","color":"black"}} >PROJECT</Link>
                                <Link to='/skill' style={{ "textDecoration": "None","color":"black"  }} >SKILL</Link>
                                <Link to='/about' style={{ "textDecoration": "None","color":"black"  }} >ABOUT</Link>
                                <Link to='/contact' style={{ "textDecoration": "None","color":"black"  }} >CONTACT-US</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    </>
}

export default Navbarr