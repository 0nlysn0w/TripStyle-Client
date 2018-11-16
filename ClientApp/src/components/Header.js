import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import SearchExampleStandard from './SearchBar';
import { Button } from 'semantic-ui-react';
import Login from './Login';


export default class TopHeader extends Component {
    displayName = TopHeader.name

    render() {
        return (
            <Menu borderless size='massive' >
                <MenuItem>
                    <Button basic compact secondary>
                        <h1>TripStyle</h1>
                    </Button>
                </MenuItem>
                <MenuItem position='right'>
                    <SearchExampleStandard></SearchExampleStandard>
                </MenuItem>
                <MenuItem className="Login" position='right'>
                    <Login />
                </MenuItem>
                <MenuItem>
                    <Button basic icon='shopping cart' color='green' circular>
                    </Button>
                </MenuItem>
            </Menu>
        );
    }
}
