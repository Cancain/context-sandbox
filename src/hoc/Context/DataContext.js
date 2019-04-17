import React from "react";

export const DataContext = React.createContext();

class Provider extends React.Component {
  state = {
    text: null,
    showResult: false
  };

  setText = text => {
    this.setState({ text: text });
  };

  toggleResult = () => {
    this.setState({ showResult: !this.state.showResult });
  };

  render() {
    return (
      <DataContext.Provider
        value={{
          text: this.state.text,
          setText: this.setText,
          showResult: this.state.showResult,
          toggleResult: this.toggleResult
        }}
      >
        {this.props.children}
      </DataContext.Provider>
    );
  }
}

export default Provider;
