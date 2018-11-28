import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Dropdown } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

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
            <Dropdown text='Ladies' simple as={NavLink} to='/filter' >
                <Dropdown.Menu>
                    <Dropdown.Item text='Shirts' as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Jackets'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Sweaters'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Blouses'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Dresses'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Pants'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Shoes'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Accessories'as={NavLink} to='/filter'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Gents'
          active={activeItem === 'Gents'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Gents' simple as={NavLink} to='/filter'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Shirts'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Jackets'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Sweaters'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Blouses'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Suits'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Pants'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Shoes'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Accessories'as={NavLink} to='/filter'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Tops'
          active={activeItem === 'Tops'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Tops' simple as={NavLink} to='/filter'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Shirts'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Jackets'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Sweaters'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Blouses'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Dresses'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Vests'as={NavLink} to='/filter'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Bottoms'
          active={activeItem === 'Bottoms'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Bottoms' simple as={NavLink} to='/filter'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Trousers'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Shorts'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Skirts'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Jeans'as={NavLink} to='/filter'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>

        <Menu.Item
          name='Activity'
          active={activeItem === 'Activity'}
          onClick={this.handleItemClick}
        >
            <Dropdown text='Activity' simple as={NavLink} to='/filter'>
                <Dropdown.Menu>
                    <Dropdown.Item text='Athletics'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Running'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Wintersports'as={NavLink} to='/filter'/>
                    <Dropdown.Item text='Hiking'as={NavLink} to='/filter'/>
                </Dropdown.Menu>
            </Dropdown>
        </Menu.Item>
      </Menu>
    )
  }
}
