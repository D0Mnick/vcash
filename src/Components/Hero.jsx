import vcash from '../assets/Mobile.png'
import vc from '../assets/VC@2x.png'
import { useState } from 'react';
import features from '../assets/features.png'
import pen from '../assets/pen.png'
import inquiry from '../assets/inquiry.png'
// import './Modal.css'

function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const [isOpens, setIsOpens] = useState(false);

  const openModals = () => {
    setIsOpens(true);
  };

  const closeModals = () => {
    setIsOpens(false);
  };

  return (
    <div className="hero-products" data-aos="fade-down"   data-aos-duration="500">
        <div className="hero"> 
        <div className='power'>
        <p data-aos="fade-down"  data-aos-duration="500">Powered By</p>
        <h1 data-aos="fade-down"  data-aos-duration="500">Get A Whole New Digital Experience</h1>
        <h4 data-aos="fade-right"  data-aos-duration="500">Empower transactions, simply lives</h4>
        </div>

        <div className="herobutton">
        <button onClick={openModal} className='herofeautures' data-aos="fade-right"  data-aos-duration="500">See Feautures</button>
        {isOpen && (
        <div className="features">
          <div className="modal-features">
    
         <img src={features} alt="" />
    
            <button className="close" onClick={closeModal}>back to home</button>
          </div>
        
        </div>
      )}


        
        <button onClick={openModals} className='heroinquiry'   data-aos="fade-right"  data-aos-duration="600">Inquiry</button>
      {isOpens && (
        <div className="modal">

          <form className="modal-content">
              <div className='popupinquiry'>

            <h2>We Would Love To Know Your Thoughts!</h2>

             <div className='penbox'>
                    <img src={pen} alt="" />
                    <h5>Write Your Inquiry On The Box Below</h5>
             </div>

            <textarea id="w3review" name="w3review" rows="9" cols="50">
                        HELLO GOODMORNINGS
            </textarea>

            <div className='infosend'>
                <h6>Email Address/Mobile No.</h6>
                <input type="text" id="E-mail" name="email" />
                <button><img src={inquiry} alt="" />Send</button>
            </div>

           <h3>Important:All information given will be treated with the highest confidentially.It will solely be used for Vcash purposes only.</h3>

           <button className="close" onClick={closeModals}>back to home</button>
           </div>
          </form>
        </div>
        
      )}
  






        </div>
      
        </div>
        <div className="imgs">
       
        <img data-aos="fade-right"  data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"

     data-aos-easing="ease-in-sine" className="background-image " src={vc} alt=""></img>

          <img data-aos="fade-down"  data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"

          src={vcash} alt="/" className='foreground-image' />
        </div>
      
    </div>
  )
}

export default Hero