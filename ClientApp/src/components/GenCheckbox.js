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
          <b>Select your gender</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Male'
            name='radioGroup'
            value='Male'
            checked={this.state.value === 'Male'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='Female'
            name='radioGroup'
            value='Female'
            checked={this.state.value === 'Female'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}

