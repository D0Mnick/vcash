import React from 'react'
import about_img from '../assets/aboutimg.png'

function About() {
  return (
    <div className='aboutcontainer'>
        <div className="aboutdetails">
            <img data-aos="fade-right" src={about_img} alt="" />
            <div className="aboutinfo" data-aos="fade-up">
                <h3>About Us</h3>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, ea. Reprehenderit quod minus doloribus, ipsa deleniti architecto nihil quae nesciunt a perspiciatis. Veniam a iure neque error perferendis consectetur consequatur.
                Delectus error quidem obcaecati? Aliquid nostrum sit totam cupiditate dicta temporibus quam fugit omnis atque similique quas minima, eum enim eius quidem culpa mollitia aliquam quasi officia iste amet non.
                Veritatis, rem eaque. </p>
            </div>
        </div>

    </div>
  )
}

export default About