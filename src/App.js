import React, { Component } from "react";
import GenInfo from "./components/gen-info";
import EduExp from "./components/educational-exp";
import PraExp from "./components/practical-exp";

class App extends Component {

  constructor() {
    super();
    this.state = {

    };
  };
  
  render() {
    return(
      <div className="app">
        <GenInfo/>
        <EduExp/>
        <PraExp/>
      </div>
    );
  };

};

export default App;
