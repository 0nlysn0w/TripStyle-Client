import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { MenuItem } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';


export default class Footer extends Component {
  displayName = Footer.name

  render() {
    return (
        <Menu borderless size='massive' color='grey' inverted>
            <Container>
                <MenuItem>
                    <List verticalAlign>
                        <List.Item > CUSTOMER SERVICE </List.Item>
                        <List.Item> Delivery </List.Item>
                        <List.Item> Return policy </List.Item>
                        <List.Item> Payment </List.Item>
                        <List.Item> Ordering </List.Item>
                    </List>
                </MenuItem>
                <MenuItem position='right'>
                    <List verticalAlign>
                        <List.Item> THANOS CAR </List.Item>
                        <List.Item> Thanos car </List.Item>
                        <List.Item> Thanos car </List.Item>
                        <List.Item> Thanos car </List.Item>
                        <List.Item> Thanos car </List.Item>
                    </List>
                </MenuItem>
                <MenuItem position='right'>
                    <List verticalAlign>
                        <List.Item> ABOUT US </List.Item>
                        <List.Item> Login </List.Item>
                        <List.Item> Our assortment </List.Item>
                        <List.Item> News </List.Item>
                        <List.Item> Project </List.Item>
                    </List>
                </MenuItem>
            </Container>
        </Menu>
    );
  }
}