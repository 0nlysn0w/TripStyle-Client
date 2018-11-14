import React, {Component} from 'react'
import { Divider, Image, Container } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'


export default class ProductImageSlider extends Component {
  handleImage1=()=>{
    var smalImage = document.getElementById("firstImage");
    var largeImage = document.getElementById("largeImage");
    
    largeImage.setAttribute('src', smalImage.getAttribute('src'));
};
  handleImage2=()=>{
    var smalImage = document.getElementById("secondImage");
    var largeImage = document.getElementById("largeImage");
    
    largeImage.setAttribute('src', smalImage.getAttribute('src'));
};
  handleImage3=()=>{
    var smalImage = document.getElementById("thirdImage");
    var largeImage = document.getElementById("largeImage");
    
    largeImage.setAttribute('src', smalImage.getAttribute('src'));
};

  render(){
  return(
  
  <div>
    <Container textAlign='center'>
        <Divider hidden/>
        <button   onClick={this.handleImage1}
// className= "btn btn-secondary btn-sm"><largeImage.SetAttribute(img src={'https://placekitten.com/200/300'},smalImage.getAttribute(src={'https://placekitten.com/200/300'}) ) </button>
className= "btn btn-secondary btn1-sm"><Image id='firstImage' src={'https://placekitten.com/200/300'} size='small' verticalAlign='top' centered/></button>
        <Divider hidden/>
        <button   onClick={this.handleImage2}
 className= "btn btn-secondary btn1-sm"><Image id="secondImage" src={'https://placekitten.com/200/301'} size='small' verticalAlign='top' centered/></button>
        <Divider hidden/>
        <button   onClick={this.handleImage3}
 className= "btn btn-secondary btn2-sm"><Image id="thirdImage"src={'https://placekitten.com/200/302'} size='small' verticalAlign='top' centered/></button>
    </Container>
    

 
          


  </div>
)
}}

