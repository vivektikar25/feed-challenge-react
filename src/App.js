import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Feeds from "./Components/Feeds";

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Feeds />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
