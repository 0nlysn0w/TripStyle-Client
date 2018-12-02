import React from 'react'
import { Divider, Image, Container } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const ProductImageSlider = () => (
  <div>
    <Container textAlign='center'>
        <Divider hidden/>
        <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='small' verticalAlign='top' centered/> 
        <Divider hidden/>
        <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='small' verticalAlign='middle' centered/>
        <Divider hidden/>
        <Image src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='small' verticalAlign='bottom' centered/>
    </Container>
  </div>
)

export default ProductImageSlider