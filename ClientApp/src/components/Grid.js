import React from 'react'
import { Grid, Image } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const GridExampleRelaxed = () => (
  <Grid columns={5} centered relaxed>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' as={NavLink} to='/product' />
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' as={NavLink} to='/product'/>
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' as={NavLink} to='/product'/>
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' as={NavLink} to='/product'/>
    </Grid.Column>
    <Grid.Column>
      <Image src='https://react.semantic-ui.com/images/wireframe/image.png' as={NavLink} to='/product'/>
    </Grid.Column>
  </Grid>
)

export default GridExampleRelaxed