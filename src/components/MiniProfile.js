import React from 'react'
import { Button, Form, Popup, Divider } from 'semantic-ui-react'
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
  render() {
    let data = JSON.parse(window.localStorage.getItem('user'));

    return (
      <Popup wide trigger={
        <Button content={data.userId} color='green' circular />} on='click'>
      </Popup>)
  }
}
