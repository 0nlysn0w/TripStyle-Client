import React from 'react'
import { Button, Form, Popup, Divider, Item, Card, Image } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { userInfo } from 'os';
import { connect } from 'react-redux';
import { userActions } from '../_actions/user.actions';
import { BASE_ADDRESS } from '../_constants';
import { history } from '../_helpers';

export default class MiniProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
  }
  
  render() {
    let data = JSON.parse(window.localStorage.getItem('user'));

    return (
      <Popup wide trigger={
        <Button content={data.userId} color='green' circular />} on='click'>

        <Card>
          {/* <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' /> */}
          <Card.Content>
            <Card.Header>{data.firstname + "\u00a0" + data.lastname}</Card.Header>
            <Card.Meta>
              <span className='email'>{data.email}</span>
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <NavLink onClick={this.logout()} to="/">Logout</NavLink> | <NavLink to='#fullprofile'>View profile</NavLink>
          </Card.Content>
        </Card>

      </Popup>)
  }
}
