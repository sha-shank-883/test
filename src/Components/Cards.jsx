import React from 'react'

function Cards(props){
  return (

    // <div className="card">
        // <div className="card-body">
         <div className="card-box"> 

        <img className="card-img" src={props.img} />
        <div className='color-div'>
        <p className='cardp'> {props.title} </p>
        
     </div>
     </div>


  )
}

export default Cards;