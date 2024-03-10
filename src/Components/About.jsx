import React from 'react'
import about_img from '../assets/aboutimg.png'
import { useState } from 'react';

function About() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className='aboutcontainer'>
        <div className="aboutdetails">
            <img data-aos="fade-right" src={about_img} alt="" />
            <div className="aboutinfo" data-aos="fade-up">
                <h3>About Us</h3>
                <p >VCash serves as a gateway to seamless and accessible financial transactions, providing users with a convenient platform to access various services such as bills payment, money transfer, airtime loading, electronic pins for gaming and cables, and life and personal accident insurances. Through intuitive design and user-friendly interfaces, VCash ensures that individuals, including the unserved and unbanked populations, can easily navigate and utilize our services. What's a product or service you'd like to show. </p>
                {/* <button  onClick={openModal}>Read More</button> */}
            </div>
            
            
        </div>

    </div>
  )
}

export default About