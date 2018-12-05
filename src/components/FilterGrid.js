import React, {Component} from 'react'
import { Grid, Image, Form } from 'semantic-ui-react'
import GenCheckbox from './GenCheckbox';
import TypeCheckbox from './TypeCheckbox';
import ColorButton from './ColorButton';
import RegionCheckbox from './RegionCheckbox';
import Grid2 from './Grid2';
import { Divider } from 'semantic-ui-react';
import FilterDropdown from './FilterDropdown'
import Filterbutton from './Filterbutton'



export default class FilterGrid extends Component {
    state = { region: undefined, products: undefined }
    ChangeRegion(region){
        this.setState({region})
    }

    ChangeProducts(products){
        this.setState({products})
    }

    render() {
        return (
            <Grid>
                <Grid.Column width={3}>
                    <Form>
                        <FilterDropdown />
                        <Divider hidden />
                        <GenCheckbox />
                        <Divider hidden />
                        <TypeCheckbox />
                        <Divider hidden />
                        <ColorButton />
                        <Divider hidden />
                        <RegionCheckbox ChangeRegion= {(region)=> this.ChangeRegion(region)} />
                        <Divider section hidden />
                        <Filterbutton region= {this.state.region} changeProducts= {(products)=> this.ChangeProducts(products)}/>
                    </Form>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Grid2 products= {this.state.products} region= {this.state.region}/> 
                </Grid.Column>
            </Grid>
        )
    }
}