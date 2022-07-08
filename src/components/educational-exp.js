import React, { Component } from "react";

class EduExp extends Component {

  constructor() {
    super();
    this.state = {
      userSchoolInfo: {
        school: "",
        degree: "",
        start: "",
        end: "",
      },
      schoolPortfolio: [],
    };
  };

  handleSubmission = (e) => {
    e.preventDefault();
    this.setState({
      userSchoolInfo: {
        school: e.target.elements.userSchool.value,
        degree: e.target.elements.userDegree.value,
        start: e.target.elements.userSchoolStart.value,
        end: e.target.elements.userSchoolEnd.value,
      },
      schoolPortfolio: [],
    });
    this.addNewSchool();
  };

  addNewSchool = (e) => {
    this.setState({
      schoolPortfolio: this.state.schoolPortfolio.concat(this.state.userSchoolInfo),
    });
  };

  showState = () => {console.log(this.state);};

  render() {
    return(
      <div className="eduExp">
        <form onSubmit={this.handleSubmission}>
          <label htmlFor="userSchool">School:</label>
          <input type="text" id="userSchool"/>
          <label htmlFor="userDegree">Degree:</label>
          <input type="text" id="userDegree"/>
          <label htmlFor="userSchoolStart">Start:</label>
          <input type="date" id="userSchoolStart"/>
          <label htmlFor="userSchoolEnd">End:</label>
          <input type="date" id="userSchoolEnd"/>
          <button type="submit">Submit</button>
        </form>
          <button onClick={this.addNewSchool}>Add School</button>
        <button onClick={this.showState}>Show EduExp's State</button>
      </div>
    );
  };
};

export default EduExp;
