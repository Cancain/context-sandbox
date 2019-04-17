import React from "react";
import { DataContext } from "../../hoc/Context/DataContext";

const output = props => {
  return (
    <div>
      <h3>Result</h3>
      <DataContext.Consumer>
        {value => {
          const { text } = value;
          return (
            <React.Fragment>
              <p>{text}</p>
            </React.Fragment>
          );
        }}
      </DataContext.Consumer>
    </div>
  );
};

export default output;
