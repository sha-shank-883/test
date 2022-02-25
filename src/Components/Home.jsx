import React from 'react'
import Footer from './Footer';
import Cards from "../Components/Cards";
import Navbar from './Navbar';
import Premium from "../Components/images/premium.jpg";
import medical from "../Components/images/medical.jpg";
import pg from "../Components/images/pg.jpg";
import budget from "../Components/images/budget.jpg";
import semi from "../Components/images/semi.jpg";
import workation from "../Components/images/workation.jpg";
import WhyRelocate from "../Components/WhyRelocate"

const home = () => {
  return (
    <>
      <Navbar/>
    <div className="banner">
     <div className="banner-box"> 
        <div className="main" style={{paddingTop:"70px"}}>
        <div className="mainDiv">
     <p className="banner-content"> Furnished Apartments for Business Travellers</p>
      </div>
     <div className="inputMain" >
         <div className="inputDiv">
            <input  className="input1" type="text" placeholder="Which city are you relocating to ?" />
            <input  className="input2" type="text" placeholder="For how long ?" />
           <div className="btnDiv" >
            <button className="searchbtn" style={{height:"55px", width:"156px", margin:"3px -17px" , fontSize:"22px", backgroundColor:"#e25625", color:"white",border:"none", borderRadius:"5px", cursor:"pointer"}}> Search</button>
            </div>
             <p style={{ fontWeight:"400", paddingTop:"10px",fontSize:"20px",textAlign:"center", color:"white"}}> Looking to relocate your employees?
             <a  className='a '  href='#'> Contact us</a>
             </p>
            </div>
             </div>
             </div>
            <div> 

      </div>
             <Footer/>
  </div>
        
  </div>
         {/* </div> */}


<div className='cards' style={{paddingTop:"10px"}}>
  <h1 style={{paddingLeft:"120px", fontSize:"40px", fontWeight:"700"}}> You select a city, We make it your home </h1>
  <div className="card" style={{paddingTop:"20px"}}>
         <Cards 
  img = {Premium}
  title = "Premium Homes"
/>

<Cards 
  img = {medical}
  title = "Medical Homes "
/>

<Cards 
  img = {pg}
  title = "PG $ Shared Rooms"
/>

<Cards 
  img = {budget}
  title = "Budget Homes"
/>

<Cards 
  img = {semi}
  title = "Custom Furnished Homes"
/>

<Cards 
  img = {workation}
  title = "Workation Homes"
/>
</div>
</div>
<WhyRelocate />


</>
  )
}

export default home