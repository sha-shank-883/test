import React from 'react'
import user from "./images/user.png"
import logo from "./images/logo.png"
const Navbar = () => {
    return (


        <div>
            <nav className="header">
                {/* <nav > */}
                    <div className="Nav-container">
                        <div className="HeadBox ">
                            <a href="/"><img className="Headimg" src={logo} alt="logo" />
                    
                            </a>

                            <div className="headPoint">

                                <ul style={{textDecoration:"none"}}>
                                    <li className="h1" style={{padding:"1px 20px"}}>
                                        <a style={{color:"white",textDecoration:"none"}} href="#">For Property Owners</a></li>

                                    <li className="h2">

                                    <a  style={{color:"white",textDecoration:"none"}} href='#'>
                                     <img  style={{width:"20px", height:"18px"}}src={user} /> <p style={{marginTop:"-24px", paddingLeft:"30px"}}> Login / Sign Up </p></a>
                                    
                                            </li>

                                </ul>
                                </div>
                        </div>
                    </div>
                {/* </nav> */}
            </nav>

        </div>
    )
}

export default Navbar;