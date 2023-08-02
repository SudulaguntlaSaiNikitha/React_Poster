import React, { Component } from 'react'
 import images from './images.jpeg'
export default class Classcom extends Component {
    constructor(props)
    {
        super(props)
        this.state = [
            {   
           name: 'Declarative',
           description:'React makes it painless to create interactive UIs. Design simple views for each state ',
            next:" and render just the right components when your data changes"
            },
            
            {
               name: 'Component',
               description :"React makes it painless to create interactive UIs. Design simple views for each ",
                next:" and render just the right components when your data changes"
                },
                {
                   name: 'Platform Dependent',
                   description:"React makes it painless to create interactive UIs. Design simple views for each ",
                    next:" and render just the right components when your data changes"
                }
            ];
    }
  render() {
    return (
      <div style={{display:'inline-flex',marginLeft:'20px'}}>
        {
          
        this.state.map((item,index) => {
        return(
        <div key={index} style={{width:'200px',height:'30px'}}>
          <p></p>
        <h3><b style={{color:'black'}}>{item.name}:</b></h3><br/>
        <p style={{color:'black'}}>{item.description}</p>
        <p style={{color:'black'}}><img src={images} style={{height:'10px',width:'20px'}} alt="h" />{item.next} </p>
        <p></p>
        <button style={{borderRadius:'none'}}class="btn btn-primary" type="button">Request a demo</button>
        </div>)}
        )
  }
  </div>
    );
  }
}
