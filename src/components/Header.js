import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import SearchExampleStandard from './SearchBar';
import { Button } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import Home from './Home';
import ShoppingCart from './ShoppingCart';
import LoginPage from './Login';
import MiniProfile from './MiniProfile';

export default class TopHeader extends Component {
    displayName = TopHeader.name

    render() {
        let profileView;
        if(window.localStorage.getItem('user') == undefined) {
            profileView = <LoginPage />
        } 
        else {
            profileView = <MiniProfile />
        }

        return (
            <Menu borderless size='massive' color='grey' inverted>
                <MenuItem>
                    <Button basic compact secondary as={NavLink} to='/'>
                        <h1>TripStyle</h1>
                    </Button>
                </MenuItem>
                <MenuItem position='right'>
                    <SearchExampleStandard></SearchExampleStandard>
                </MenuItem>
                <MenuItem className="Login" position='right'>

                    {profileView}

                </MenuItem>
                <MenuItem>
                    <ShoppingCart />
                </MenuItem>
            </Menu>
        );
    }
}