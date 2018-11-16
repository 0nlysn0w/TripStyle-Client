import React from 'react'
import { Button, Form, Popup, Divider } from 'semantic-ui-react'

export default class Login extends React.Component {

  render() {
    return (
      <Popup wide trigger={
        <Button icon='user' color='blue' circular />} on='click'>
        {<Form>
          <Form.Field>
            <label>User name</label>
            <input placeholder='User name' />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' />
          </Form.Field>
          <Button positive fluid>Login</Button>
          <Divider fitted/>
          <a>Don't have an account yet? register here.</a>
        </Form>}
      </Popup>)
  }
}
