import React, { Component } from 'react';
import './App.css';
import { Button } from '@material-ui/core';

class ContactApp extends Component {
  constructor(props){
    super(props);

    this.titleChange = this.titleChange.bind(this);
    this.bodyChange = this.bodyChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      error: null,
      isLoaded: false, 
      items: []
    }
  }
  titleChange(n){
    this.setState({
      title: n.target.value
    })
  }

  bodyChange(m){
    this.setState({
      body: m.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    const newItem = {
      title: this.state.title,
      body: this.state.body,
    };
    this.createPost(newItem);
  }


  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
  
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  createPost(data) {
    return fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }}).then(response => {
        alert(response.statusText);
        return response;
      });
    }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className= "container">
          <form onSubmit={this.handleSubmit}>
          <div style={{ padding: 10 }}>
            <span>Title.:</span>
            <input type="text" id="mobile" onChange={this.titleChange} />
          </div>
          <div style={{ padding: 10 }}>
            <span>Body:</span>
            <input type="text" id="email-id" onChange={this.bodyChange} />
          </div>
          <div style={{ padding: 20 }}>
            <Button variant="contained" color="primary" type="submit" >Submit</Button>
          </div>
          </form>

          {items.map(result => (
            <div className= "row">
              <div className= "col-sm">
              {result.id}
              </div>
              <div className= "col-sm">
              {result.name}
              </div>
              <div className= "col-sm">
              {result.username}
              </div>
              <div className= "col-sm">
              {result.address.city}
              </div>
              <div className= "col-sm">
              {result.phone}
              </div>
              <div className= "col-sm">
              {result.website}
              </div>
              <div className= "col-sm">
              {result.company.name}
              </div>
              <div className= "col-sm">
              {result.company.catchPhrase}
              </div>
              <div className= "col-sm">
              {result.company.bs}
              </div>
            </div>
          ))}
        </div>
      );
    }
  }
} 

  export default ContactApp;
