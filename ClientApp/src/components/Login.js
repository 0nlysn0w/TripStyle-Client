import React from 'react'
import { Button, Form, Popup, Divider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class Login extends React.Component {

  render() {
    return (
      <Popup wide trigger={
        <Button icon='user' color='blue' circular />} on='click'>
        {<Form>
          <Form.Field>
            <label>User name</label>
            <input placeholder='User name' required />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder='Password' required />
          </Form.Field>
          <Button positive fluid>Login</Button>
          <Divider fitted />
          <NavLink to='/register'>Don't have an account yet? register here.</NavLink>
        </Form>}
      </Popup>)
  }
}
