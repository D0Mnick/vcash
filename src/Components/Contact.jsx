import React from 'react'
import qrx from '../assets/QRX LOGO.png'


function Contact() {
  return (
    <div id='contact' className='contact-container'>
        <div className='contact'>
            <h2>Let's Connect!</h2>
            <h4>Get Started Today</h4>
            <p>Reach out any questions or to set up discover the best path of your financial freedom</p>
            <h5>Vcash Hours today 09:00 am - 05:00 pm</h5>

            <button>Send Us A Message</button>
                <div className='logoqrx'>
                <span>Vcash 2024 Powerd By: </span>
                <img src={qrx} alt="" /> 
                <h3>The Power To Do More</h3>
            </div>
        </div>
       
    </div>
  )
}

export default Contact