import React, { Component } from "react";

class GenInfo extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: {
        name:"",
        email:"",
        phone:"",
      },
    };
  };

  handleSubmission = (e) => {
    e.preventDefault();
    this.setState({
      userInfo: {
        name: e.target.elements.userName.value,
        email: e.target.elements.userEmail.value,
        phone: e.target.elements.userPhone.value,
      },
    });
  };

  showState = () => {console.log(this.state);};

  render() {
    return(
      <div className="genInfo">
        <form onSubmit={this.handleSubmission}>
          <label htmlFor="userName">Name:</label>
          <input type="text" id="userName"/>
          <label htmlFor="userEmail">Email:</label>
          <input type="email" id="userEmail"/>
          <label htmlFor="userPhone">Phone:</label>
          <input type="tel" id="userPhone"/>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.showState}>Show GenInfo's State</button>
      </div>
    );
  };
};

export default GenInfo;
