import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import GenCheckbox from './GenCheckbox';
import TypeCheckbox from './TypeCheckbox';
import ColorButton from './ColorButton';
import RegionCheckbox from './RegionCheckbox';
import Grid2 from './Grid2';
import { Container } from 'semantic-ui-react';
import { Divider } from 'semantic-ui-react';
import FilterDropdown from './FilterDropdown'

const GridExampleColumnWidth = () => (
  <Grid>
    <Grid.Column width={3}>
        <FilterDropdown/>
        <Divider hidden/>
        <GenCheckbox />
            <Divider hidden />
        <TypeCheckbox />
            <Divider hidden />
        <ColorButton />
            <Divider hidden />
        <RegionCheckbox />
    </Grid.Column>
    <Grid.Column width={13}>
      <Grid2 />
    </Grid.Column>
  </Grid>
)

export default GridExampleColumnWidth