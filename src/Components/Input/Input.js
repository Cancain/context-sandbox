import React, { useRef, useContext } from "react";

import style from "./Input.module.css";
import { DataContext } from "../../hoc/Context/DataContext";

const input = props => {
  const inputEl = useRef();

  const test = useContext(DataContext);
  console.log(test);

  const submitHandler = text => {
    test.setText(text);
    test.toggleResult();
  };

  return (
    <DataContext.Consumer>
      {value => {
        const { setText } = value;

        return (
          <div className={style.Input}>
            <label>Enter some text</label>
            <input placeholder="Text goes here..." ref={inputEl} />
            <button
              type="submit"
              onClick={() => submitHandler(inputEl.current.value)}
            >
              GO!
            </button>
          </div>
        );
      }}
    </DataContext.Consumer>
  );
};

export default input;
