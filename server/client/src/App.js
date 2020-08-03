import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <a href="/auth/google">Sign In</a>
      </div>
    );
  }
}

export default App;
