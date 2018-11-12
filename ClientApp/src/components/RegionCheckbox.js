import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'
import { Divider } from 'semantic-ui-react';

export default class RadioExampleRadioGroup extends Component {
  state = {}
  handleChange = (e, { value }) => this.setState({ value })

  render() {
    return (
      <Form>
        <Form.Field>
          <b>Select the region</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Africa'
            name='radioGroup'
            value='Africa'
            checked={this.state.value === 'Africa'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Asia'
            name='radioGroup'
            value='Asia'
            checked={this.state.value === 'Asia'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Europe'
            name='radioGroup'
            value='Europe'
            checked={this.state.value === 'Europe'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='North America'
            name='radioGroup'
            value='North America'
            checked={this.state.value === 'North America'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='South America'
            name='radioGroup'
            value='South America'
            checked={this.state.value === 'South America'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Oceania'
            name='radioGroup'
            value='Oceania'
            checked={this.state.value === 'Oceania'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}