import React, { Component } from 'react'
import { Form, Radio } from 'semantic-ui-react'

export default class TypeCheckbox extends Component {
  state = {category: '' }
  handleChange(value) {
    this.setState({ category: value }, () => this.props.ChangeCategory(this.state.category));
  }

  render() {
    return (
      <Form>
        <Form.Field>
          <b>Select the type</b>
        </Form.Field>
        <Form.Field>
          <Radio
            label='skirt'
            name='skirt'
            value='2'
            checked={this.state.value === '2'}
            onChange={() => this.handleChange('2')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='dress'
            name='dress'
            value='3'
            checked={this.state.value === '3'}
            onChange={() => this.handleChange('3')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='suit'
            name='suit'
            value='4'
            checked={this.state.value === '4'}
            onChange={() => this.handleChange('4')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='underwear'
            name='underwear'
            value='5'
            checked={this.state.value === '5'}
            onChange={() => this.handleChange('5')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='swimsuit'
            name='swimsuit'
            value='6'
            checked={this.state.value === '6'}
            onChange={() => this.handleChange('6')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='shirt'
            name='shirt'
            value='7'
            checked={this.state.value === '7'}
            onChange={() => this.handleChange('7')}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            label='coat'
            name='coat'
            value='8'
            checked={this.state.value === '8'}
            onChange={() => this.handleChange('8')}
          />
        </Form.Field>
      </Form>
    )
  }
}

