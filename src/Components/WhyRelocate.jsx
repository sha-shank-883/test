import React from 'react';
import checkbox from "../Components/images/check-box.png";

const WhyRelocate = () => {
  return (
      <div className='relocateDiv'>
    <div className="Relocate-banner">
<div className="contentDiv" >
  <p style={{fontSize:"40px", padding:"10px 50px"}}> Why Relocate? </p>
<p style={{fontSize:"18px", padding:"1px 52px",marginTop:"-30px"}}> Moving to a new city is BIG decision. It is even more stressful when you relocate for work.</p>

<div  style={{fontSize:"14px", padding:"50px", marginTop:"-70px"}}>
<p> <img src={checkbox} style={{height:"20px", width:"20px",marginTop:"5px"}} /> Covid Safe</p>
<p> <img src={checkbox} style={{height:"20px", width:"20px",marginTop:"5px"}}/> Free E-Visits </p>
<p> <img src={checkbox} style={{height:"20px", width:"20px",marginTop:"5px"}} /> Customized Furniture </p>
<p> <img src={checkbox} style={{height:"20px", width:"20px",marginTop:"5px",}}  /> Rent for Flexible Duration</p>
</div>
<div style={{marginLeft:"50px"}} >
<button style={{width:"160px", height:"50px",marginleft:"20px", background:"#e25625", color:"white",fontSize:"18px", border:"none", borderRadius:"10px"}}> Know More</button>
</div>
</div>
</div>

     </div>
  )
}

export default WhyRelocate