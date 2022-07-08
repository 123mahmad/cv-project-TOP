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

  showState = () => {console.log(this.state);};
  
  handleChange = (e) => {
    this.setState({
      userSchoolInfo: {
        school: e.target.form.userSchool.value,
        degree: e.target.form.userDegree.value,
        start: e.target.form.userSchoolStart.value,
        end: e.target.form.userSchoolEnd.value,
      },
    });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    this.setState({
      schoolPortfolio: this.state.schoolPortfolio.concat(this.state.userSchoolInfo),
    });
    this.setState({
      userSchoolInfo: {
        school: "",
        degree: "",
        start: "",
        end: "",
      },
    });
  };

  render() {
    const {school,degree,start,end} = this.state.userSchoolInfo;
    return(
      <div className="eduExp">
        <form onChange={this.handleChange} onSubmit={this.handleSubmission}>
          <label htmlFor="userSchool">School:</label>
          <input type="text" id="userSchool" value={school}/>
          <label htmlFor="userDegree">Degree:</label>
          <input type="text" id="userDegree" value={degree}/>
          <label htmlFor="userSchoolStart">Start:</label>
          <input type="date" id="userSchoolStart" value={start}/>
          <label htmlFor="userSchoolEnd">End:</label>
          <input type="date" id="userSchoolEnd" value={end}/>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.showState}>Show EduExp's State</button>
      </div>
    );
  };
};

export default EduExp;
