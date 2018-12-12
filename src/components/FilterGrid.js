import React, { Component } from 'react'
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
    state = { region: undefined, products: undefined, isFiltered: undefined, category: undefined, color: undefined }
    ChangeColor(color) {
        this.setState({ color })
    }

    ChangeCategory(category) {
        this.setState({ category })
    }

    ChangeFiler(isFiltered) {
        this.setState({ isFiltered })
    }

    ChangeRegion(region) {
        this.setState({ region })
    }

    ChangeProducts(products) {
        this.setState({ products })
    }

    render() {
        return (
            <Grid>
                <Grid.Column width={3}>
                    <Form>
                        <FilterDropdown />
                        <Divider hidden />
                        {/* <GenCheckbox />
                        <Divider hidden /> */}
                        <TypeCheckbox ChangeCategory={(category) => this.ChangeCategory(category)} />
                        <Divider hidden />
                        <ColorButton ChangeColor={(color) => this.ChangeColor(color)} />
                        <Divider hidden />
                        <RegionCheckbox ChangeRegion={(region) => this.ChangeRegion(region)} />
                        <Divider section hidden />
                        <Filterbutton region={this.state.region} category={this.state.category} color={this.state.color}
                            changeProducts={(products) => this.ChangeProducts(products)}
                            changeFilter={(isFiltered) => this.ChangeFilter(isFiltered)} />
                    </Form>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Grid2 products={this.state.products}
                        region={this.state.region}
                        isFiltered={this.state.isFiltered}
                        category={this.state.category}
                        color={this.state.color} />
                </Grid.Column>
            </Grid>
        )
    }
}