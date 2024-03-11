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
    <div id='about'>
      <div className='aboutcontainer'>
        <div className="aboutdetails">
            <img data-aos="fade-right" src={about_img} alt="" />
            <div className="aboutinfo" >
                <h3 data-aos="fade-left">About Us</h3>
                <h4 data-aos="fade-left" >VCash serves as a gateway to seamless and accessible financial transactions, providing users with a convenient platform to access various services such as bills payment, money transfer, airtime loading, electronic pins for gaming and cables, and life and personal accident insurances. Through intuitive design and user-friendly interfaces, VCash ensures that individuals, including the unserved and unbanked populations, can easily navigate and utilize our services. What's a product or service you'd like to show. </h4>

              <button onClick={openModal}>Read More</button>
              {isOpen && (
                <div className="about">
                  <div className="modal-about">
                        <h2>VCASH Operator Payment System</h2>
                        <div className='about-paragraph'>
                <p>VCash is an Operator Payment System dedicated to driving financial inclusion and empowerment within local communities. Leveraging cutting-edge technology, particularly our Progressive Web App (PWA), VCash offers a comprehensive range of financial services tailored to meet the diverse needs of users and businesses.</p>
                <p>Our VCash serves as a gateway to seamless and accessible financial transactions, providing users with a convenient platform to access various services such as bills payment, money transfer, airtime loading, electronic pins for gaming and cables, and life and personal accident insurances. Through intuitive design and user-friendly interfaces, VCash ensures that individuals, including the unserved and unbanked populations, can easily navigate and utilize our services.</p>
                <p>Key to our revenue generation strategy is the promotion and utilization of the VCash app. By strategically marketing the app and incentivizing its adoption, we aim to increase user engagement and transaction volumes, thereby driving revenue through transaction fees and service charges. Additionally, VCash explores partnerships with businesses and service providers to offer exclusive deals and promotions through the app, further incentivizing its use among consumers.</p>
                <p>Through our commitment to innovation, financial inclusion, and community empowerment, VCash is poised to become the preferred choice for digital financial services. Join us in our mission to revolutionize the way communities engage with finance and unlock new opportunities for economic growth and prosperity. VCash’s focus on its Progressive Web App (PWA) and outlines its revenue generation strategy through app promotion and utilization.</p>
            </div>
               <button className="close" onClick={closeModal}>Close</button>
                    </div>

                </div>
                    
              )}
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default About