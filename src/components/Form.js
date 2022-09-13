import React from "react";
import { v4 as uuid } from "uuid";

function Form({ inputText, setInputText, jobApps, setJobApps }) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitJobAppHandler = (e) => {
    e.preventDefault();
    setJobApps([...jobApps, { companyName: inputText, id: uuid() }]);
    setInputText("");
  };
  return (
    <form>
      <input value={inputText} onChange={inputTextHandler} type="text" />
      <button
        className="btn btn-primary"
        onClick={submitJobAppHandler}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
