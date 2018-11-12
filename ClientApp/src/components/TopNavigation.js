import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react';

export default class TopNavigation extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu fluid widths='5' size='massive'>
        <Menu.Item
          name='Ladies'
          active={activeItem === 'Ladies'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Ladies'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Shirts'/>
                    <Dropdown.Item text='Jackets'/>
                    <Dropdown.Item text='Sweaters'/>
                    <Dropdown.Item text='Blouses'/>
                    <Dropdown.Item text='Dresses'/>
                    <Dropdown.Item text='Pants'/>
                    <Dropdown.Item text='Shoes'/>
                    <Dropdown.Item text='Accessories'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Gents'
          active={activeItem === 'Gents'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Gents'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Shirts'/>
                    <Dropdown.Item text='Jackets'/>
                    <Dropdown.Item text='Sweaters'/>
                    <Dropdown.Item text='Blouses'/>
                    <Dropdown.Item text='Suits'/>
                    <Dropdown.Item text='Pants'/>
                    <Dropdown.Item text='Shoes'/>
                    <Dropdown.Item text='Accessories'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Tops'
          active={activeItem === 'Tops'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Tops'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Shirts'/>
                    <Dropdown.Item text='Jackets'/>
                    <Dropdown.Item text='Sweaters'/>
                    <Dropdown.Item text='Blouses'/>
                    <Dropdown.Item text='Dresses'/>
                    <Dropdown.Item text='Vests'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Bottoms'
          active={activeItem === 'Bottoms'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Bottoms'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Trousers'/>
                    <Dropdown.Item text='Shorts'/>
                    <Dropdown.Item text='Skirts'/>
                    <Dropdown.Item text='Jeans'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Activity'
          active={activeItem === 'Activity'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Activity'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Athletics'/>
                    <Dropdown.Item text='Running'/>
                    <Dropdown.Item text='Wintersports'/>
                    <Dropdown.Item text='Hiking'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
}
