import React from 'react'
import moso from'./mosologo.png'
import bad1 from './bad1.png'
import bad2 from './bad2.png'
import bad3 from './bad3.png'
import bad4 from './bad4.png'
import ana from './ana.jpeg'
import Classcom from './Classcom'
import Table from './Tablee'
const ReacttPoster = () => {
  return (
    <div>
      <nav  style={{backgroundColor:'rgb(0, 0, 0)'}}class="navbar navbar-expand-sm navbar-dark fixed-top">
  <div class="container-fluid">
  <div style={{display:'inline-flex'}} class="navbar-brand" >
      <img src={moso} alt="Avatar Logo" style={{width:'40px'}} class="rounded-pill"/> 
      <a style={{color:'white',fontSize:'30px',marginLeft:'10px',marginTop:'10px'}} class="nav-link " href="#">EBS</a>
      </div>
    <ul  class="navbar-nav justify-content-center">
      <li class="nav-item">
        <a style={{color:'white'}} class="nav-link " href="#">Platform</a>
      </li>
      <li class="nav-item">
        <a style={{color:'white'}} class="nav-link" href="#">Solutions</a>
      </li>
      <li class="nav-item">
        <a  style={{color:'white'}} class="nav-link" href="#">Integrations</a>
      </li>
      <li class="nav-item">
        <a style={{color:'white'}} class="nav-link" href="#">Customers</a>
      </li>
      <li class="nav-item">
        <a style={{color:'white'}} class="nav-link" href="#">Plans</a>
      </li>
      <li class="nav-item">
        <a  style={{color:'white'}} class="nav-link" href="#">Resources</a>
      </li>
      <li class="nav-item">
        <a style={{color:'white'}} class="nav-link" href="#">Company</a>
      </li>
    </ul>
    <form class="d-flex">
    <button style={{backgroundColor:'rgb(0, 0, 0)',color:'white',border:'None'}} type="button">Sign in</button>
        <button style={{borderRadius:'none'}}class="btn btn-primary" type="button">Request a demo</button>
      </form>
  </div>
</nav>
<div style={{backgroundColor:'rgb(0, 0, 0)',marginTop:'60px',width:'100%',height:'500px'}}>
    <p  style={{fontSize:'50px',color:'White',textAlign:'center',marginTop:'30px'}}>Equip your Business with <br/>
    world class Software</p>
    <p style={{fontSize:'15px',color:'White',textAlign:'center' }}>Bring your entire financial blueprint into focus with a Strategic Finance <br/>
    Platform that connects and drives the business in real-time</p>
<center>
    <div style={{display:'inline-flex'}}><img src={bad1} alt='n' style={{height:'100px',width:'100px',marginLeft:'20px'}}/>
    <img src={bad2} alt='o' style={{height:'100px',width:'100px',marginLeft:'20px'}}/>
    <img src={bad3} alt='nop' style={{height:'100px',width:'100px',marginLeft:'20px'}}/>
    <img src={bad4} alt='nor' style={{height:'100px',width:'100px',marginLeft:'20px'}}/></div></center>
   <p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<div style={{backgroundColor:'white',boxShadow: '0 15px 9px 0 rgba(0,0,0,0.2)',border:'None',borderRadius:'5px',width:'900px',height:'330px',marginLeft:'200px',display:'inline-flex'}}>
<img src={ana} alt="ana" style={{height:'330px',width:'250px'}}/>
<Classcom/>
</div>
</div>
<div style={{paddingTop:'300px',width:'500px',marginLeft:'60px'}}>
   <Table/>
</div >
    </div>
  );
}
export default ReacttPoster
