import React from 'react'

function Items(props) {
  return (
    <div className='item'>
        <img  src={props.image} alt="" />
        
        <div className='info'>
            <h4>{props.name}</h4>
            <p>{props.text}</p>
        </div>
         
    </div>
  )
}

export default Items
