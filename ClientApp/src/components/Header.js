import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import SearchExampleStandard from './SearchBar';
import { Button } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class TopHeader extends Component {
  displayName = TopHeader.name

  render() {
    return (
        <Router>
            <Menu borderless size='massive' color='grey' inverted>
                    <MenuItem>
                        <Button basic compact secondary onClick={<Link to='Home'/>}>
                            <h1>TripStyle</h1>
                        </Button>
                    </MenuItem>
                <MenuItem position='right'>
                <SearchExampleStandard></SearchExampleStandard>
                </MenuItem>
                <MenuItem position='right'>
                    <Button icon='user' color='blue' circular>
                    </Button>
                </MenuItem>
                <MenuItem>
                    <Button icon='shopping cart' color='green' circular>
                    </Button>
                </MenuItem>
            </Menu>
        </Router>
    );
  }
}
