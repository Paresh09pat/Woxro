import React from 'react'
import { Link } from 'react-router-dom'
import "./Style.css"

function Navbar() {
    return (
        <div style={{width:"90%" ,marginLeft:"5%"}}>
            <div className='logo'>
                <img className='logopic' src='https://woxro.com/public/assets/png/woxrologo.png' />
            </div>

            <div className='links'>
                <Link className='links1' to='/'> Home</Link>
                <Link className='links1' to='/About'> About Us</Link>
                <Link className='links1' to='/Service'> Service</Link>
                <Link className='links1' to='/Technology'> Technology</Link>
                <Link className='links1' to='/Career'> Careers</Link>
                <Link className='links1' to='/Blog'> Blog </Link>
                <Link className='links1' to='/OurWork'>  Our Works </Link>
                <Link className='links1' to='/Contact'> Contact Us </Link>
            </div>

        </div>
    )
}

export default Navbar