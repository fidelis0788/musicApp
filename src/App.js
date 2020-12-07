import React from "react";
import { TextField, Button } from '@material-ui/core';
import NavBar from './Components/NavBar';
import Dashboard from './Components/Dashboard';
import './App.css';

class App extends React.Component {
  state = {
    username: '',
    password: '',
    loggedIn: false,
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  login = e => {
    this.setState({
      username: '',
      password: '',
      loggedIn: true,
    })
  }

  render() {
    return (
      <div>
        {<NavBar />}

        {this.state.loggedIn ? <Dashboard /> :(
         <div className="form-container">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              label="Username" 
              type="text" 
              placeholder ="Username*"
              value={this.state.username} 
              onChange={this.handleChange} 
              name="username" 
              required 
            />
            <TextField
              label="Password" 
              type="password" 
              placeholder="Password*"
              value={this.state.password} 
              onChange={this.handleChange} 
              name="password" 
              required 
            />
            <br/>
            <Button variant="contained" color="primary" type="submit">LOGIN</Button>
          </form>
        </div>
        )}
        
      </div>
    )
  }
}

export default App;