import React, { Component } from "react";
import "./App.css";

import Input from "../Components/Input/Input";
import Output from "../Components/Output/Output";
import Provider, { DataContext } from "../hoc/Context/DataContext";

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <h1>Context sandbox</h1>
          <Input />
          <DataContext.Consumer>
            {value => {
              const { showResult } = value;
              return showResult ? <Output /> : null;
            }}
          </DataContext.Consumer>
        </div>
      </Provider>
    );
  }
}

export default App;
