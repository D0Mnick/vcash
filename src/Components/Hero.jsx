import React, { useState } from 'react';
import vcash from '../assets/Mobile.png';
import vc from '../assets/VC@2x.png';
import features from '../assets/features.png';
import pen from '../assets/pen.png';
import inquiry from '../assets/inquiry.png';
import './hero.css'; // Import your CSS file here

function Hero() {
  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);

  const openFeaturesModal = () => {
    setIsFeaturesOpen(true);
  };

  const closeFeaturesModal = () => {
    setIsFeaturesOpen(false);
  };

  const openInquiryModal = () => {
    setIsInquiryOpen(true);
  };

  const closeInquiryModal = () => {
    setIsInquiryOpen(false);
  };

  return (
    <div id="hero" className="hero-products">
      <div className="hero">
        <div className="power">
          <p>Powered By</p>
          <h1>Get A Whole New Digital Experience</h1>
          <h4>Empower transactions, simplify lives</h4>
        </div>

        <div className="herobuttons">
          <button onClick={openFeaturesModal} className="herofeatures">See Features</button>
          {isFeaturesOpen && (
            <div className="modal">
              <div className="modal-content">
                <img src={features} alt="Features" />
                <button className="close" onClick={closeFeaturesModal}>Close</button>
              </div>
            </div>
          )}

          <button onClick={openInquiryModal} className="heroinquiry">Inquiry</button>
          {isInquiryOpen && (
            <div className="modal">
              <div className="modal-content">
                <h2>We Would Love To Know Your Thoughts!</h2>
                <div className="penbox">
                  <img src={pen} alt="Pen" />
                  <h5>Write Your Inquiry Below</h5>
                </div>
                <textarea id="inquiry" rows="5" cols="40"></textarea>
                <div className="infosend">
                  <h6>Email Address/Mobile No.</h6>
                  <input type="text" id="email" name="email" />
                  <button><img src={inquiry} alt="Send" />Send</button>
                </div>
                <h3 className="notice">Important Notice: All information will be treated with the highest confidentiality and used solely for Vcash purposes.</h3>
                <button className="close" onClick={closeInquiryModal}>Close</button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="imgs">
        <img src={vc} alt="V" className="background-image" />
        <img src={vcash} alt="VCash" className="foreground-image" />
      </div>
    </div>
  );
}

export default Hero;
