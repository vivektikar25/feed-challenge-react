import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Activities from "./Components/Activities";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Activities />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
