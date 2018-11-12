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
          <b>Select the type</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='Top'
            name='radioGroup'
            value='Top'
            checked={this.state.value === 'Top'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='pants'
            name='radioGroup'
            value='pants'
            checked={this.state.value === 'pants'}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='shoes'
            name='radioGroup'
            value='shoes'
            checked={this.state.value === 'shoes'}
            onChange={this.handleChange}
          />
        </Form.Field>
      </Form>
    )
  }
}