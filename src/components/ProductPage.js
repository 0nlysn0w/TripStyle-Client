import React, { Component } from 'react';
import TopHeader from './Header';
import { Container, Image, Grid, GridRow, GridColumn, Divider, Header, Button, Icon } from 'semantic-ui-react';
import ProductImageSlider from './ProductImageSlider';
import SelectSize from './SelectSize';
import Footer from './Footer';


export class ProductPage extends Component {
  displayName = ProductPage.name
  

  render() {
    return ( 
      <div>
        <TopHeader />
        <Container>
            <Grid>
                <GridRow>
                    <GridColumn computer='3'>
                        <Container>
                            
                            
                            <ProductImageSlider />
                        </Container>
                    </GridColumn>
                    <GridColumn computer='8'>
                        <Divider hidden />
                        <Container textAlign='center'>
                            <Image id="largeImage" src={'https://react.semantic-ui.com/images/wireframe/image.png'} size='big' />
                        </Container>
                    </GridColumn>
                    <GridColumn width='5' verticalAlign='center'>
                        <Divider hidden />
                        <Header size='huge' textAlign='right' color='red'> €20,- </Header>
                        <Divider hidden/>
                        <Container textAlign='center'>
                            <Header size='huge'>Product name</Header>
                            <Divider hidden/>
                            Select size:
                            <Container fluid>
                            
                            
                            <SelectSize />
                            </Container>
                            <Divider hidden />
                            <Button color='green' size='massive' icon='shopping cart' fluid> 
                            </Button>
                        </Container>
                    </GridColumn>
                </GridRow>
            </Grid>
        </Container>
        <Divider hidden/>
        <Divider horizontal>Product information</Divider>
        <Container>
        Quantum theory is the theoretical basis of modern physics that explains the nature and behavior of matter and energy on the atomic and subatomic level. The nature and behavior of matter and energy at that level is sometimes referred to as quantum physics and quantum mechanics.
        In 1900, physicist Max Planck presented his quantum theory to the German Physical Society. Planck had sought to discover the reason that radiation from a glowing body changes in color from red, to orange, and, finally, to blue as its temperature rises. He found that by making the assumption that energy existed in individual units in the same way that matter does, rather than just as a constant electromagnetic wave - as had been formerly assumed - and was therefore quantifiable, he could find the answer to his question. The existence of these units became the first assumption of quantum theory.
        Planck wrote a mathematical equation involving a figure to represent these individual units of energy, which he called quanta. The equation explained the phenomenon very well; Planck found that at certain discrete temperature levels (exact multiples of a basic minimum value), energy from a glowing body will occupy different areas of the color spectrum. Planck assumed there was a theory yet to emerge from the discovery of quanta, but, in fact, their very existence implied a completely new and fundamental understanding of the laws of nature. Planck won the Nobel Prize in Physics for his theory in 1918, but developments by various scientists over a thirty-year period all contributed to the modern understanding of quantum theory.
        </Container>
        <Divider hidden />
        <Footer />
      </div>
    );
  }
}
       

