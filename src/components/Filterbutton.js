import React, { Component } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import Grid2 from './Grid2'
import RegionCheckbox from './RegionCheckbox'

export default class Filterbutton extends Component {     

    // constructor()
    // {
    //     super()
    //     this.state = {colorClothes: "Red", region: "Afrika"}
        
    // }
    
    async handleClick() { 
    {
        console.log(this.props.region)
        // console.log(this.state)
        // var filterParams =
        // {
        //     colorClothes: this.state.colorClothes,
        //     region: this.state.region
        // }
        // https://localhost:5001/api/product/mark/male/Type/Red/Afrika
        try {
            const url = 'https://localhost:5001/api/product?region=' + this.props.region;
            const result = await fetch (url, {method: "GET"})
              .then((res) => {
                return res.json()
              })
              .then((product) => {
                return product
              })
              .catch((error) => {
                console.log(error)
              })
              this.props.changeProducts(result);
        } catch (error) {
            console.log(error)
        }
        //   .then(res => res.json())
        //   .then(json => {
        //     this.setState({
        //       isLoaded: true,
        //       items: json
        //     })
        //   });
        }
    }

    render() {
        return (
            <Button basic color='teal' animated='fade' onClick={()=>this.handleClick()}>
                <Button.Content visible>Filter me!</Button.Content>
                <Button.Content hidden>
                    <Icon name='filter' />
                </Button.Content>
            </Button>
        )
    }
}


