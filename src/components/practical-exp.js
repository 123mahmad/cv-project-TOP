import React, { Component } from "react";

class PraExp extends Component {

  constructor() {
    super();
    this.state = {
      userWorkInfo: {
        work: "",
        position: "",
        tasks: "",
        start: "",
        end: "",
      },
      workPortfolio: [],
    };
  };

  showState = () => {console.log(this.state);};

  handleChange = (e) => {
    this.setState({
      userWorkInfo: {
        work: e.target.form.userWork.value,
        position: e.target.form.userPosition.value,
        tasks: e.target.form.userTasks.value,
        start: e.target.form.userWorkStart.value,
        end: e.target.form.userWorkEnd.value,
      },
    });
  };

  handleSubmission = (e) => {
    e.preventDefault();
    this.setState({
      workPortfolio: this.state.workPortfolio.concat(this.state.userWorkInfo),
    });
    this.setState({
      userWorkInfo: {
        work: "",
        position: "",
        tasks: "",
        start: "",
        end: "",
      },
    });
  };

  render() {
    const {work,position,tasks,start,end} = this.state.userWorkInfo;
    return(
      <div className="praExp">
        <form onChange={this.handleChange} onSubmit={this.handleSubmission}>
          <label htmlFor="userWork">Work:</label>
          <input type="text" id="userWork" value={work}/>
          <label htmlFor="userPosition">Position:</label>
          <input type="text" id="userPosition" value={position}/>
          <label htmlFor="userTasks">Tasks:</label>
          <input type="text" id="userTasks" value={tasks}/>       
          <label htmlFor="userWorkStart">Start:</label>
          <input type="date" id="userWorkStart" value={start}/>
          <label htmlFor="userWorkEnd">End:</label>
          <input type="date" id="userWorkEnd" value={end}/>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.showState}>Show PraExp's State</button>
      </div>
    );
  };
};

export default PraExp;
