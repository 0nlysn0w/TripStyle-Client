import React from 'react'
import { Button, Form, Popup, Divider } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import { userInfo } from 'os';
import { connect } from 'react-redux';
import { userActions } from '../_actions/user.actions';
import { BASE_ADDRESS } from '../_constants';
import { history } from '../_helpers';

export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);

    // reset login status
    //this.props.dispatch(userActions.logout());

    this.state = {
      email: '',
      password: '',
      submitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    console.log(this.state)
  }

  handleSubmit(e) {
    console.log(this.state)
    
    this.setState({ submitted: true });
    const { email, password } = this.state;
    const { dispatch } = this.props;

    console.log(this.props);

    if (email && password) {
      //dispatch(userActions.login(email, password));
      // userActions.login(email, password);
      this.login(email, password);
    }
  }

  login(email, password) {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };


    console.log(`${BASE_ADDRESS}`);

    return fetch(`${BASE_ADDRESS}/user/authenticate`, requestOptions)
      .then(this.handleResponse)
      .then(user => {
        // login successful if there's a jwt token in the response
        if (user.token) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          console.log(user);
          // history.push('/');
          this.setState({ state: this.state });

        }

        return user;
      });
  }


  handleResponse(response) {
    return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
        if (response.status === 401) {
          // auto logout if 401 response returned from api
          this.logout();
          window.location.reload(true);
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
      }

      return data;
    });
  }

  render() {
    const { loggingIn } = this.props;
    const { email, password, submitted } = this.state;
    return (
      <Popup wide trigger={
        <Button icon='user' color='blue' circular />} on='click'>
        {<Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email</label>
            <input id="email" type="text" placeholder='Email' required onChange={this.handleChange} />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input id="password" type="password" placeholder='Password' required onChange={this.handleChange} />
          </Form.Field>

          <Button positive fluid>Login</Button>
          {loggingIn &&
            <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
          }

          {/* <Link to={'/user/1'}><Button positive fluid>Login</Button></Link> */}


          <Divider fitted />
          <NavLink to='/register'>Don't have an account yet? register here.</NavLink>
        </Form>}
      </Popup>)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    userActions: (email, password) => dispatch(userActions.login(email, password))
  }
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication;
  return {
    loggingIn
  };
}

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
