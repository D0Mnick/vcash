import vcash from '../assets/Mobile.png'
import vc from '../assets/VC@2x.png'

function Hero() {
  return (
    <div className="hero-products" data-aos="fade-right">
        <div className="hero"> 
        <div className='power'>
        <p>Powered By</p>
        <h1>Get A Whole New Digital Experience</h1>
        <h4>Empower transactions, simply lives</h4>
        </div>
        <button>Explore More About Product</button>
        </div>
        <div className="imgs" data-aos="fade-left">
       
        <img className="background-image" src={vc} alt=""></img>
          <img src={vcash} alt="/" className='foreground-image' />
         
    
        </div>
        
    </div>
  )
}

export default Hero