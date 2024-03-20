import React from 'react'
import Vcash from '../DataProvider/Provider'
import Items from './Items'

function Service() {
  return (
    <div className="container">
    <div id='services' className='servicecontainer'>
      <h1>We Provide</h1>
      <div className="service">
        {Vcash.map((item, i) => {
            return<Items key={i} 
            id={item.id}
            image={item.image}
            name={item.name}
            text={item.text}
            />
        })}
      </div>

    </div>
    </div>
  )
}

export default Service
