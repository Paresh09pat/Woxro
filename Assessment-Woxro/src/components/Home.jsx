import React from 'react'
import "./Style.css"

function Home() {
    return (
        <div style={{ width: "90%", marginLeft: "5%" }}>
            {/* kerala text */}
            <div id='maindiv'>
                <h1 className='heading'>Kerala's Leading Web Design Company</h1>

                <div className='headtext'>Global Web Designing Company That Provides Full-Cycle Software <br />Development Services, E-Commerce & Mobile App Development System .</div>
            </div>

            {/* Service text */}
            <div className='SERVICES'>
                <h3 className='ser1'> SERVICES WE DELIVER</h3>
                <h2 className='ser2'>Preparing for your success, we provide truly prominent IT solutions.</h2>
            </div>

            {/* cards */}
            <div id='maincarddiv'>
                <div className='card1 rao'>
                    <img src='https://woxro.com/public/assets/png/services/webdesigning.png' />
                    <h2>Web Designing</h2>
                    <p>We create impressive interfaces. Usability + user experience are created based on a study of preferences and user behavior, using the latest web design trends, our experience, and achievements.</p>
                </div>
                <div className='card1 rao1'>
                    <img src='https://woxro.com/public/assets/png/services/webapplication.png' />
                    <h2> Web Application</h2>
                    <p>We have completed projects in full-cycle web applications including CRM, HRM, and project management solutions. Look no further if you are in search of a professional partner who can develop stunning web applications.</p>
                </div>

                <div className='card1 rao2'>
                    <img src='https://woxro.com/public/assets/png/services/mobileappdevelopment.png' />
                    <h2>Mobile App Development</h2>
                    <p>We develop high-quality and effective applications for your business. Our expertise and knowledge help us create reliable mobile applications for iOS and Android and cross-platform solutions.</p>
                </div>

                <div className='card1 rao3'>
                    <img src='https://woxro.com/public/assets/png/services/ecommercedevelopment.png' />
                    <h2> Ecommerce Development</h2>
                    <p>For some of you, our involvement as an eCommerce development and consulting partner will mean a powerful business launch with the right technology stack. For others – a possibility to give their business a fresh start.</p>
                </div>

                <div className='card1 rao4'>
                    <img src='https://woxro.com/public/assets/png/services/digitalmarketing.png' />
                    <h2> Digital Marketing</h2>
                    <p>We bring together expertise in brand marketing and sustainability to design and implement ideas in branding. We also bring brand purpose to life by communicating great stories. Now Maximize your online visibility.</p>
                </div>

                <div className='card1 rao5'>
                    <img src='https://woxro.com/public/assets/png/services/graphic.png' />
                    <h2> Graphic Desingning</h2>
                    <p>We build sustainable, brands by connecting your product and message with audiences that would want to get your and or services. We nurture ideas to transform ands through creativity focussed on growth. </p>
                </div>
            </div>

            {/* contact us */}
            <div id='btndiv'>
                <div className='subdiv1'>
                    We offer All kinds of IT services that ensure your success
                </div>

                <div className='subdiv2'>
                    <button className='btn'> <img className='btnimg' src='https://i.pinimg.com/originals/32/72/7c/32727c67b89140a465140922d4d5c6c1.png' /> Contact Us </button>
                    <button className='btn'> <img className='btnimg' src='https://i.pinimg.com/736x/d5/c8/aa/d5c8aaf2892cf9c6ebc0ec25a75ede69.jpg' /> Let's Talk</button>
                </div>

            </div>

        </div>
    )
}

export default Home