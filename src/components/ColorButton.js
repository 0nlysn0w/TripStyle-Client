import React, { Component } from 'react'
import { Button, Form, Icon, Radio, Segment } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react';

export default class Colorbutton extends Component {
  state = { color: '' }
  // handleChange = (e, { value }) => this.setState({ value })
  handleChange(value) {
    this.setState({ color: value }, () => this.props.ChangeColor(this.state.color));
  }
  
  render() {
    return (
      <Form>
        <Form.Field>
          <b>Select the color</b>
        </Form.Field>
        <Form.Field>
          <Segment inverted color= 'black'>
          <Radio
            label='Black'
            name='color'
            value='Black'
            checked={this.state.color === 'Black'}
            onChange={() => this.handleChange('Black')} />
        </Segment>
        </Form.Field>

        <Form.Field>
          <Segment color= 'white'>
          <Radio
            label='White'
            name='color'
            value='White'
            checked={this.state.color === 'White'}
            onChange={() => this.handleChange('White')} />
        </Segment>
        </Form.Field>        

        <Form.Field>
          <Segment inverted color= 'purple'>
          <Radio
            label='Purple'
            name='color'
            value='Purple'
            checked={this.state.color === 'Purple'}
            onChange={() => this.handleChange('Purple')} />
        </Segment>
        </Form.Field>

        <Form.Field>
          <Segment inverted color= 'blue'>
          <Radio
            label='Blue'
            name='color'
            value='Blue'
            checked={this.state.color === 'Blue'}
            onChange={() => this.handleChange('Blue')} />
        </Segment>
        </Form.Field>

        <Form.Field>
          <Segment inverted color= 'pink'>
          <Radio
            label='Pink'
            name='color'
            value='Pink'
            checked={this.state.color === 'Pink'}
            onChange={() => this.handleChange('Pink')} />
        </Segment>
        </Form.Field>

        <Form.Field>
          <Segment inverted color= 'red'>
          <Radio
            label='Red'
            name='color'
            value='Red'
            checked={this.state.color === 'Red'}
            onChange={() => this.handleChange('Red')} />
        </Segment>
        </Form.Field>

        <Form.Field>
          <Segment inverted color= 'yellow'>
          <Radio
            label='Yellow'
            name='color'
            value='Yellow'
            checked={this.state.color === 'Yellow'}
            onChange={() => this.handleChange('Yellow')} />
        </Segment>
        </Form.Field>
      </Form>
    )
  }
}
