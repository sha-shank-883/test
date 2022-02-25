import React from 'react'
import appartment from "../Components/images/apartment.png";
import check from "../Components/images/check.png";
import users from "../Components/images/users.png";
import kitchen from "../Components/images/kitchen.png";

const Footer = () => {
  return (


        <container  className="Footer"> 
<div className="services">
            <img className="pngimg" src={appartment} />
            <p className='servicep pl-0px'>250+ Handpicked <br/> Apartments</p>
            <img className="pngimg" src={kitchen} />
            <p className='servicep'>Fully FurnishedWith <br/> Kitchen</p>
            <img className="pngimg" src={check} />
            <p className='servicep'> Checked on 89+ quality <br/> parameters</p>
            <img className="pngimg" src={users} />
            <p className='servicep'> 600+ Experienced <br/> Guests</p>
          
        </div>
    </container>
  )
}

export default Footer;