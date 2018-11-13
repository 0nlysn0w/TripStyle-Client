import React, {Component} from 'react'
import { Divider, Image, Container } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

export default class ProductImageSlider extends Component {
  handleImage1=()=>{
    console.log("product front",this);
};
  handleImage2=()=>{
    console.log("product achter",this);
};
  handleImage3=()=>{
    console.log("product side",this);
};

  render(){
  return(
  
  <div>
    <Container textAlign='center'>
        <Divider hidden/>
        <button   onClick={this.handleImage1}
 className= "btn btn-secondary btn-sm"><Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='small' verticalAlign='top' centered/></button>
        <Divider hidden/>
        <button   onClick={this.handleImage2}
 className= "btn btn-secondary btn1-sm"><Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='small' verticalAlign='top' centered/></button>
        <Divider hidden/>
        <button   onClick={this.handleImage3}
 className= "btn btn-secondary btn2-sm"><Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='small' verticalAlign='top' centered/></button>
    </Container>
    <Container textAlign='vertical'>
        <Divider hidden/>
        <button   onClick={this.handlesize1}
 className= "btn btn-secondary btn3-sm">XS</button>
        <Divider hidden/>
        </Container>

 
          


  </div>
)
}}

