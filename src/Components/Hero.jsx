import vcash from '../assets/Mobile.png'
import vc from '../assets/VC@2x.png'


function Hero() {
  return (
    <div className="hero-products" data-aos="fade-down">
        <div className="hero"> 
        <div className='power'>
        <p data-aos="fade-down">Powered By</p>
        <h1 data-aos="fade-down">Get A Whole New Digital Experience</h1>
        <h4 data-aos="fade-right">Empower transactions, simply lives</h4>
        </div>
        <button data-aos="fade-right">Explore More About Product</button>
        </div>
        <div className="imgs">
       
        <img data-aos="fade-right" className="background-image " src={vc} alt=""></img>
          <img src={vcash} alt="/" className='foreground-image' />
        </div>
      
    </div>
  )
}

export default Hero