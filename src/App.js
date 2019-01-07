import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Grid } from '@material-ui/core';

class ContactApp extends Component {
  constructor(props){
    super(props);
    this.emailChange = this.emailChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.mobileChange = this.mobileChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '', mobile: '', email: '', items: []
    };
  }

  emailChange(e){
    this.setState({
      email: e.target.value
    })
  }

  nameChange(n){
    this.setState({
      name: n.target.value
    })
  }

  mobileChange(m){
    this.setState({
      mobile: m.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = {
      name: this.state.name,
      mobile: this.state.mobile,
      email: this.state.email
    };
    this.setState(state => ({
      items: state.items.concat(newItem)
    }));
  }


  render() {
      let name;
      return(
        <div>
          <h1>Contacts Application</h1>
          <hr />
          <ul>
            {this.state.items.map(item => (
              <li key={item.email}>{item.name}, {item.mobile}, {item.email}</li>
            ))}
          </ul>
          <div>
            <h3>Add Contact Form</h3>
            <form onSubmit={this.handleSubmit}>
            <div style={{ padding: 10 }}>
            <Grid container spacing={24}>            
              <Grid item xs={6}>
                <span>Name:</span>
                <input type="text" id="name" onChange={this.nameChange} />
              </Grid>
            </Grid>
            </div>
            <div style={{ padding: 10 }}>
              <span>Mobile No.:</span>
              <input type="text" id="mobile" onChange={this.mobileChange} />
            </div>
            <div style={{ padding: 10 }}>
              <span>Email ID:</span>
              <input type="text" id="email-id" onChange={this.emailChange} />
            </div>
            <div style={{ padding: 20 }}>
              <Button variant="contained" color="primary" type="submit" >Submit</Button>
            </div>
            </form>
          </div>
        </div>
      );
    }
  }

  export default ContactApp;
